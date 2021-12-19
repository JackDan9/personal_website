医院渡云的面试
1. 笔试题
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
var a = function() {return true;} 
window.b = function() {return true;}
function c() {return true;}
console.log(a() && b() && c())

o = {
  a: 1,
  f: function() {
    return this.a
  }
}

console.log(o.f());

var o1 = o;
console.log(o1.f());

var o2 = o;
console.log(o2.f.call(this))
2. 笔试题 string转化为array (split方法)
3. MVC和MVVM的区别 --- https://www.cnblogs.com/ranyonsue/p/12090647.html
4. Webpack热更新原理


# Apply

- `Function.prototype.Apply`


------


| 标题 | 内容 |
| --- | --- |
| Apply的定义 | 什么是Apply函数? |
| Apply的使用 | 如何使用Apply函数? |
| Apply的实现原理 | 如何实现Apply函数? |
| Apply的示例 | Apply函数实现继承等 |


------

## Apply的定义

- `apply()`方法调用了一个**具有给定this值的函数**，以及以一个**数组**(或者**类数组对象**)的形式提供的参数。

> 注意: call()方法的作用和apply()方法类似，区别就是`call()`方法接受的是**参数列表**，而apply()方法接受的是一个**参数数组**。 

### 什么叫做具有给定this值的函数？

- 可能大多数没有想过这个问题，但是今天在这里我们需要想一想了，并且以下代码也请在心情愉悦的状态去实操一下，因为作者本人也会存在书写错误的情况(失恋了PS:可能性很小或者被Bug困扰)。例如:

```javascript
"use strict";
function getAge() {
  var y = new Date().getFullYear();
  return y;
}

var jackdan = {
  birth: 1995
}

getAge(); // 2021
getAge.apply(jackdan); // 2021
// 亲们，你们能看出来我写个apply操作究竟是要干嘛吗？
```

```javascript
"use strict";

function getAge() {
  var y = new Date().getFullYear();
  return y - this.birth;
}

function getHeight() {
  return this.height;
}

var jackdan = {
  birth: 1995,
  height: 185
}


// getAge(); // Uncaught TypeError: Cannot read property 'birth' of undefined
getAge.apply(jackdan); // 26
getAge.apply(jackdan, []); // 26
getHeight.apply(jackdan); // 185
getHeight.apply(jackdan, []); // 185
```

```javascript
// 使用push将元素追加到数组中。
// 由于push接受可变数量的参数，所以也可以一次追加多个元素。

// 但是，如果push的参数是数组, 它会将该数组作为单个元素添加, 
// 而不是将这个数组内的每个元素添加进去, 因此我们最终会得到一个数组内的数组。
// concat符合我们的需求，但它并不是将元素添加到现有数组，而是创建并返回一个新数组。
// 有没有办法可以在原数组中加入一个新的数组(参数是数组)，而不用循环实现了，当然有了。
// 用apply实现

"use strict";

var arr = ['jackdan'];
var elements = [26, 185];

arr.push.apply(arr, elements); // [ "jackdan", 26, 185 ] 如果没有apply，就需要循环去实现
// 当然了，arr.push也是具有给定this值的函数，可以交叉验证一下
```

------

## Apply的使用

```javascript
function getAge() {
  var y = new Date().getFullYear();
  return y - this.birth;
}

getAge(); // NaN

var jackdan = {
  birth: 1995
}

getAge.apply(jackdan); // 26, this指向了jackdan
getAge.apply(jackdan, []); // 26, this指向了jackdan
```

```javascript
"use strict";

function getAge() {
  var y = new Date().getFullYear();
  return y - this.birth;
}

var jackdan = {
  birth: 1995
}

// getAge(); // Cannot read property 'birth' of undefined

getAge.apply(jackdan); // 26, this指向了jackdan
getAge.apply(jackdan, []); // 26, this指向了jackdan
```

```javascript
func.apply(thisArg, [argsArray])
/**
 * @params thisArg
 * 必须的参数。
 * 在func函数运行时使用的this值。请注意，this可能不是该方法看到的实际值:
 * 如果这个函数处于非严格模式下，则指定为null或undefined时会自动替换为指向全局对象
 * 原始值会被包装。
 *
 * @params argsArray
 * 可选的参数。
 * 一个数组或者类数组对象，其中的数组元素
*/
```

------

## Apply的实现原理

```javascript
Function.prototype.myApply = function(context, arr) {
  var ctx = Object(context) || window;
  ctx.fn = this;
  // context = Object(context) || window;
  // context.fn = this;

  var result;

  if(!arr) {
    result = ctx.fn();
    // result = context.fn();
  } else {
    var args = [];
    for(var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i +']');
    }

    result = eval('ctx.fn(' + args + ')'); // eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。
    // result = eval('context.fn(' + args + ')');
  }

  delete ctx.fn;
  // delete context.fn;
  return result;
}

var foo = {
  value: 1
}

var bar = function() {
  console.log(this.value);
}

bar.myApply(foo, [1, 2, 3]);
```

- 不建议使用eval函数，为什么了？可能会有这样的疑惑。
- `eval()`是一个危险的函数，它**使用者**与**调用者**相同的权限执行代码。如果使用`eval()`运行的字符串代码被恶意方(不怀好意的人)修改(XSS-Cross Site Scripting)，最终可能会在您的**网页/扩展程序的权限**下，在用户计算机上运行恶意代码。更重要的是，第三方代码可以看到某一个`eval()`被调用时的作用域，这也有可能导致一些不同方式的攻击。相似的Function就不容易被攻击。

- `eval()`通常比其他替代方法更慢，因为它必须调用`JS`解释器，而许多其他结构则可被现代`JS`引擎进行优化。

- 此外，现代JavaScript解释器将javascript转换为机器代码。 这意味着任何**变量命名的概念都会被删除**。 因此，任意一个`eval`的使用都会强制浏览器进行冗长的变量名称查找，以确定变量在机器代码中的位置并设置其值。 另外，新内容将会通过` eval() `引进给变量， 比如更改该变量的类型，因此会强制浏览器重新执行所有已经生成的机器代码以进行补偿。 但是，（谢天谢地）存在一个非常好的eval替代方法：只需使用` window.Function`。 这有个例子方便你了解如何将`eval()`的使用转变为`Function()`。

```javascript
// 糟糕的使用eval代码
function looseJsonParse(obj) {
  return eval("(" + obj + ")");
}
console.log(looseJsonParse(
  "{a:(4-1), b:function(){}, c:new Date()}"
))
```

```javascript
// 不用eval的更好的代码
function looseJsonParse(obj) {
  return Function('"use strict"; return (' + obj + ')')();
}
console.log(looseJsonParse(
  "{a:(4-1), b:function(){}, c:new Date()}"
))
```

- 至于分析，我会单独在`eval()`分析中进行详细阐述，这里就不作赘述了。

- 我想到了一种ES6的优化方案。如下所示:

```javascript
Function.prototype.myApply = function(context, arr) {
  let ctx = Object(context) || window;
  ctx.fn = this;

  let result;

  if(!arr.length) {
    result = ctx.fn();
  } else {
    result = ctx.fn(...arr);
  }

  delete ctx.fn;

  return result;
}

let arr = [26, 185];
let elements = ["jackdan"];

arr.push.myApply(arr, elements);
```

------

## apply实现继承

```javascript
class Parent {
  constructor(age, height) {
    this.age = age;
    this.height = height;
  }

  toPrint() {
    console.log('age: ' + this.age + ', height: ' + this.height);
  }
}

class Child extends Parent {
  constructor(name, age, height) {
    super(age, height);
    this.name = name;
  }

  toPrint() {
    console.log('name: ' + this.name  + ', age: ' + this.age + ', height: ' + this.height);
  }
}

let child = new Child("jackdan", 26, 185);
child.toPrint();

console.log(child.__proto__ === Child.prototype);

console.log(Child.__proto__ === Parent);
console.log(Child.prototype.__proto__ === Parent.prototype);
```

```javascript
function Parent(age, height) {
  this.age = age;
  this.height = height;
}

Parent.prototype.toPrint = function() {
  console.log('age: ' + this.age + ', height: ' + this.height);
}

function Child(name, age, height) {
  Parent.call(this, age, height);
  this.name = name;
}

let fTemp = function() {};

fTemp.prototype = Parent.prototype;

Child.prototype = new fTemp();
Child.prototype.toPrint = function() {
  console.log('name: ' + this.name  + ', age: ' + this.age + ', height: ' + this.height);
}

let child = new Child("jackdan", 26, 185);
child.toPrint();
```

------

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval
