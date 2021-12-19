# Call函数

- `Function.prototype.call()`

------

| 标题 | 内容 |
| --- | --- |
| Call的定义 | 什么是Call函数? |
| Call的使用 | 如何使用Call函数? |
| Call的实现原理 | 如何实现Call函数? |
| Call的示例 | Call函数实现继承等 |

------

## Call的定义

- `call()`方法使用一个**指定的`this`值**和**单独给出的一个**或者**多个参数**来**调用一个函数**。

```javascript
function People(name, age) {
  this.name = name;
  this.age = age;
}

function Person(name, age) {
  People.call(this, name, age);
  this.tall = '185';
}


var person = new Person('jackdan', 25);

console.log(person) // Object { name: "jackdan", age: 25, tall: "185" }
console.log(person.name) // "jackdan"
```

### call的语法

```javascript
/**
 * @desciption Function.prototype.call()
 * 
*/
function.call(thisArg, arg1, arg2, arg3, ...)
```

#### 参数说明

- `thisArg`: 可选的。在`function`函数运行时使用的`this`值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为null或者undefined会自动替换为指向全局变量，原始值会被包装。

- 详细解释(理解记忆): 在**ECMAScript 5的严格模式**中，`call()`和`apply()`的**第一个实参**也就是`thisArg`都会变为 **`this`的值**，哪怕传入的实参是**原始值**甚至是`null`或者`undefined`。在**ECMAScript 3**和**非严格模式**中，传入的`null`和`undefined`都会被**全局对象代替**，而**其他原始值则会被相应的包装对象(`wrapper object`)所代替**。

```javascript
// 非严格模式
var name = 'jackdan';

function sayName() {
  console.log(this); // Window
  console.log('My Name is %s', this.name)
}

sayName.call();
```

- 严格模式:

```javascript
// 严格模式
'use strict'

var name = 'jackdan';

function sayName() {
  console.log(this); // undefined
  console.log('My Name is %s', this.name); // Uncaught TypeError: Cannot read property 'name' of undefined
}

sayName.call();
```

- `arg1, arg2, agr3, ...`: 指定的参数列表。


#### 返回值
- **使用调用者**提供的`this`值和**参数调用该函数的返回值**。若该方法没有返回值，则返回`undefined`。

#### 描述
- `call()`允许为**不同的对象分配**和**调用**属于一个对象的**函数/方法**。
- `call()`提供新的this值给当前调用的函数/方法。你可以使用`call`来实现继承: 写一个方法，然后让另外一个**新的对象来继承它**(而不是在新对象中再写一次这个方法)

```javascript
function People(name, age) {
  this.name = name;
  this.age = age;
}

function PersonJack(name, age) {
  People.call(this, name, age);
  this.tall = 185
}

function PersonRose(name, age) {
  People.call(this, name, age);
  this.tall = 165;
}

var jackdan = new PersonJack('jackdan', 26);
var rose = new PersonRose('rose', 24);
console.log(jackdan); // PersonJack {name: "jackdan", age: 26, tall: 185}
console.log(rose); // PersonRose {name: "rose", age: 24, tall: 165}
```

------

## Call的实现

- `call()`方法在使用一个指定的`this`值和若干个指定的参数值的前提下调用某个函数或方法。

```javascript
var personObj = {
  name: 'jackdan'
}

var sayName = function() {
  console.log(this.name)
}

sayName.call(personObj); // jackdan
```

- 等价于

```javascript
var personObj = {
  name: 'jackdan',
  sayName: function() {
    console.log(this.name);
  }
}

personObj.sayName(); // jackdan

// 1. 将函数设为对象的属性
// 2. 执行该函数
// 3. 删除该函数

personObj.fn = personObj.sayName;

personObj.fn(); // jackdan

delete personObj.fn(); // jackdan
```

- `Function.prototype.myCall`实现

```javascript
Function.prototype.myCall = function(context) {
  context.fn = this;
  context.fn();
  delete context.fn();
}

var personObj = {
  name: 'jackdan'
}

var sayName = function() {
  console.log(this.name);
}

sayName.myCall(personObj);
```

- `Function.prototype.myCall`带参数的实现

```javascript
var personObj = {
  tall: 185
}

var sayName = function(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.tall);
}

sayName.call(personObj, 'jackdan', 26); // jackdan 26 185
```

```javascript
Function.prototype.myCall = function(context) {
  context = Object(context) || window;
  context.fn = this;

  var args = [];

  for(var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }

  var result = eval('context.fn(' + args + ')');
  delete context.fn;
  return result;
}

let arr = [26, 185];
let ele = "jackdan";
arr.push.myCall(arr, ele);

var personObj = {
  tall: 185
}

var sayName = function(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.tall);
}

sayName.myCall(personObj, 'jackdan', 26);
```

- 优化一下，不用eval函数实现。

```javascript
Function.prototype.myCall = function(context) {
  let ctx = Object(context) || window;

  ctx.fn = this;

  let args = [];

  let result;

  for(let i = 1, len = arguments.length; i < len; i++) {
    args.push(arguments[i]);
  }

  result = ctx.fn(...args);

  delete ctx.fn;
  return result;
}

let arr = [26, 185];
let ele = "jackdan";
let ele1 = "handsome jackdan";

arr.push.myCall(arr, ele, ele1);
```

------

## 示例

### 使用 call 方法调用父构造函数

- 在一个子构造函数中，你可以通过调用**父构造函数**的` call `方法来**实现继承**，类似于` Java `中的写法。下例中，使用` Food `和` Toy `**构造函数**创建的对象实例都会拥有在` Product `构造函数中添加的` name `属性和` price `属性,但` category `属性是在**各自的构造函数**中定义的。

```javascript
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
console.log(cheese); // Food {name: "feta", price: 5, category: "food"}
console.log(fun); // Toy {name: "robot", price: 40, category: "toy"}
```

### 使用 call 方法调用匿名函数

- 在下例中的` for `循环体内，我们创建了一个**匿名函数**，然后通过调用该函数的` call `方法，将每个数组元素作为指定的` this `值执行了那个匿名函数。这个匿名函数的主要目的是给每个数组元素对象添加一个` sayName `方法，这个` sayName `方法可以打印出各元素在数组中的**正确索引号**。当然，这里不是必须得让数组元素作为` this `值传入那个匿名函数(普通参数就可以)，目的是为了演示` call `的用法。

```javascript
var people = [
  { name: 'jackdan', age: 26 },
  { name: 'rose', age: 24 }
];

for (var i = 0; i < people.length; i++) {
  (function(i) {
    this.sayName = function() {
      console.log('#' + i + ' ' + this.name + ': ' + this.age);
    }
    this.sayName();
  }).call(people[i], i);
}

// #0 jackdan: 26
// #1 rose: 24
```

### 使用 call 方法调用函数并且指定上下文的 'this'
- 在下面的例子中，当调用` sayName `方法的时候，该方法的`this`值会绑定到` obj `对象。

```javascript
function sayName() {
  var reply = [this.person, 'typically sleep between', this.sleepDuration].join(' ');
  console.log(reply);
}

var obj = {
  person: 'jackdan', sleepDuration: '8 and 10 hours'
};

sayName.call(obj); // jackdan typically sleep between 8 and 10 hours
```

### 使用 call 方法调用函数并且不指定第一个参数（argument）

- 在下面的例子中，我们调用了` sayName `方法，但并没有传递它的**第一个参数**。如果没有**传递第一个参数**，`this `的值将会被绑定为**全局对象**。

```javascript
// 非严格模式
var name = 'jackdan';

function sayName() {
  console.log(this); // Window
  console.log('My Name is %s', this.name)
}

sayName.call();
```

- 严格模式: 如果没有传递第一个参数，`this`的值将会是undefined。
- **建议**: 还是需要在严格模式下去编写程序，避免**全局对象带来作用域的污染**。

```javascript
// 严格模式
'use strict'

var name = 'jackdan';

function sayName() {
  console.log(this); // undefined
  console.log('My Name is %s', this.name); // Uncaught TypeError: Cannot read property 'name' of undefined
}

sayName.call();
```

------

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call