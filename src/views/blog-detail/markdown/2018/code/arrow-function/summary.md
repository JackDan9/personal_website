# Arrow Function 箭头函数

-----

| 标题 | 内容 |
| --- | --- |
| 箭头函数的特点 | |

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

### 构造函数

- 不可以当作**构造函数**，换句话说，不可以使用`new`命令，否则会**抛出一个错误**。

### arguments对象

- 不可以使用`arguments`对象，**该对象在函数体内不存在**。如果要用，可以用`rest`参数代替。

### Generator

- 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

------

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
> https://developer.mozilla.org/zh-CN/docs/Glossary/IIFE