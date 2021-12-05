# let and const

## let命令

```javascript
var _a = 1;
console.log(_a); // 1
```

```javascript
let _a = 1;
console.log(_a); // 1
```

### var vs let不同点(面试高频点)

#### let不存在变量提升

```javascript
console.log(_a); // 输出 undefined
var _a = 2; 
// 等价于
var _a;
console.log(_a);
_a = 2; // 输出 undefined
```

```javascript
console.log(_a); // 输出 Error ReferenceError
let _a = 2;
```

#### 暂时性死区

```javascript
var _a = 1;

if(true) {
  _a = 2;
  console.log(_a); // 2
  var _a;
}
```

```javascript
var _a = 1; // 全局

if(true) { // 块级 --- 封闭的空间
  _a = 2;
  console.log(_a); // ReferenceError
  let _a;
}
```

- 结论: 在块级作用域里面，使用let命令声明变量之前，这个变量是不可以被使用的，这个其实就是暂时性死区(temporal dead zone)

```javascript
// 分别输出什么
if(true) {
  _a = 1;
  console.log(_a);

  let _a;
  console.log(_a);

  _a = 2;
  console.log(_a);
}
```

#### 不允许重复声明

```javascript
var _a = 1;
let _a = 1; // SyntaxError
console.log(_a);
```

```javascript
var _a = 1;
var _a = 1;
console.log(_a); // 1
```

```javascript
var _abc = 1;
console.log(_abc); // 单某
// ...
var _abc = 2;
// ...
console.log(_abc); // 王某
```

```javascript
function fn1() {
  let _a = 1;
  var _a = 1;
}

function fn2() {
  let _a = 1;
  let _a = 1;
}
```

- let命令不允许在相同的作用域下，重复声明一个变量。

------

## 块级作用域 scope

```javascript
{

}
// 对象
// 函数
// if
// for
```

- 允许你的代码去做任意嵌套

```javascript
{
  // 第一层作用域
  {
    // 第二层...
    {
      // 第三层...
      {
        let _a  = 1;
      }
      console.log(_a); // ReferenceError
    }
  }
}
```

### 全局作用域

- 全局作用域中的对象(声明的变量或者函数等等)在整个代码中都允许被访问(能够去使用它)

```javascript
var _a = 1;

function fn() {
  console.log(_a);
}

function fn1() {
  console.log(_a);
}

fn(); // 1
fn1(); // 1
```

```javascript
var _date = new Date();

function fn() {
  console.log(_date);
}

function fn1() {
  console.log(_date);
}

fn();
fn1();
```

```javascript
var _a = 1;

function fn() {
  console.log(_a);
  if(false) { // 存在一个变量提升的过程，导致我内层的_a变量覆盖了外层的_a
    var _a = 2;
  }
}

fn(); // undefined
```

```javascript
let _a = 1;

function fn() {
  let _a = 2;
  console.log(_a); // 2 外部的(外层的代码块)使用外部的，内部的(内层的代码块)使用内部的
  if(false) {
    let _a = 3;
  }
  if(true) {
    let _a = 4;
  }
  console.log(_a); // 2
}

fn();
console.log(_a); // 1
```

```javascript
// 总结来说: 内部就用内部的，外部就用外部
var _a = 1;

console.log(_a)
function fn() {
  var _a;
  console.log(_a);
  if(false) {
    _a = 2;
  }
}

fn(); // undefined
```

```javascript
var _s = 'jackdan';

for(var i = 0; i < _s.length; i++) {
  console.log(_s[i]); // 
}

console.log(i); // 7
// 就是我的变量i，循环都已经结束，它还存在
```

```javascript
var _s = 'jackdan';
for(let i = 0; i < _s.length; i++) {
  console.log(_s[i]);
}

console.log(i);
```


### 函数作用域

- 作用在函数内部(变量或者函数)，生命周期是随着函数的存在而存在，随着函数的销毁被销毁

```javascript
function fn() {
  var _a = 1;
  console.log(_a);
}

fn(); // 1
console.log(_a); // ReferenceError
```


### 块(代码块)级作用域与函数作用域

- 任何的一个代码块中，不仅仅指代函数块

- ES5有一个规定: 函数只能在顶层作用域或者说在函数作用域之中声明，不能在块级作用域中声明(不存在浏览器端)

```javascript
'use strict';

if(true) {
  function fn() {
    var _a = 1;
    console.log(_a);
  }
  fn();
}
```

```javascript
if(true) {
  function fn() {
    var _a = 1;
    console.log(_a);
  }
  fn();
}
```

```javascript
try {
  function fn() {
    var _a = 1;
    console.log(_a);
  }
} catch(e) {
 
} finally() {

}
```

- ES6中引入了块级作用域，明确规定了在块级作用域中可以声明函数，块级作用域中声明的函数有点类似于let，并不是完全等于let，块级作用域内部是内部，外部是外部.

```javascript
function fn() { console.log(1) }

(function () {
  if(false) {
    // 在if代码块里面重复声明了一次函数fn
    function fn() { console.log(2) }
    // let fn = function() { console.log(2) } // 1
  }

  fn(); // Erro
})();

(function () {
  if(false) {
    // 在if代码块里面重复声明了一次函数fn
    function fn() { console.log(2) }
    // let fn = function() { console.log(2) } // 1
  }

  fn(); // 输出一个Error
}());
```

- ES5中不允许你在块级作用域中声明函数(在浏览器端没有用)
- ES6中是允许你在块级作用域中声明函数
- 有点类似于`let`，内部是内部，外部是外部
- 分浏览器端和非浏览器端

- 块级作用域必需用一个大括号括起来的。

```javascript
if(true) let _a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context

if(true) {
  let _a = 1;
}
```

## const 命令

- 声明一个常量(只读 Read only), 那就这个常量是不能修改

```javascript
if(true) {
  const _a; // SyntaxError: Missing initializer in const declaration
}
```

```javascript
const _a = 1;
_a = 2; // TypeError: Assignment to constant variable.
console.log(_a);
```

```javascript
var _a = 1;
_a = 2;
console.log(_a); // 2
```

```javascript
let _a = 1;
_a = 2;
console.log(_a); // 2
```

- const 允许在代码块中定义
- const 具有let命令的特点

```javascript
if(true) {
  const _a = 1;
}

console.log(_a); // ReferenceError: _a is not defined
```

```javascript
if(true) {
  console.log(_a); // ReferenceError: Cannot access '_a' before initialization
  const _a = 1;
}
```

```javascript
const _a = 1; // xe0...
const _a = 2; // SyntaxError: Identifier '_a' has already been declared
```

- const为什么声明的是一个常量？
- 并不是变量的值不得变动，而是变量指向的那个内存地址所保存的数据是不得改动的。
- 基础数据类型: Boolean, Number, String
- 值：变量指向的那个内存地址所保存的数据
- 引用数据类型: Array, Object
- 变量指向的那个内存地址所保存的数据只是一个指向实际数据的指针

```javascript
const _a = {};
_a.name = 'jackdan';
console.log(_a);
```

```javascript
const _a = {};
_a.name = 'jackdan';

_a = {}; // TypeError: Assignment to constant variable.

console.log(_a);
```

```javascript
const _a = [];

_a.push("jackdan");
_a.length = 0;
_a.shift("jackdan");
console.log(_a);
```

```javascript
const _a = [];

_a.push("jackdan");
_a.length = 0;
_a.shift("jackdan");
console.log(_a);

_a = ["jackdan"]; // TypeError: Assignment to constant variable.
```

- 有没有办法将引用数据类型也做到，对象本身也不能再去操作

```javascript
'use strict';
// freeze:冻结
const _a = Object.freeze({});
_a.name="jackdan"; // TypeError: Cannot add property name, object is not extensible
```

```javascript
// freeze:冻结
const _a = Object.freeze({});
_a.name="jackdan"; // TypeError: Cannot add property name, object is not extensible
console.log(_a);
```

## var function let const
## import class

# 顶层对象

- 浏览器环境，指的是window对象
- Node环境的话，指的是global对象

```javascript 
// Node 
global._a = 1;

// 浏览器
window._a = 1;
```

## ES5
- 顶层对象跟我们的全局变量是等价的.

```javascript
// Node
// global._a = 1;
// console.log(_a); // 1

_a = 2;
console.log(window._a); // ReferenceError: window is not defined
console.log(global._a); // 2
```

```javascript
// 浏览器
// window._a = 1;
// console.log(_a); // 1

_a = 2;
console.log(window._a); // 2
```

- 会导致几个问题
- 1. 我没办法在编译阶段就知道变量是否存在未声明的错误，只有在我运行代码的时候才知道;
- 2. 协同开发的过程当中，出现数据混乱的错误，还不好排查问题;
- 3. 不利于模块化开发或者组件化开发;

```javascript
// A
_a = 2;
_b = 3;

// B
_a = 3;
_b = 4;

console.log(_a); // 3
console.log(_b); // 4

console.log(global._a); // 3
console.log(global._b); // 4
```

## ES6

- 规定，let命令和const命令，不允许声明到声明的全局变量就不再是顶层对象的属性；

```javascript
var _a = 1;
// console.log(global._a); // 1
console.log(window._a); // 1

let _b = 2;
// console.log(global._b); // undefined
console.log(window._b); // undefined
```

- JavaScript语言里面存在顶层对象的概念，提供了一个全局环境或者是全局作用域，所有的代码都在这个环境中运行。

- 在浏览器端: 顶层对象指的是window 
- 在Node: 顶层对象指的是global
- 在Web Worker和浏览器中: self也会是顶层对象

```javascript
// 浏览器端: Window 
// Node: 当前模块
// ES6中: 返回undefined
console.log(this);
```

- CSP(Content Security Policy)，new Funtion方法都可能无法使用。

- 我想有一段代码在任何环境下都可以运行，我应该怎么做？

```javascript
// Node: console.log(typeof window); // undefined
// Node: console.log(typeof process); // object
// Node: console.log(typeof require); // function
// Node: console.log(typeof global); // object
(typeof window !== 'undefined') ? 
  window : 
  (typeof process === 'object' && typeof require === 'function' && typeof global === 'object') ? 
  global : 
  this;
```

------

> Thinking in Jackdan