# Bind

- `Function.prototype.bind()`

------

| 标题 | 内容 |
| --- | --- |
| Bind的定义 | 什么是Bind函数? |
| Bind的使用 | 如何使用Bind函数? |
| Bind的实现原理 | 如何实现Bind函数? |
| Bind的示例 | Bind函数实现继承等 |

------

## Bind的定义
- `bind()`方法创建一个**新的函数**，在`bind()`被调用时，这个新函数的`this`被指定为`bind()`的**第一个参数**，而**其余参数将作为新函数的参数**，供调用时使用。

```javascript
const jackdan = {
  age: 27,
  height: 185,
  getAge: function() {
    return this.age;
  },
  getHeight: function() {
    return this.height;
  }
}

const age = jackdan.getAge;
console.log(age()); // The function gets invoked at the global scope
// undefined

const age1 = jackdan.getAge();
console.log(age1);
// 27

const jackdanAge = age.bind(jackdan);
console.log(jackdanAge());
// 27
```

### 语法

```javascript
function.bind(thisArg[, arg1[, arg2[, ...]]]);
```

### 参数说明

#### thisArg

- 调用**绑定函数**时作为`this`参数传递给**目标函数**的值。如果使用`new`运算符构造绑定函数，则忽略该值(为什么？)。当使用`bind`在`setTimeout`中创建一个函数(作为回调提供)时，作为`thisArg`传递的任何原始值都转换为`object`。如果`bind`函数的参数列表为空，或者`thisArg`是`null`或者`undefined`，执行作用域的`this`将被视为新函数的`thisArg`。

- 为什么在`new`运算符构造绑定函数时就忽略`thisArg`了？这其实根据`new`运算符本身的特性有关，`new`运算符的特性如下:

```javascript
1. 创建一个空的简单JavaScript对象(即{})；
2. 为步骤1新创建的对象添加属性`__proto__`，将该属性链接至构造函数的原型对象；
3. 将步骤1新创建的对象作为`this`的上下文；
4. 如果该函数没有返回对象，则返回`this`。
```



- bind的作用: 创建一个新的函数(我们其实也可以称 —— 创建调用该函数的副本)，但是将`this`的值设置为**传递给它的第一个参数**也就是`thisArgs`。
- new的作用: 将`this`的值设置为**新创建的空对象**。
- 因此，如果使用`new`尝试调用与`this`关键字的值绑定的函数，则 **`new`关键字将覆盖`bind`并将`this`设置为空对象**。

```javascript
function A() {
  // console.log(this);
  console.log('test');
}

var a = new A();
// 输出test
```

- 原生实现:

```javascript
function A() {
  console.log('test');
}

function New(fn) {
  var obj = {};
  obj.__proto__ = fn.prototype;
  fn.apply(obj, arguments);
  return obj;
}

var a = New(A);
// 输出test
```

- `new`详细的介绍参考![new]()。

#### arg1, arg2, ...

- 当**目标函数**被调用时，被预置入**绑定函数**的参数列表中的参数。

### 返回值
- 返回一个**原函数的拷贝**，并拥有指定的`this`值和**初始参数**。

### bind()描述

- `bind()`函数会创建一个**新的绑定函数**(`bound function`, `BF`)。绑定函数是一个`exotic function object`(怪异函数对象)，它包装了原函数对象。调用**绑定函数**通常会导致执行**包装函数**。

- **绑定函数**具有以下内部属性:

```javascript
1. [[BoundTargetFunction]] - 包装的函数对象
2. [[BoundThis]] - 在调用包装函数时始终作为`this`值传递得值。
3. [[BoundArguments]] - 列表，在对包装函数做任何调用都会优先用列表元素填充参数列表。
4. [[Call]] - 执行与此对象关联的代码。通过函数调用表达式调用。内部方法的参数是一个`this`值和一个包含通过调用表达式传递给函数的参数的列表。
```

- 当调用绑定函数时，它调用 **[[BoundTargetFunction]]** 上的内部方法 **[[Call]]**，就像这样**Call(boundThis, args)**。其中，**boundThis**是 **[[BoundThis]]**，**args**是 **[[BoundArguments]]**加上通过函数调用传入的参数列表。
- 绑定函数也可以使用`new`运算符构造，它会表现为**目标函数已经被构建完毕了似的**。提供的`this`值会被忽略，但**前置参数仍会提供给模拟函数**。

```javascript
// 希望可以仔细跑下这个实例，非常值得研究和反复验证
function myFunc() {
  console.log('this=', this.name,
    'constructor=', this.constructor.name, 
    this.constructor === myFunc)
}

myFunc.prototype.name = "PROTOTYPE";
let myObj = {name: 'jackdan'};

myFunc();

// let myFunc1 = new myFunc();
// var bound = myFunc.bind({name: 'jackdan'});
myObj.f = myFunc; 
myObj.f();

var func = new myFunc();
var bound1 = myFunc.bind({name: 'jackdan'});
```

------

## Bind的使用
### 创建绑定函数

- `bind()`最简单的用法是**创建一个函数**，不论怎么调用，**这个函数都有同样的`this`值**。
- JavaScript新手经常犯的一个错误是**将一个方法从对象中拿出来**，**然后再调用**，期望方法中的`this`是原来的对象(比如在**回调中传入这个方法**)。
- 如果不做特殊处理的话，一般会丢失原来的对象。基于这个函数，用原始的对象创建一个绑定函数，巧妙地解决了这个问题:

```javascript
// 非严格模式下
this.age = 30;
var obj = {
  age: 27,
  getAge: function() {
    return this.x;
  }
}

obj.getX(); // 27
var totalX = obj.getX；
totalX(); // 返回 30 - 因为函数是在全局作用域中调用的

// 创建一个新函数，把 'this' 绑定到 obj 对象
// 新手可能会将全局变量 age 与 obj 的属性 age 混淆
var boundX = totalX.bind(obj);
boundX(); // 27
```

### 偏函数

- `bind()`的另一个最简单的用法是使一个函数拥有预设的初始参数。只要将这些参数(如果有的话)作为`bind()`的参数写在`this`后面。当绑定函数被调用时，这些参数会被插入到目标函数的参数列表的开始位置，传递给绑定函数的参数会跟在它们后面。

```javascript
function toArray() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

var argList = toArray(1, 2, 3); // [1, 2, 3]
var result1 = addArguments(1, 2); // 3

// 创建一个函数，它拥有预设参数列表。
// 创建一个函数，它拥有预设参数列表。
var leadingThirtysevenList = toArray.bind(null, 37);

// 创建一个函数，它拥有预设的第一个参数
var addThirtySeven = addArguments.bind(null, 37);

var list2 = leadingThirtysevenList();
// [37]

var list3 = leadingThirtysevenList(1, 2, 3);
// [37, 1, 2, 3]

var result2 = addThirtySeven(5);
// 37 + 5 = 42

var result3 = addThirtySeven(5, 10);
// 37 + 5 = 42 ，第二个参数被忽略
```

### 配合setTimeout

- 在默认情况下，使用`window.setTimeout()`时，`this`关键字会指向`window`(或者global)对象。当类的方法中需要`this`指向类的实例时，你可能需要显式地把`this`绑定到回调函数，就不回丢失该实例的引用。

```javascript
function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// 在 1 秒钟后声明 bloom
LateBloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' +
    this.petalCount + ' petals!');
};

var flower = new LateBloomer();
flower.bloom();  // 一秒钟后, 调用 'declare' 方法
```

### 作为构造函数使用的绑定函数

- 绑定函数自动适应于****使用`new`操作符去构造一个由目标函数创建的新实例****。当一个绑定函数是用来**构建一个值的**，原来提供的`this`就会被忽略。不过**提供的参数列表仍然会插入到构造函数调用时的参数列表之前**(之前也有验证)。

> 备注: 这部分演示了 JavaScript 的能力并且记录了 bind() 的超前用法。以下展示的方法并不是最佳的解决方案，且可能不应该用在任何生产环境中。

```javascript
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return this.x + ',' + this.y;
};

var p = new Point(1, 2);
p.toString(); // '1,2'

var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0/*x*/);

// 下方的 polyfill 不支持运行这行代码，
// 但使用原生的 bind 方法运行是没问题的：

var YAxisPoint = Point.bind(null, 0/*x*/);

/*（译注：polyfill 的 bind 方法中，如果把 bind 的第一个参数加上，
即对新绑定的 this 执行 Object(this)，包装为对象，
因为 Object(null) 是 {}，所以也可以支持）*/

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new YAxisPoint(17, 42) instanceof Point; // true
```

- 请注意，如果不需要做特别的处理就可以**创建一个和`new`操作符一起使用的绑定函数**。也就是说，你不需要**做特别处理就可以创建一个可以被直接调用的绑定函数**，即使你更希望绑定函数是用`new`操作符来调用。

```javascript
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return this.x + ',' + this.y;
};

var p = new Point(1, 2);
p.toString(); // '1,2'

var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0/*x*/);

// 下方的 polyfill 不支持运行这行代码，
// 但使用原生的 bind 方法运行是没问题的：

var YAxisPoint = Point.bind(null, 0/*x*/);

/*（译注：polyfill 的 bind 方法中，如果把 bind 的第一个参数加上，
即对新绑定的 this 执行 Object(this)，包装为对象，
因为 Object(null) 是 {}，所以也可以支持）*/

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new YAxisPoint(17, 42) instanceof Point; // true

// 仍然能作为一个普通函数来调用
// (即使通常来说这个不是被期望发生的)
YAxisPoint(13);
emptyObj.x + ',' + emptyObj.y; // '0, 13'
```

- 如果你希望一个绑定函数要么**只能用 new 操作符**，要么只能直接调用，那你必须在**目标函数上显式规定这个限制**。

### 快捷调用

- 在你想要为一个需要特定的`this`值的函数创建一个捷径(shortcut)的时候，`bind()`也很好用。
- 你可以用`Array.prototype.slice`来将一个类似于数组的对象(array-like object)转换成一个真正的数组，就拿它来举例子吧。你可以简单地这样写:

```javascript
var slice = Array.prototype.slice;

// ...

slice.apply(arguments);
```

- 用`bind()`可以使这个过程变得简单。在下面这段代码里面，`slice`是`Function.prototype.apply()`方法的绑定函数，并且将`Array.prototype`的`slice()`方法作为`this`的值。这意味着我们压根儿用不着上面那个`apply()`调用了。

```javascript
// 与前一段代码的 "slice" 效果相同
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.apply.bind(unboundSlice);

// ...

slice(arguments);
```

------

## Bind的实现不支持new

```javascript
Function.prototype.myBind = function() {
  var self = this;
  var thatArgs = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  if(typeof self !== 'function') {
    // closest thing possible to the ECMAScript 5
    // internal IsCallable function
    throw new TypeError('Function.prototype.bind - ' + 
    'what is trying to be bound is not callable')
  }

  return function() {
    var funcArgs = args.concat(Array.prototype.slice.call(arguments));
    return self.apply(thatArgs, funcArgs);
  }
}
```

- 你可以将这段代码插入到你的脚本开头，从而使你的`bind()`在没有内置实现支持的环境中也可以部分地使用`bind`。

## Bind的实现支持new

```javascript
Function.prototype.myBind = function(context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fTemp = function() {};

  var fBound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fTemp ? this : context, args.concat(bindArgs));
  }

  fTemp.prototype = this.prototype;
  fBound.prototype = new fTemp();
  return fBound;
}

var jackdan = {
  age: 27,
  height: 185,
  getAge: function() {
    return this.age;
  },
  getHeight: function() {
    return this.height;
  }
}

var height = jackdan.getHeight;
var jackdanHeight = height.bind(jackdan);
console.log(jackdanHeight());
// 185
```

## Bind示例

```javascript
var obj = {
  firstname: 'Dan',
  lastname: 'Jack',
  age: 27,
  height: 185,
  getName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
};

var myName = function() {
  console.log(this.getName() + 'I choose you!')
}

var print = myName.bind(obj); // creates new object and binds obj. 'this' of obj === obj now
```

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind