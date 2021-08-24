# 闭包 Closure

| 标题 | 内容 |
| --- | --- |
| 理解闭包 | 什么是闭包? |
| 闭包含义 | 闭包的含义? |
| 闭包使用 | 如何使用闭包? |
| 闭包的缺点 | 闭包带来的问题 |
| 闭包的示例 | 防抖和节流 |

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

- `this`赋值给`that`。

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

```javascript
var scope = "global scope";

function checkScope() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  return f();
}

checkScope();
```

### 实践角度闭包

- 1. 即使创建函数的上下文已经销毁，函数仍然存在(比如, 内部函数从父函数中返回)
- 2. 在函数代码中引用了自由变量。

```javascript
```

------

## 闭包的示例

- Web界面**窗口(Window)**的resize、scroll，输入框内容校验等操作时, 如果这些操作处理函数较为复杂或者页面频繁**重渲染**(**重绘**或者**重排**)等操作时，如果时间触发的频率无限制，会加重浏览器的负担，导致用户体验非常糟糕。此时我们可以采用防抖(debounce)和throttle(节流)的方式来减少触发的频率, 同时又不影响实际效果。

### 防抖---debounce

- debounce(防抖)，简单来说就是防止抖动。

```javascript
// 简化写法

function debounce(fn, delay) {
                let timer = null; // 借助闭包
                return function () {
                    if(timer) {
                        clearTimeout(timer)
                    }
                    timer = setTimeout(fn, delay) // 简化写法
                } 
            }

function debounce(fn, delay_timer) {
  var ctx;
  var agrs;
  var timer = null;

  var later = function() {
    fn.apply(ctx, args);
    // 当事件真正执行后，清空定时器
    timer = null;
  }

  return function() {
    ctx = this;
    args = arguments;
    // 当持续触发事件时，若发现事件触发的定时器已设置时，则清除之前的定时器
    if(timer) {
      clearTimeout(timer);
      timer = null;
    }

    // 重新设置事件触发的定时器
    timer = setTimeout(later, delay_timer);
  };
}
```





### 节流---throttle

- 节流(throttle), 当持续触发事件时，保证间隔时间触发一次事件。

```javascript
// 简化写法
function throttle(fn, delay) {
  let valid = true
  return function() {
    if(!valid) {
      // 休息时间，不要打扰我
      return false;
    }
    //工作时间, 执行函数并且在间隔期内把状态设为无效
    valid = false;
    setTimeout(() => {
      fn();
      valid = true;
    }, delay);
  };
};

function throtte(fn, delay_timer) {
  var ctx;
  var args;
  // 记录上次触发事件
  var previous = Date.now();

  var later = function() {
    fn.apply(ctx, args);
  };

  return function() {
    ctx = this;
    args = arguments;
    var now = Date.now();
    // 本次事件触发与上一次的时间比较
    var diff = now - previous - delay;

    // 如果间隔时间超过设定时间，即再次设置事件触发的定时器
    if (diff >= 0) {
      // 更新最近事件触发的时间
      previous = now;
      setTimeout(later, delay_timer);
    }
  };
}
```

```html
<!DOCTYPE html>
<html dir="ltr">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="renderer" content="webkit"/>
  <meta name="description" content="sharing and speechless"/>
  <meta name="keywords" content="speechless,sharing,css,html,html5,js,node,nodejs" />
  <title>speechless - debounce(防抖)和throttle(节流)</title>

  <link rel="stylesheet" href="../../lib/bootstrap/bootstrap.min.css" />
  <link rel="stylesheet" href="../../css/style.css" />

  <style>
    .label {
      color: #000;
      margin-right: 20px;
    }
    .inline-block {
      display: inline-block;
    }
    .container {
      margin-top: 50px;
    }

    .section {
      margin-bottom: 100px;
    }
    .section__title {
      margin-bottom: 80px;
    }
    .section__boxes {
      font-size: 22px;
    }
  </style>
</head>
<body>
<div class="container">
  <div class="section">
    <h3 class="section__title text-center">debounce - 防抖</h3>
    <div class="section__boxes">
      <div class="form-group">
        <label for="debounceInput">Letters</label>
        <input type="text" class="form-control" id="debounceInput">
      </div>
      <div class="form-group">
        <label for="debounceTarget">ToUpperCase</label>
        <input type="text" class="form-control" id="debounceTarget" disabled="disabled">
      </div>
    </div>
  </div>
  <div class="section">
    <h3 class="section__title text-center">throttle - 节流</h3>
    <div class="section__boxes">
      <div class="form-group">
        <label for="throttleInput">Letters</label>
        <input type="text" class="form-control" id="throttleInput">
      </div>
      <div class="form-group">
        <label for="throttleTarget">ToUpperCase</label>
        <input type="text" class="form-control" id="throttleTarget" disabled="disabled">
      </div>
    </div>
  </div>
</div>

<script>
  function debounce(fn, delay) {
    var ctx;
    var args;
    var timer = null;

    var later = function () {
      fn.apply(ctx, args);
      timer = null;
    };

    return function () {
      ctx = this;
      args = arguments;

      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      timer = setTimeout(later, delay);
    };
  }

  function throttle(fn, delay) {
    var ctx;
    var args;
    var previous = Date.now();

    var later = function () {
      fn.apply(ctx, args);
    };

    return function () {
      ctx = this;
      args = arguments;
      var now = Date.now();
      var diff = now - previous - delay;

      if (diff >= 0) {
        previous = now;
        setTimeout(later, delay);
      }
    };
  }

  var debounceInputElmt = document.getElementById('debounceInput');
  var debounceTargetElmt = document.getElementById('debounceTarget');
  debounceInputElmt.addEventListener('input', debounce(function() {
    debounceTargetElmt.value = (debounceInputElmt.value || '').toUpperCase();
  }, 500));

  var throttleInputElmt = document.getElementById('throttleInput');
  var throttleTargetElmt = document.getElementById('throttleTarget');
  throttleInputElmt.addEventListener('input', throttle(function() {
    throttleTargetElmt.value = (throttleInputElmt.value || '').toUpperCase();
  }, 500));
</script>
</body>
</html>
```

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures