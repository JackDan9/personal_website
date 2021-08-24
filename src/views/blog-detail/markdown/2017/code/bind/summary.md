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

- 调用**绑定函数**时作为`this`参数传递给**目标函数**的值。如果使用`new`运算符构造绑定函数，则忽略该值。当使用`bind`在`setTimeout`中创建一个函数(作为回调提供)时，作为`thisArg`传递的任何原始值都转换为`object`。如果`bind`函数的参数列表为空，或者`thisArg`是`null`或者`undefined`，执行作用域的`this`将被视为新函数的`thisArg`。

- 为什么在`new`运算符构造绑定函数时就忽略`thisArg`了？这其实根据`new`运算符本身的特性有关，`new`运算符的特性如下:
- 1. 创建一个空的简单JavaScript对象(即{})；
- 2. 为步骤1新创建的对象添加属性`__proto__`，将该属性链接至构造函数的原型对象；
- 3. 将步骤1新创建的对象作为`this`的上下文；
- 4. 如果该函数没有返回对象，则返回`this`。


#### arg1, arg2, ...

- 当**目标函数**被调用时，被预置入**绑定函数**的参数列表中的参数。

### 返回值
- 返回一个**原函数的拷贝**，并拥有指定的`this`值和**初始参数**。

### bind()描述

- `bind()`函数会创建一个新的绑定函数(bound function, BF)。 

------

## Bind的使用



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