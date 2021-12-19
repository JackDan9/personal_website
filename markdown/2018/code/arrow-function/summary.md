# Arrow Function 箭头函数

-----

| 标题 | 内容 |
| --- | --- |
| 箭头函数的特点 | `this`指向, `构造函数`, `arguments对象`,  `Generator` |

------

## 箭头函数特点

### this

- 函数体内的`this`对象，就是**定义时所在的对象**，而**不是使用时所在的对象**。

```javascript
function arrow() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

arrow.call({ id: 42 });
// id: 42
```

- `setTimeout`的参数是一个箭头函数，这个箭头函数的定义是在**arrow函数生成时生效**的，而它**真正执行要等到100ms**后。

```javascript
function arrow() {
  setTimeout(function() {
    console.log('id:', this.id);
  }, 100)
}

var id = 21;

arrow.call({ id: 42 })
// id: 21
```

- `setTimeout`的参数时一个普通函数，执行时`this`应该指向全局对象`window`，所以这时输出`21`。
- 箭头函数`=>`可以让`setTimeout`里面的`this`绑定**定义时所在的作用域**，而不是**指向运行时所在的作用域**。

```javascript
function arrow() {
  this.s1 = 0;
  this.s2 = 0;
  // arrow function
  setInterval(() => this.s1++, 1000);
  // common function
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var arrow1 = new arrow();

setTimeout(() => console.log('s1: ', arrow1.s1), 3100);
setTimeout(() => console.log('s2: ', arrow1.s2), 3100);

// s1: 3
// s2: 0
```

- arrow函数内部设置了两个定时器，分别使用了箭头函数`() => this.s1++, 1000`和普通函数`function () { this.s2++; }, 1000`。
- 前者的`this`绑定**定义时所在的作用域**(即arrow函数)，后者的`this`指向**运行时所在的作用域**(即**全局对象**)。所以，3100ms之后，arrow1.s1被更新了3次，而arrow2.s2一次都没更新。
  
#### this固定化
- 箭头函数可以让`this`指向**固定化**，这种特性非常有利于**封装回调函数**。

```javascript
var handler = {
  id: '123456',

  init: function() {
    document.addEventListener('click', 
      event => this.doSomething(event.type), false);
  },

  doSomething: function(type) {
    console.log('Handling ' + type + ' for ' + this.id);
  }
};
```

- `init`方法中使用了箭头函数，这导致箭头函数里面的`this`总时指向`handler`对象。否则，回调函数运行时，`this.doSomething`一行会报错，因为此时`this`指向`document`对象。
- `this`指向的固定化并不是因为箭头函数内部有绑定this的机制，实际原因是**箭头函数根本没有自己的`this`**，导致**内部的this就是外层代码块的this**。正式因为它没有`this`，所以不能**用做构造函数**。

```javascript
// ES6 
function arrow() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

// ES5
function arrow() {
  var _this = this;

  setTimeout(function () {
    console.log('id:', _this.id);
  }, 100);
}
```

```javascript
/**
 * @description 只有一个this，就是arrow函数中的this
 * arrow2，arrow3，arrow4都输出同样的结果。
*/
function arrow() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}

var arrow1 = arrow.call({id: 1});

var arrow2 = arrow1.call({id: 2})()(); // id: 1
var arrow3 = arrow1().call({id: 3})(); // id: 1
var arrow4 = arrow1()().call({id: 4}); // id: 1
```

```javascript
/**
 * @description 箭头函数没有自己的this，所以bind无效，内部的this指向外部的this。
*/
(function() {
  return [
    (() => this.x).bind({ x: 'inner' })()
  ];
}).call({x: 'outer'});
// ['outer']
```

- 备注: 箭头函数让this固有化一定程度上解决了JavaScript语言带来的this对象困扰。
------

### 构造函数

- 不可以当作**构造函数**，换句话说，不可以使用`new`命令，否则会**抛出一个错误**。

```javascript
// arrow function
var arrow = () => { console.log(1) }
var arrow1 = new arrow() // VM298:1 Uncaught TypeError: arrow is not a constructor
```

```javascript
// common function
var arrow = function() {
  console.log(1);
}
var arrow1 = new arrow(); // 1
```

### arguments对象

- 不可以使用`arguments`对象，**该对象在函数体内不存在**。如果要用，可以用`rest`参数代替。

```javascript
// common function
function arrow() {
  console.log('args: ', arguments);
}

arrow() // args: Arguments []
```

```javascript
// arrow function
var arrow = () => { console.log('args: ', arguments); };

arrow(); // Uncaught ReferenceError: arguments is not defined
```

- 这里可能就会提出疑问了，你的函数里面都没有参数，怎么会存在arguments了？

```javascript
// common function
function arrow(a) {
  console.log('args: ', arguments);
};

arrow(1); // args: Arguments [1]
```

```javascript
// arrow function
var arrow = (a) => { console.log('args: ', arguments); };

arrow(1); // Uncaught ReferenceError: arguments is not defined
```

- 这里小伙伴可能会提问了，如果像实现arguments的返回怎么办了？可以使用`rest`。

```javascript
// arrow function
var arrow = (...a) => { console.log('args: ', a); };

arrow(1); // args: [1]
```

```javascript
/**
 * @description 箭头函数内部的变量arguments其实是函数arrow的arguments变量。
*/
function arrow() {
  setTimeout(() => {
    console.log('args: ', arguments);
  }, 100);
}

arrow(1, 3, 5, 7); // Arguments [1, 3, 5, 7]
```

### Generator

- 不可以使用`yield`命令，因此箭头函数不能用作 `Generator` 函数。

```javascript
// common function 
function* arrow() {
  yield 1,
  yield 2
}

var arrow1 = arrow()

arrow1.next()
arrow1.next()
arrow1.next()
```

- 备注: 根据语法规范，`yield` 关键字用来**暂停**和**继续执行**一个**生成器函数**。当外部调用生成器的`next()`方法时,`yield` 关键字**右侧的表达式**才会执行。

```javascript
// arrow function
var arrow = *() => {
  yield 1,
  yield 2
}
// Uncaught SyntaxError: Unexpected token *
```

- **备注**: 为"`箭头生成器（arrow generator）`"寻找个合适的语法不是项简单的事，TC39 在 2013 年和 2016 年分别讨论过两次（Brandan Eich 主导），从`*()`、`*=>`、`=*>`、`=>*` 中选出了=>*，勉强进入了 stage 1。而且因为有了“异步生成器（async generator）”，所以还得同时考虑“异步箭头生成器（async arrow generator）”的东西，听起来都麻烦，我都不想学了！
- Brendan Eich 太忙了，无暇参与规范制定。自从 2014 年 Brendan 从 Mozilla 被迫离职，开始自创门户以来，他就越来越没时间参与规范制定工作了。不过如果继续当着 Mozilla CEO，可能也不会太有空。
- 最重要的一点，之前生成器**99.999% 的用途都是拿它来实现异步编程**，并不是真的需要生成器本来的用途，自从有了` async/await`，生成器越来越没人用了，再等两年，估计就彻底无人问询了。

------

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
> https://developer.mozilla.org/zh-CN/docs/Glossary/IIFE