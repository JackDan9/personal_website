# 闭包 Closure

| 标题 | 内容 |
| --- | --- |
| 理解闭包 | 什么是闭包? |
| 闭包含义 | 闭包的含义? |
| 闭包使用 | 如何使用闭包? |
| 闭包的缺点 | 闭包带来的问题 |

## 什么是闭包?
- **闭包**是指有权访问另一个函数作用域中的变量的函数(红宝书)。
- **一个函数**和对其周围状态(**lexical environment，词法环境**)的引用捆绑在一起(或者说**函数被引用包围**)，这样的组合就是**闭包(closure)**。也就是说，闭包让你可以在**一个内层函数**中访问到**其外层函数**的**作用域**。在 JavaScript 中，每当创建一个函数，**闭包就会在函数创建的同时被创建出来**(MDN)。
- 从技术的角度讲，所有的JavaScript函数都是闭包(JavaScript权威指南)。

```javascript
var name = "The Window";
var object = {
  name: "My Object",
  getNameFunc: function () {
    return function () {
      return this.name;
    };
  }
};

console.log(object.getNameFunc()());
```

```javascript
var name = "The Window";
var object = {
  name: "My Object",
  getNameFunc: function () {
    var that = this;
    return function () {
      return that.name;
    };
  }
};

console.log(object.getNameFunc()());
```

### 理论角度闭包

- 所有的函数。因为它们都在创建的时候就将上层上下文的数据保存起来了。哪怕是简单的全局变量也是如此，因为函数中访问全局变量就相当于是在访问自由变量，这个时候使用最外层的作用域。

```javascript
var scope = "global scope";

function checkScope() {
  var scope = "local scope";
  function f() {
    return scope;
  }

  return f;
}

var f = checkScope();
f();
```

### 实践角度闭包

- 1. 即使创建函数的上下文已经销毁，函数仍然存在(比如, 内部函数从父函数中返回)
- 2. 在函数代码中引用了自由变量。

```javascript
```