
# let和const命令

| 标题 | 内容 |
| --- | --- |
| var | 为什么要减少var声明变量? |
| let and const | 为什么建议尽可能多的使用let和const声明变量? |
| 块级作用域 | 为什么需要块级作用域? |


## 为什么需要let命令和const命令？

- 其实上面的疑问等价于为什么要减少var命令声明变量？那么如何来解答这个问题。其实从以下几方面解答即可。

### 1. 能否重复声明
### 2. 是否具有块级作用域
### 3. 是否存在变量声明提升问题(核心点)

------

## 块级作用域
### 为什么需要块级作用域？
- ES5(ECMAScript 5.1)只有**全局作用域**和**函数作用域**，没有**块级作用域**，这带来很多不合理的场景。

```javascript
/**
 * @description 内层变量可能会覆盖外层变量
 * if代码块的外部使用外层的tmp变量，内部使用内层的tmp变量。
 * 但是，函数test执行后，输出结果为undefined，原因在于变量提升，导致内层的tmp变量覆盖了外层的tmp变量。
*/
var tmp = new Date();
function test() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
};

test(); // undefined
```

```javascript
/**
 * @description 用来计数的循环变量泄露为全局变量
 * var声明的变量i我们只想它是控制循环用的，但是循环结束之后，它并没有消失，泄露成了全局变量。
*/
var s = "hello jack";

for(var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 10
```

### ES6块级作用域
- `let`实际上为JavaScript新增了**块级作用域**。

```javascript
/**
 * @description test1函数有两个代码块，都声明了了变量n，但是最后输出了6。
 * 输出6表示外层代码块不受内层代码块的影响。
 * 如果两次都使用var定义变量n，最后输出的值才是8(可以测试一下代码)。
*/
function test1() {
  let n = 6;
  if (true) {
    let n = 8;
  }
  console.log(n); // 6
};
```

- ES6允许**块作用域的任意嵌套**。

```javascript
{{{{
  {let a = 'Hello Jack'}
  console.log(a); // Uncaught ReferenceError: a is not defined
}}}}
```

- 块级作用域的出现，实际上使得获得广泛应用的**[匿名立即执行(匿名IIFE)](https://developer.mozilla.org/zh-CN/docs/Glossary/IIFE)**不再必要了。

```javascript
// IIFE
(function () {
  var tmp = ...;
  ...
}());

// 块级作用域写法
{
  let tmp = ...;
  ...
}
```

### 块级作用域与函数声明

- 函数能不能在块级作用域之中声明？

- ES5规定，函数只能在**顶层作用域**和**函数作用域**之中声明，不能在**块级作用域**声明。

```javascript
/**
 * @description 下面的代码在ES5的规定中都是非法的。
 * 但是，浏览器没有遵守这个规定，为了兼容以前的旧代码，还是支持在块级作用域之中声明函数。
 * 所以下面的代码在浏览器中都能运行，不会报错。
*/
if (true) {
  function f1() {};
}

try {
  function f() {};
} catch(e) {
  // ...
}
```

- ES6引入了**块级作用域**，明确允许在**块级作用域之中声明函数**。

```javascript
/**
 * @description ES6规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。
*/
function f() {
  console.log('I am outside!');
}

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() {
      console.log('I am inside!');
    }
  }

  f();
}());

/**
 * @description ES5中运行，会得到"I am inside!"，因为在if内声明的函数f会被提升到函数头部，实际运行的代码如下:
*/
function f() { 
  console.log('I am outside!');
}

(function () {
  function f() {
    console.log('I am inside!');
  }
  if (false) {
  }
  f();
}());
// I am inside!


/**
 * @description ES6 就完全不一样了，理论上会得到"I am outside!"。
 * 因为块级作用域内声明的函数类似于let，对作用域之外没有影响。
 * 但是，如果你真的在 ES6 浏览器中运行一下上面的代码，是会报错的，这是为什么呢？
*/
function f() {
  console.log('I am outside!');
}

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() {
      console.log('I am inside!');
    }
  }
  f();
}());
// Uncaught TypeError: f is not a function
```

- 如果改变了**块级作用域内声明的函数的处理规则**，显然会对旧代码产生很大影响。**为了减轻因此产生的不兼容问题，ES6 在[附录 B](https://262.ecma-international.org/6.0/#sec-block-level-function-declarations-web-legacy-compatibility-semantics)里面规定，浏览器的额实现可以不遵守上面的规定，有自己的行为方式**。

- 1. 允许在块级作用域内声明函数。
- 2. 函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
- 3. 同时，函数声明还会提升到所在的块级作用域的头部。

- 注: 上面三条规则只对**ES6的浏览器实现有效**，**其他环境的实现不用遵守**，还是将**块级作用域的函数声明当作let处理**。

```javascript
/**
 * @description 根据这三条规则，浏览器的 ES6 环境中，块级作用域内声明的函数，行为类似于var声明的变量。
*/
function f() {
  console.log('I am outside!');
}
(function () {
  var f = undefined;
  if (false) {
    function f() {
      console.log('I am inside!');
    }
  }

  f();
}());
// Uncaught TypeError: f is not a function
```

- 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。

```javascript
// 块级作用域内部的函数声明语句，建议不要使用
{
  let a = 'secret';
  function f() {
    return a;
  }
}

// 块级作用域内部，优先使用函数表达式
{
  let a = 'secret';
  let f = function () {
    return a;
  };
}
```

- 另外，还有一个需要注意的地方。ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。

```javascript
/**
 * @description 第一种写法没有大括号，所以不存在块级作用域，而let只能出现在当前作用域的顶层，所以报错。
 * 第二种写法有大括号，所以块级作用域成立。
*/
// 第一种写法，报错
if (true) let x = 1;

// 第二种写法，不报错
if (true) {
  let x = 1;
}
```

```javascript
/**
 * @description 函数声明也是如此，严格模式下，函数只能声明在当前作用域的顶层。
*/
// 不报错
'use strict';
if (true) {
  function f() {};
}

// 报错
'use strict';
if (true) function f() {};
```

------

## let命令
- ES6(ECMAScript 2015)新增了`let`命令，用于声明变量。其用法类似于`var`关键字，但是所声明的变量只在`let`命令所在的代码块内有效。如下所示:

```javascript
/**
 * @description 在代码块中分别用let和var声明了两个变量。
 * 然后在代码块外分别打印这两个变量a和b，结果let方式报错，var方式放回正确的值。
 * 结论: let声明的变量只在其所在代码块有效。
*/
{
  let a = 1;
  var b = 1;
}
console.log(a); // ReferenceError: a is not defined.
console.log(b); // 1
```

### for循环计数器(常见面试题)

- 变量是由`let`声明的循环计数器`i`以及变量是由`var`声明的循环计数器`i`。如下所示:

```javascript
/**
 * @description let声明计数器i只在for循环体内有效, 在循环体外引用就会报错。
 * var声明计数器i在全局范围内有效, 所以在循环体外也可以引用。
*/
for(let i = 0; i < 8; i++) {
  //...
}
console.log(i); // Uncaught ReferenceError: i is not defined

for(var i = 0; i < 8; i++) {
  //...
}
console.log(i); // 8
```

- 为什么`var`声明的变量输出是`8`而`let`声明的变量输出却是`5`(这是我们想要的输出值)？如下所示:


```javascript
/**
 * @desciption 前面验证了，var声明的变量i在全局范围内有效，所以代码中全局只有一个变量i。
 * 每一次循环，变量i的值都会发生变化，而循环内被赋给了数组a的函数内部的console.log(i) => i指向的就是全局的i。
 * 换句话说, a数组中的所有成员里面的i，指向的都是同一个i，导致运行时输出的时最后一轮i的值，也就是8。
 * 扩展: 理解上面的原理，var的for循环计数器，数组a里面的所有成员打印返回的值都是全局范围的i，也就是这里的8。
*/
var a = [];
for(var i = 0; i < 8; i++) {
  a[i] = function () {
    console.log(i);
  };
}
console.log(a[0]()); // 8
console.log(a[5]()); // 8
```

```javascript
/**
 * @desciption let声明的变量块级作用域内有效(前面也验证了)
 * let声明的变量i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量。
 * i每一轮都是重新声明的(新的)变量，那i是怎么知道上一轮的值，从而计算出本轮循环的值?
 * 注意: JavaScript引擎内部会记住上一轮的值，初始化本轮的变脸i时，就在上一轮循环的基础上进行计算。
*/
var a = [];
for(let i = 0; i < 8; i++) {
  a[i] = function () {
    console.log(i);
  };
}
console.log(a[0]()); // 0
console.log(a[1]()); // 1
console.log(a[5]()); // 5
```

```javascript
/**
 * @description 补充点: for循环还有一个特别之处，就是设置循环变量的那部分时一个父作用域，而循环体内部是一个单独的子作用域。
 * 扩展:函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。
*/
for(let i = 0; i < 8; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// ...
// abc
```

### 不存在变量提升

- `var`命令会发生“变量提升”现象，即变量可以在声明之前使用，值为`undefined`。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。
- 为了纠正这种现象，`let`命令改变了语法行为，它所声明的**变量一定要在声明后使用**，否则报错。

```javascript
/**
 * @description 变量test用var命令声明，会发生变量提升，即脚本开始运行时，变量test已经存在了，但是没有值，所以会输出undefined。
*/
console.log(test); // undefined
var test = 2;
```

```javascript
/**
 * @description 变量test用let命令声明，不会发生变量提升。
 * 注解: 声明test之前，变量test是不存在的，这时如果用到test，就会抛出一个错误。
*/
console.log(test); // Uncaught ReferenceError: can't access lexical declaration 'test' before initialization
let test = 2;
```

### 暂时性死区

- 只要**块级作用域内存在let命令**，它所声明的变量就 **"绑定"(binding)**这个区域，**不再受外部的影响**。

```javascript
/**
 * @description 存在全局变量test，但是块级作用域内let又声明了一个局部变量test，导致后者绑定这个块级作用域，所以在let声明变量前，对test赋值会报错。
*/
var test = 123;

if (true) {
  test = 'abc'; // Uncaught ReferenceError: can't access lexical declaration 'test' before initialization
  let test;
}
```

- ES6明确规定，如果区块中存在`let`和`const`命令，这个区块对这些命令声明的变量，从一开始就形成了**封闭作用域**。凡是在声明之前就使用这些变量，就会报错。 
- 总之，在代码块内，使用`let`命令声明变量之前，该变量都是不可用的。这在语法上，称为"**暂时性死区**"（`temporal dead zone`，简称`TDZ`）。

```javascript
/**
 * @description 在let命令声明变量test之前，都属于变量tmp的"死区"。
*/
if (true) {
  // TDZ开始
  test = 'abc';
  console.log(test);

  let test; // TDZ结束
  console.log(test); // undefined

  test = 123;
  console.log(test); // 123
}
```

```javascript
/**
 * @description "暂时性死区"也意味着typeof不再是一个百分之百安全的操作。
 * 变量x使用let命令声明，所以在声明之前，都属于x的"死区"，只要用到该变量就会报错。
 * 因此，typeof运行时就会抛出一个ReferenceError。
*/
typeof x; 
let x;
```

```javascript
/**
 * @description 如果一个变量根本没有被声明，使用typeof反而不会报错。
 * undeclared_variable是一个不存在的变量名，结果返回“undefined”。
 * 所以，在没有let之前，typeof运算符是百分之百安全的，永远不会报错。
 * 现在这一点不成立了。
 * 注: 我们都要养成良好的编程习惯，变量一定要在声明之后使用，否则就报错。
*/
typeof undeclared_variable; // undefined
```

```javascript
function bar(x = y, y = 2) {
  return [x, y];
}

bar()
```

```javascript
function bar(x = 2, y = x) {
  return [x, y];
}
bar();
```

```javascript
// 不报错
var x = x;

// 报错
let x = x;
// ReferenceError: x is not defined
```

### 不允许重复声明

- `let`不允许在**相同作用域**内，**重复声明同一个变量**。

```javascript
function test() {
  let a = 1;
  var a = 2;
}

function test() {
  let a = 1;
  let a = 2;
}
```

- 因此，不能在**函数内部重新声明参数**。

```javascript
function test(arg) {
  let arg;
}
test(); 

function test(arg) {
  {
    let arg;
  }
}
test();
```

------

## const命令
### 基本用法
- `const`声明一个只读的常量。一旦声明，**常量的值旧不能改变**。

```javascript
/**
 * 
*/
const a = 1;
a // 1

a = 2;
// Uncaught TypeError: invalid assignment to const 'a'
```

```javascript
const a;
```

```javascript
if (true) {
  const MAX = 8;
}

MAX
```

```javascript
if (true) {
  console.log(MAX);
  const MAX = 8;
}
```

```javascript
var message = "Hello";
let age = 25;

const message = "JackDan";
const age = "26";
```

### 原理
- `const`实际上保证的，并不是**变量的值不得改动**，而是**变量指向的那个内存地址所保存的数据不得改动**。
- 对于简单类型的数据（**数值**、**字符串**、**布尔值**），值就保存在变量指向的那个内存地址，因此等同于常量。
- 但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。
- 因此，将一个对象声明为常量**必须非常小心**。

```javascript
const test = {};

test.prop = 123;
console.log(test.prop); // 123

test = {}; 
```

```javascript
const a = [];
a.push('Hello');
a.length = 0;
a = ['Dave'];
```

------