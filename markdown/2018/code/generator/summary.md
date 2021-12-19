# Generator

| 标题 | 内容 |
| --- | --- |
| Generator来源 | 为什么需要Generator？ |
| 协程 | 为什么需要协程以及协程的概念和原理 |
| Generator原理 | Generator是怎么实现的？ |
| Generator实现 | 如何原生实现Generator？|
| Generator自动流程 | 解决Generator执行的痛点 |

## 为什么需要Generator？

### 异步概念
- 所谓"异步"，简单说就是**一个任务不是连续完成**的，可以理解成该任务被人为分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。
- 比如，有一个任务是读取文件进行处理，任务的第一段是向操作系统发出请求，要求读取文件。然后，程序执行其他任务，等到操作系统返回文件，再接着执行任务的第二段（处理文件）。这种不连续的执行，就叫做**异步**。
- 相应地，连续的执行就叫做**同步**。由于是连续执行，不能插入其他任务，所以操作系统从硬盘读取文件的这段时间，**程序只能干等着**。
- **异步编程**对 JavaScript 语言太重要。JavaScript 语言的执行环境是"单线程"的，如果没有**异步编程**，**根本没法用**，**非卡死不可**，类似于Promise的介绍。



### 异步编程的方法
- 回调函数: 回调函数本身并没有问题，它的问题出现在多个回调函数嵌套。

```javascript
/**
 * @description 浏览器中的JavaScript是没有文件操作的能力的(基于安全，不能直接操作本地文件)。
 * Node中的 JavaScript 具有文件操作的能力
 * @function function(err,data) 回调函数
 * @param fs 使用 require 方法加载 fs 核心模块
 * 
*/
var fs = require("fs");

fs.readFile(fileA, 'utf-8', function (err, data) {
  fs.readFile(fileB, 'utf-8', function (err, data) {
    fs.readFile(fileC, 'utf-8', function (err, data) {
      // ...
    })
  })
})
```

- 事件监听
- 发布/订阅
- Promise对象: 代码冗余，原来的任务被 `Promise` 包装了一下，不管什么操作，一眼看去**都是一堆`then`**，**原来的语义变得很不清楚**。

```javascript
/**
 * @description fs-readfile-promise 作用就是返回一个Promise版本的readFile函数。
 * Promise提供then方法加载回调函数
 * Promise提供catch方法捕捉执行过程中抛出的错误
 * Promise的写法只是回调函数的改进，使用then方法以后，异步任务的两段执行看得更清楚了，除此以外，并无新意。
*/
var readFile = require('fs-readfile-promise');

readFile(fileA)
.then(function (data) {
  console.log(data.toString());
})
.then(function () {
  return readFile(fileB);
})
.then(function (data) {
  console.log(data.toString());
})
.catch(function (err) {
  console.log(err);
});
```

- 所以我们需要一种全新的写法去更加合理地实现异步编程，所以我们接下来迎来了`Generator`。

------

## 迎来Generator
- `Generator`函数是ES6提供的一种**异步编程解决方案**，语法行为与传统函数完全不同。`Generator`函数将`JavaScript`**异步编程**带入了一个**全新的阶段**。
- Generator函数返回的**遍历器对象**，只有**调用next方法**才会遍历下一个内部状态，所以其实提供了一种可以**暂停执行的函数**。**yield表达式就是暂停标志**。

```javascript
/**
 * @expression yield
 * 遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
 * 下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
 * 如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
 * 如果该函数没有return语句，则返回的对象的value属性值为undefined, done属性值为true。
*/
var generator1 = function* () {
    yield 1;
    yield 2;
    yield 3;
}

var g = generator1();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
```

- yield表达式后面的表达式，只有当**调用next方法**、**内部指针指向该语句时才会执行**，因此等于为 JavaScript 提供了手动的"**惰性求值**"（`Lazy Evaluation`）的语法功能。

```javascript
/**
 * @description yield后面的表达式123 + 678, 不会立即求值, 只会在next方法将指针移到这一句时，才会求值。
*/
function* generator() {
  yield 123 + 678;
}

```

- yield表达式与return语句既有相似之处，也有区别。
- 相似之处: **都能返回紧跟在语句后面的那个表达式的值**。
- 区别: 每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行，而return语句不具备位置记忆的功能。
- 一个函数里面，只能执行一次（或者说一个）return语句，但是可以执行多次（或者说多个）yield表达式。
- 正常函数只能返回一个值，因为只能执行一次return；Generator 函数可以返回一系列的值，因为可以有任意多个yield。从另一个角度看，也可以说 Generator 生成了一系列的值，这也就是它的名称的来历（英语中，generator 这个词是“生成器”的意思）。

- Generator 函数可以不用yield表达式，这时就变成了一个**单纯的暂缓执行函数**。

```javascript
function* f() {
  console.log('执行了！')
}

var generator = f();

setTimeout(function () {
  generator.next()
}, 2000);
```

```javascript
/**
 * @description 重点
*/
var fn = function (data) {
  return new Promise(function (resolve, reject) {
    let value = 1;
    if(data === value) {
      resolve(value);
    } else {
      return reject(value);
    }
  })
}
var generator1 = function* () {
  var f1 = yield fn(1);
  var f2 = yield fn(1);
  console.log(f1.toString());
  console.log(f2.toString());
}

var g = generator1();

g.next().value.then(function(data){
  g.next(data).value.then(function(data){
    g.next(data);
  });
});
// console.log(g.next()); {value: 1, done: false}
// console.log(g.next()); {value: 2, done: false}

```

### 协程


### 协程Generator
- `Generator`函数是协程在`ES6`的实现，最大特点就是可以交出**函数的执行权**（即**暂停执行**）
```javascript
function* generator1(x) {
  let ret = yield x + 8;
  return ret;
}

let g = generator1(2);
g.next(); // {value: 10, done: false}
g.next(); // {value: undefined, done: true}
```

- 调用`Generator`函数，会返回一个**内部指针**（即**遍历器**）`g`。这是`Generator`函数不同于普通函数的另一个地方，即**执行它不会返回结果**，返回的是**指针对象**。调用**指针g**的`next`方法，会**移动内部指针**（即执行异步任务的第一段），指向**第一个遇到的`yield`语句**，上例是执行到x + 8为止。

- 换言之，**`next`方法**的作用是**分阶段执行`Generator`函数**。每次**调用`next`方法**，会**返回一个对象**，表示**当前阶段的信息**（`value`属性和`done`属性）。
- `value`属性: **yield语句后面表达式的值**，表示**当前阶段的值**；
- `done`属性: **一个布尔值**，表示`Generator`函数**是否执行完毕**，即**是否还有下一个阶段**。

### Generator 函数的数据交换和错误处理

- 封装异步任务的根本原因: `Generator`函数可以**暂停执行**和**恢复执行**。
- 作为异步编程的完整解决方案原因: 函数体内外的**数据交换**和**错误处理机制**。
- `next`返回值的`value`属性，是`Generator`函数**向外输出数据**；`next`方法还可以接受参数，向`Generator`函数**体内输入数据**。

```javascript
/**
 * @description 第一个next方法的value属性，返回表达式x + 8的值16.
 * 第二个next方法带有参数8，这个参数可以传入Generator函数，
 * 作为上个阶段异步任务的返回结果，被函数体内的变量y接收。
 * 因此，这一步的value属性，返回的就是8(变量y的值)。
*/
function* generator1(x) {
  var y = yield x + 8;
  return y;
}

var g = generator1(8);
g.next() // { value: 16, done: false }
g.next(8) // { value: 8, done: true }
```

- Generator函数内部还可以**部署错误处理代码**，捕获**函数体外抛出的错误**。

```javascript
/**
 * @description g.throw('出错了!')，Generator函数体外，
 * 使用指针对象的throw方法抛出的错误，可以被函数体内的try...catch代码块捕获。
 * 这意味着，出错的代码与处理错误的代码，实现了时间和空间上的分离，
 * 这对于异步编程无疑是很重要。
*/
function* generator1(x) {
  try {
    var y = yield x + 8;
  } catch (e) {
    console.log(e);
  }
  return y;
}

var g = generator1(8);
g.next();
g.throw('出错了!');
// 出错了!
```

### 异步任务的封装

- 使用Generator函数，执行一个**真实的异步任务**。

```javascript
/**
 * @description Generator 函数封装了一个异步操作，该操作先读取一个远程接口，
 * 然后从JSON格式的数据解析信息。
 * 这段代码非常像同步操作，除了加上了yield命令。
*/
var fetch = require('node-fetch');

function* generator1() {
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}
```

```javascript
/**
 * @description 首先执行 Generator 函数，获取遍历器对象，
 * 然后使用next方法（第二行），执行异步任务的第一阶段。
 * 由于Fetch模块返回的是一个Promise对象，因此要用then方法调用下一个next方法。
*/
var fetch = require('node-fetch');

function* generator1() {
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}

var g = generator1();
var result = g.next();

result.value.then(function (data) {
  return data.json();
}).then(function (data) {
  g.next(data);
});
```

- 虽然`Generator`函数将异步操作表示得很简洁，但是流程管理却不方便（即何时**执行第一阶段**、何时**执行第二阶段**）

------

## Generator 函数的流程管理

```javascript
/**
 * @description Generator函数可以自动执行
 * Generator函数gen会自动执行完所有步骤
 * 但是，这不适合异步操作。
*/

function* generator1() {
  // ...
}

var g = generator1();
var res = g.next();

while(!res.done) {
  console.log(res.value);
  res = g.next();
}
// 如果必须保证前一步执行完，才能执行后一步，上面的自动执行就不可行。
```

- Thunk函数现在可以用于**Generator函数的自动流程管理**。

```javascript
/**
 * @description Generator函数封装了两个异步操作。
 * yield命令用于将程序的执行权移出Generator函数，那么就需要Thunk函数，
 * 将执行权再交还给Generator函数。
*/
var fs = require('fs');
var thunkify = require('thunkify');
var readFileThunk = thunkify(fs.readFile);

var generator = function* () {
  var r1 = yield readFileThunk('/etc/fstab');
  console.log(r1.toString());
  var r2 = yield readFileThunk('/etc/shells');
  console.log(r2.toString());
};

/**
 * @description Thunk函数在回调函数里，将执行权交还给Generator函数。
 * 变量g是Generator函数的内部指针，表示目前执行到哪一步。
 * next方法负责将指针移动到下一步，并返回该步的信息(value属性和done属性)。
*/
var g = generator();

var r1 = g.next();
r1.value(function (err, data) {
  if (err) throw err;
  var r2 = g.next(data);
  r2.value(function (err, data) {
    if (err) throw err;
    g.next(data);
  })
});

/**
 * @description 仔细查看上面的代码，可以发现Generator函数的执行过程，
 * 其实是将同一个回调函数，反复传入next方法的value属性。
 * 我们可以用递归来自动完成这个过程。
*/
```

## Thunk函数的自动流程管理

- Thunk函数真正的威力，在于可以自**动执行Generator函数**。

```javascript
/**
 * @function run Generator函数的自动执行器。
 * 内部的next函数就是Thunk的回调函数。
 * next函数先将指针移到Generator函数的下一步(gen.next方法)，
 * 然后判断 Generator 函数是否结束（result.done属性），
 * 如果没结束，就将next函数再传入Thunk函数(result.value属性)，
 * 否则就直接退出。
*/
function run(fn) {
  var gen = fn();

  function next(err, data) {
    var result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }

  next();
}

function* generator() {
  // ...
}

run(generator);
```

- 有了这个执行器，执行`Generator`函数方便多了。不管内部有多少个异步操作，直接把 `Generator`函数传入`run`函数即可。当然，前提是每一个异步操作，都要是`Thunk`函数，也就是说，跟在**yield命令后面的必须是`Thunk`函数**。

```javascript
/**
 * @function g 封装了n个异步的读取文件操作
 * 只要执行run函数，这些操作就会自动完成。
 * 这样一来，异步操作不仅可以写得像同步操作，而且一行代码就可以执行。
*/
var g = function* () {
  var f1 = yield readFileThunk('fileA');
  var f2 = yield readFileThunk('fileB');
  // ......
  var fn = yield readFileThunk('fileN');
};

run(g);
```

- Thunk 函数并不是 **Generator 函数自动执行的唯一方案**。因为自动执行的关键是，必须有一种机制，**自动控制 Generator 函数的流程**，**接收和交还程序的执行权**。回调函数可以做到这一点，**Promise 对象也可以做到这一点**。


------

## co模块

- [co模块](https://github.com/tj/co)可以让你不用编写 Generator 函数的执行器。
- `Generator`函数只要传入**co函数**，就会**自动执行**。
- **co函数**返回一个**Promise对象**，因此可以用**then方法添加回调函数**。

```javascript
/**
 * @description 等到Generator函数执行结束，就会输出一行提示。
*/
var co = require('co');

co(function *(){
  // yield any promise
  var result = yield Promise.resolve(true);
}).catch(onerror);

co(function *(){
  // resolve multiple promises in parallel
  var a = Promise.resolve(1);
  var b = Promise.resolve(2);
  var c = Promise.resolve(3);
  var res = yield [a, b, c];
  console.log(res);
  // => [1, 2, 3]
}).catch(onerror);

// errors can be try/catched
co(function *(){
  try {
    yield Promise.reject(new Error('boom'));
  } catch (err) {
    console.error(err.message); // "boom"
 }
}).catch(onerror);

function onerror(err) {
  // log any uncaught errors
  // co will not throw any errors you do not handle!!!
  // HANDLE ALL YOUR ERRORS!!!
  console.error(err.stack);
}
```

### co模块的原理

- 为什么`co`可以自动执行`Generator`函数？
- `Generator`就是一个**异步操作的容器**。它的自动执行需要一种机制，当异步操作有了结果，能够自动交回执行权。
- **回调函数**。将异步操作包装成 Thunk 函数，在回调函数里面交回执行权。
- **Promise对象**。将异步操作包装成 Promise 对象，用then方法交回执行权。

```javascript
/**
 * @description co函数返回一个Promise对象，因此可以用then方法添加回调函数。
 * 等到 Generator 函数执行结束，就会输出一行提示。
*/
var generator1 = function* () {
  var f1 = yield 1
  var f2 = yield 2
  console.log(f1.toString());
  console.log(f2.toString());
}

var co = require('co');
co(generator1);

co(generator1).then(function () {
  console.log('Generator 函数执行完成');
})
```

- co 模块其实就是将两种**自动执行器**(**Thunk 函数和 Promise 对象**)，包装成一个模块。
- 使用 co 的前提条件: Generator 函数的yield命令后面, 只能是**Thunk 函数或 Promise 对象**。
- 如果**数组或对象的成员**，全部**都是 Promise 对象**，也可以使用`co`。