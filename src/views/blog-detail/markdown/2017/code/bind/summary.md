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
- 1. 创建一个空的简单JavaScript对象(即{})；
- 2. 为步骤1新创建的对象添加属性`__proto__`，将该属性链接至构造函数的原型对象；
- 3. 将步骤1新创建的对象作为`this`的上下文；
- 4. 如果该函数没有返回对象，则返回`this`。

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
- 绑定函数也可以使用`new`运算符构造，它会表现为**目标函数已经被构建完毕了似的**。提供的`this`值会被忽略，但前**置参数仍会提供给模拟函数**。

```javascript

```

------

## Bind的使用

```javascript
// 非严格模式下
this.x = 9;
var obj = {
  x: 81,
  getX: function() {
    return this.x;
  }
}

obj.getX(); // 81
var totalX = obj.getX；
totalX(); // 返回 9 - 因为函数是在全局作用域中调用的

// 创建一个新函数，把 'this' 绑定到 obj 对象
// 新手可能会将全局变量 x 与 obj 的属性 x 混淆
var boundX = totalX.bind(obj);
boundX(); // 81
```

------

## Bind的实现

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

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind