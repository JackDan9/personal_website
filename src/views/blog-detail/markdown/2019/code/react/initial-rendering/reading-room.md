# 基础
## JS
- 1. 数据类型
```javascript
// 基本类型
Number, String, Boolean, Null, undefined, Symbol
// 引用类型
Array, Object, Function
```
- 2. 数据类型判定方法
```javascript
// typeof 
// string "symbol" "string" "number"
// null
// "object"

// Object.prototype.toString.call(null); === "[object Null]"
// instanceof 
// 引用类型 L instanceof R === null
// Array.isArray(arr); 
// arr.constructor === "Array";
// obj.contsructor 
```

- 3. `instanceof`原生实现
```javascript
function myInstanceof(L, R) {
  var RP = R.prototype;
  L = L.__proto__;

  while(true) {
    if(L === null) {
      return false;
    }
    if(L === RP) {
      return true;
    }
    L = L.__proto__;
  }
}

function Person() {
  console.log("test");
}

var person = new Person();
person instanceof Person;

person.__proto__.__proto__ === Person.prototype;
```

- 4. 原型与原型链
```javascript
// prototype 函数属性
// constructor 构造函数
// __proto__
function Person() {
  console.log("test");
}

console.log(Person.prototype.constructor === Person); // true
// Person 
console.log(Person.__proto__); // Function
console.log(Person.__proto__.prototype.constructor); // Function
console.log(Person.__proto__.__proto__); // Object
console.log(Person.__proto__.__proto__.__proto__); // null
```

- 5. 作用域
```javascript
// 静态作用域
// window
// global
// 动态作用域
// 普通函数
// 函数在调用过程中，作用域跟着去改变
// 全局作用域与函数作用域
let x = 1;

function A(y){
  let x = 2;
  function B(z){
    console.log(x+y+z);
  }
  return B;
}

let C = A(2);
C(3);
```

- 6. this
```javascript

// 普通函数
// 声明时 --- 根据调用的改变 
// 箭头函数
// 定义时---父级，this指向可以改变

function person() {
  console.log(this);
}

var person1 = () => {
  console.log(this)
}

person();
person1();
```

- 7. call
```javascript
// 执行上下文
// obj, this, fn
Function.prototype.myCall = function(context) {
  var ctx = Object(context) || window;
  // var fn = Symbol();
  // fn = this;
  // ctx.fn = fn;
  ctx.fn = this;
  var args = Array.prototype.slice.call(arguments);
  ctx.fn(...args);
  // eval string => 函数执行
  // for(var i = 1; i < args.length; i++) {
  //   eval('ctx.fn(' + args[i] + ')');
  // }
  delete ctx.fn;
  return ctx;
}

fn.myCall(obj, 1, 2 ,3);


var fn = function() {
  console.log(this.name);
}

var obj = {
  name: 1
}

fn.call(obj);
```

- 8. apply
```javascript

```

- 9. bind
```javascript

```

- 10. for ... of 与 for ... in 区别
```javascript
// for ... of 遍历的值
// for ... in 遍历的key
```
- 11. 类class 
```javascript
class Person extends People {
  constructor(name) {
    super(age, height);
    this.name = name;
  }

  toPrint() {

  }
}
```
- 12. 继承
```javascript
// Person extends People
class Person {
  constructor() {

  }
}

class Person1 extends Person {
  constructor() {

  }
}

console.log(Person1.__proto__);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function() {
  console.log(this.name)
}

function Person1(height) {
  this.height = height;
  Person.call(this);
}

Person1.prototype.sayAll = function() {
  console.log(this.name, this.age, this.height);
}

function fTemp = function() {};
fTemp.prototype = Person.prototype;

Person1.__proto__ = Person;
Person1.prototype = new fTemp();
```
- 13. Module语法
```javascript
// 模块
// 
// css @import
// python import
// import export 
// import {Component} from 'React';
// export default a
// import {toString} from a 
// ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。
```
- 14. Promise实现
```javascript
// callback
// pending fulfilled rejected
new Promise(function() {

}).then(() => {

}).then(() => {

}).catch(() => {

})
// 写原生实现
```
- 15. Promise.all实现

```javascript
Promise.all([p1, p2, p3])
// 如果其中有一个是rejected，返回rejected，否则返回resolved/fulfilled
// 写原生实现
```
- 16. CommonJS AMD CMD ES6
```javascript
// 模块加载方式
// CommonJS Node.js 等你所有加载完了之后才去执行
// module、exports、require、global
// 同步的方式加载模块
// Node.js 放在服务端上，不用考虑加载速度的问题
// AMD(Aysnc Module Define) require.js
// AMD推崇依赖前置、提前执行
define('./a, ./b', {

}, {

})
// CMD(Common Module Define) sea.js 玉伯
// CMD推崇依赖就近、延迟执行

// ES Module
// import/export/export default
// 边编译，边运行，边加载
// CommonJS VS ES Module
// CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用
// CommonJS 模块是运行时加载，ES6 模块是编译时输出接口
```
- 17. 变量提升

```javascript
// var let const
```
- 18. 闭包
```javascript

```
- 19. 防抖
```javascript
function(fn, timer) {

}
```
- 20. 节流
```javascript
function(fn, timer) {

}
```
- 21. 泛型(TS)
- 22. EventLoop

```javascript
// macroTask script setTimeout setInterval Promise(() => {  }) 
// microTask Promise.then(() => {}) 
console.log('script start');
setTimeout(function() {
  console.log('setTimeout');
}, 0);
Promise(() => {
  console.log('promise0');
  resolve();
}).then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});
console.log('script end');
// script start 
// promise0
// script end
// promise1
// promise2
// setTimeout

// 先执行宏任务，把你所有的micro执行完
```

- 实现on和emit，实现一个简单的发布/订阅

```javascript
// 不要抢答面试官的问题，不要太着急
// 笔试+面试
// 音调保持一致
```


## CSS
- 1. 盒子模型
- 2. BFC(Block Format Content)

```css
<div>
  <p></p>
</div>
```
- 3. FLex
```css
a {
  width: 1000px;
  height: 1000px;
  display: flex
}

left {
  width: 300px;
}

middle {
  flex: 1;
}

right {
  width: 300px;
}
```
  - flex: 1
  - 3.1. flex-grow, flex-shrink, flex-basis
  - 第一个参数表示: flex-grow 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
  - 第二个参数表示: flex-shrink 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
  - 第三个参数表示: flex-basis给上面两个属性分配多余空间之前, 计算项目是否有多余空间, 默认值为 auto, 即项目本身的大小
  - 3.2. 垂直居中(row)/column(水平居中) align-items, 水屏居中 justify-conetnt
- 4. 实现一个三角形
```css
{
  width: 0;
  height: 0;
  border-left: 50px red;
  
}
```
- 5. 实现一个平行四边形

- 6. 实现一段平移
```css

```
- 7. CSS3的新属性
```css
animation
transfrom
transtion
scale

```
- 8. position
```css
static
relative
absolute
fixed
```

## HTML

# 框架
## React
1. setState异步更新、同步更新
2. 生命周期状态
3. 
### ReactDOM
### ReactRouter
- 
### Redux
1. react-redux
2. 
## Vue

# 构建工具
## Babel
## Webpack

# Node.js
## Egg.js
