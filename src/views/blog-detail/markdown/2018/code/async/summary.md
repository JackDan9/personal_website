# async

------

| 标题 | 内容 |
| --- | --- |
| async的引入 | `this`指向, `构造函数`, `arguments对象`,  `Generator` |
| async的含义 | async函数是什么? |
| async的特点 | 内置执行器, 更好的语义, 更广的适用性, 返回值是`Promise` |

------

## async的引入

- ES2017标准引入了` async `函数，使得异步操作变得更加方便。也可以说是`Generator`的语法糖。

### (了解)AsyncFunction构造函数

- `AsyncFunction`构造函数用来创建新的**异步函数**对象，JavaScript中每个异步函数都是`AsyncFunction`的对象。

```javascript
async function asyncFunction(){}
asyncFunction.constructor
// AsyncFunction() { [native code] }
```

- **注意**: `AsyncFunction`并不是全局对象，需要通过下面的方法来获取:

```javascript
Object.getPrototypeOf(async function(){}).constructor
// AsyncFunction() { [native code] }
```

#### AsyncFunction语法
```javascript
new AsyncFunction([arg1[, arg2[, ...argN]],] functionBody)
```

#### AsyncFunction参数

- `arg1, arg2, ... argN`: 函数的参数名，它们是符合`JavaScript`标示符规范的一个或多个用逗号隔开的字符串。例如`x, theValue`或`a, b`。

- `functionBody`: 一段字符串形式的`JavaScript`语句，这些语句组成了新函数的定义。

```javascript
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
var a = new AsyncFunction('a',
                          'b',
                          'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);');
a(10, 20).then(v => {
  console.log(v); // 4 秒后打印 30
});
```

- 执行` AsyncFunction `构造函数的时候，会创建一个**异步函数**对象。但是这种方式不如先用**异步函数表达式**定义一个异步函数，然后再调用其来创建**异步函数**对象来的高效，因为第二种方式中**异步函数是与其他代码一起被解释器解析**的，而第一种方式的**函数体是单独解析**的。
- 传递给` AsyncFunction `构造函数的**所有参数**，都会成为**新函数中的变量**，**变量的名称和定义顺序与各参数相同**。
- **注意**: 使用` AsyncFunction `构造函数创建的**异步函数**并不会在**当前上下文中创建闭包**，其**作用域始终是全局**的。因此运行的时候只能访问**它们自己的本地变量**和**全局变量**，但**不能访问构造函数被调用的那个作用域中的变量**。这是它与` eval `不同的地方(`eval`函数最好永远也不要使用)。

```javascript
/**
 * @description 自己的本地变量和全局变量
*/
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  })
}

var c = 1;
var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

var a = new AsyncFunction('a', 'b', 'c', 'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b) + await resolveAfter2Seconds(c);');
a(10, 20, c).then(v => {
  console.log(v);
})
```

```javascript
/**
 * @description 建议: 永远不要使用eval
*/
function test() {
  var x = 2, y = 4;
  console.log(eval('x + y'));  // 直接调用，使用本地作用域，结果是 6
  var geval = eval; // 等价于在全局作用域调用
  console.log(geval('x + y')); // 间接调用，使用全局作用域，throws ReferenceError 因为`x`未定义
  (0, eval)('x + y'); // 另一个间接调用的例子
}
```

- 调用` AsyncFunction `构造函数时可以省略` new `，其效果是一样的。

------

### async函数

- async函数是使用`async`关键字声明的函数。async函数是AsyncFunction构造函数的实例，并且其中允许使用`await`关键字。
- async和await关键字让我们可以用一种更简洁的方式写出基于`Promise`的异步行为，而无需刻意地链式调用`promise`。

```javascript
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
}

aysncCall();// 先输出calling 2秒之后输出resolved
```

#### async函数的语法
```javascript
async function name([param[, param[, ... param]]]) {
  statements
}
```

#### async函数的参数
- `name`: 函数名称。
- `param`: 要传递给函数的参数的名称。
- `statements`: 包含函数主体的表达式。可以使用`await`机制。

#### 返回值
- 一个`Promise`, 这个`promise`要么会通过一个由`async`函数返回的值被解决, 要么会通过一个从`async`函数中抛出的(或其中没有被捕获到的)异常被拒绝。

```javascript
async function foo() {
  return 1
}
// 等价于
function foo() {
  return Promise.resolve(1)
}
```

```javascript
async function foo() {
  await 1
}
// 等价于
function foo() {
  return Promise.resolve(1).then(() => undefined)
}
```

------

## async的含义

- async函数的函数体可以被看作是由**0个**或者**多个**await表达式分割开来的。从**第一行代码**直到(并包括)**第一个await表达式**(如果有的话)都是**同步运行**的。这样的话，一个**不含await表达式的async函数是会同步运行**的。然而, 如果**函数体内有一个await表达式**, async函数就一定会**异步执行**。

```javascript
// promise链不是一次就构建好的，相反，promise链是分阶段构造的，因此在处理异步函数时必须注意对错误函数的处理
async function foo() {
  const result1 = await new Promise((resolve) => setTimeout(() => resolve('1')))
  const result2 = await new Promise((resolve) => setTimeout(() => resolve('2')))
}
foo()
```

- 上面的执行顺序:

- 1. foo函数的第一行将会同步执行, await将会等待promise的结束。然后暂停通过foo的进程, 并将控制权交还给调用foo的函数。
- 2. 一段时间后, 当第一个promise完结的时候, 控制权将重新回到foo函数内。示例中将会`1`(promise状态为fulfilled)作为结果返回给await表达式的左边即`result1`。接下来函数会继续进行, 到达第二个await区域, 此时foo函数的进程将再次被暂停。
- 3. 一段时间后, 同样当第二个promise完结的时候, `result2`将被赋值为`2`, 之后函数将会正常同步执行, 将默认返回`undefined`。

```javascript
// 在promise链上配置了.catch处理程序，将抛出未处理的promise错误。这是因为p2返回的结果不会被await处理
async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve('1'), 1000))
  const p2 = new Promise((_,reject) => setTimeout(() => reject('2'), 500))
  const results = [await p1, await p2] // 不推荐使用这种方式，请使用 Promise.all或者Promise.allSettled 
}
foo().catch(() => {}) // 捕捉所有的错误...
```

```javascript
// 函数声明
async function foo() {};

// 函数表达式
const foo = async function () {};

// 对象的方法
let obj = { async foo() {} };
obj.foo().then(...)

// Class的方法
class Storage {
  constructor() {
    this.cachePromise = caches.open('avatars');
  }

  async getAvatar(name) {
    const cache = await this.cachePromise;
    return cache.match(`/avatars/${name}.jpg`);
  }
}

const storage = new Storage();
storage.getAvatar('jack').then(...);

// 箭头函数
const foo = async () => {};
```

-----

## async的特点

### 内置执行器
- `Generator `函数的执行必须靠执行器，所以才有了`co`模块，而async函数**自带执行器**。也就是说，async函数的执行，与普通函数一模一样，只要一行。

```javascript
const asyncFunction = async function () {
  const f1 = await 1
  const f2 = await 2
  console.log(f1.toString());
  console.log(f2.toString());
};

asyncFunction();
// 1
// 2
```

- 上面的代码调用了`asyncFunction`函数, 然后它就会自动执行, 输出最后结果。这完全不像`Generator`函数, 需要调用`next`方法，或者使用`co`模块, 才能真正执行, 得到最后结果。

```javascript
var gen = function* () {
  var f1 = yield 1
  var f2 = yield 2
  console.log(f1.toString())
  console.log(f2.toString())
}

var co = require('co'); // Generatir直接执行需要使用co模块
co(gen).then(function() {
  console.log('Generator 函数执行完成');
});
// 1
// 2
// Generator 函数执行完成
```

### 更好的语义

- `async`和`await`, 比起**星号**和`yield`, 语义更清楚了。`async`表示函数里有异步操作, `await`表示紧跟在后面的表达式需要等待结果。

```javascript
const asyncFunction = async function() {
  const f1 = await 1 // 紧跟在后面的表达式需要等待结果
  const f2 = await 2
  console.log(f1.toString())
  console.log(f2.toString())
}
```

```javascript
const genFunction = function* () {
  const f1 = yield 1
  const f2 = yield 2
  console.log(f1.toString())
  console.log(f2.toString())
}
```

### 更广的实用型
- `co`模块约定, `yield`命令后面只能是**Thunk函数**或者**Promise对象**, 而`async`函数的`await`命令后面, 可以是**Promise对象**和**原始类型的值**(**数值**、**字符串**和**布尔值**, 但这时会自动转成**立即resolved的Promise对象**)。

```javascript

```

### 返回值是Promise
- `async`函数的返回值是**Promise对象**, 这比`Generator`函数的返回值是`Iterator`对象方便多了。你可以用`then`方法指定下一步的操作。

```javascript
function getStockSymbol(name) {
  const symbolName = Symbol(name)
  return symbolName
}

function getStockUser(symbol) {
  return symbol
}

async function getUserByName(name) {
  const symbol = await getStockSymbol(name);
  const stockUser = await getStockUser(symbol);
  console.log('stockUser', stockUser)
  return stockUser;
}

getUserByName('JackDan').then(function (result) {
  console.log(result)
})
```

- 进一步说, `async`函数完全可以看作多个异步操作, 包装成的一个**Promise对象**, 而`await`命令就是内部`then`命令的语法糖。

```javascript
function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms)
  console.log(value)
}

asyncPrint('hello world', 5000);
// 间隔5秒 输出hello world
```

- 由于`async`函数返回的是` Promise `对象，可以作为`await`命令的参数。

```javascript
async function timeout(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 3000);
// 间隔3秒 输出hello world
```

------

## 来个示例

```javascript
var resolveAfter2Seconds = function () {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(function() { 
      resolve('slow');
      console.log("slow promise is done");
    }, 20000);
  });
};

var resolveAfter1Seconds = function () {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(function() {
      resolve('fast');
      console.log("fast promise is done");
    }, 1000);
  });
};

var parallel = async function() {
  console.log('==PARALLEL with await Promise.all==');
  
  await Promise.all([
    (async() => console.log(await resolveAfter2Seconds()))(),
    (async() => console.log(await resolveAfter1Seconds()))()
  ]);
}

setTimeout(parallel, 10000);
```

```javascript
var resolveAfter2Seconds = function () {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    resolve('slow');
    console.log("slow promise is done")
  }, 2000);
}

var resolveAfter1Seconds = function () {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    resolve('fast');
    console.log("fast promise is done");
  }, 1000);
}

var sequentialStart = async function() {
  console.log('==SEQUENTIAL START==');

  // 1. Execution gets here almost instantly
  const slow = await resolveAfter2Seconds();
  console.log(slow); // 2. this runs 2 seconds after 1.

  const fast = await resolveAfter1Second();
  console.log(fast); // 3. this runs 3 seconds after 1.
}
```

```javascript
var resolveAfter2Seconds = function () {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    resolve('slow');
    console.log("slow promise is done")
  }, 2000);
}

var resolveAfter1Seconds = function () {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    resolve('fast');
    console.log("fast promise is done");
  }, 1000);
}

var concurrentStart = async function() {
  console.log('==CONCURRENT START with await==');
  const slow = resolveAfter2Seconds(); // starts timer immediately
  const fast = resolveAfter1Second(); // starts timer immediately

  // 1. Execution gets here almost instantly
  console.log(await slow); // 2. this runs 2 seconds after 1.
  console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}
```

------

> JackDan Thinking
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction