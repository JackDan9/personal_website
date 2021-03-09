# Promise 对象

| 标题 | 内容 |
| --- | --- |
| Promise来源 | 为什么需要Promise对象？ |
| Promise原理 | Promise是怎么实现的？ |
| Promise实现 | 如何原生实现Promise？|

## 为什么需要Promise对象?

- 在剖析这个问题之前，我们需要了解一下异步编程。

### 异步编程

- 首先，我们其实都知道JavaScript语言的执行环境是"**单线程**"(single thread)。
- 所谓"**单线程**"，就是指**一次只能完成一件任务**。如果有多个任务，就必须排队，前面一个任务完成，再执行后面一个任务，以此类推。

#### 单线程的好处
- 实现起来比较简单，执行环境相对单纯；

#### 单线程的坏处
- 只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。常见的浏览器无响应(假死)，往往就是因为某一段JavaScript代码长时间运行(比如死循环)，导致整个页面卡在这个地方，其他任务无法执行。

```javascript
/**
 * @description 2一直都不会输出
*/
while(true) {
  console.log(1);
}
console.log(2);
```

- JavaScript语言将任务的执行模式分成两种: **同步**(`Synchronous`)和**异步**(`Asynchronous`)。
- "**同步模式**"就是**单线程**的模式，后一个任务等待前一个任务结束，然后再执行，程序的执行顺序与任务的排列顺序是一致的、同步的；
- "**异步模式**"则完全不同，每一个任务**有一个或多个**回调函数(`callback`)，前一个任务结束后，不是执行后一个任务，而是**执行回调函数**，后一个任务则是不等前一个任务结束就执行，所以**程序的执行顺序**与**任务的排列顺序**是**不一致的**、**异步的**。
- 采用异步模式(Asynchronous)编写的函数方法，也就是异步编程。


### 没有Promise之前的异步编程方法

#### 回调函数
- 这是异步编程最基本的方法。

```javascript
/**
 * @description 假定有两个函数f1和f2，后者等待前者的执行结果。
 * 如果f1是一个很耗时的任务，可以考虑改写f1，把f2写成f1的回调函数。
*/
function f1() {
  console.log(1);
}

function f2() {
  console.log(2);
}

f1();
f2();
```

```javascript
/**
 * @function f1 定义主函数，回调函数作为参数
 * @function f2 定义回调函数
*/
function f1(callback) {
  setTimeout(function () { // 模仿函数操作
    // f1的任务代码
    callback();
  }, 1000);
  console.log(1);
}

function f2() {
  console.log(2);
}
f1(f2);
// 1
// 2
```

```javascript
/**
 * @function f1 定义主函数, 回调函数作为参数
 * @function f2 定义回调函数
*/
function f1(callback) {
  callback();
  console.log('我是主函数!');
}

function f2() {
  setTimeout(function () {
    console.log('我是回调函数!');
  }, 3000); // 模仿耗时操作
}

f1(f2);
// 我是主函数
// 我是回调函数
```

- 我们把**同步操作**变成了**异步操作**，`f1`不会堵塞程序运行，相当于**先执行程序的主要逻辑**，将**耗时的操作推迟执行**。

- 优点: **简单**、**容易理解**和**部署**。
- 缺点: **不利于代码的阅读和维护**，各个部分之间**高度[耦合](https://en.wikipedia.org/wiki/Coupling_(computer_programming))**(`Coupling`)，流程会很混乱，而且**每个任务只能指定一个回调函数**。

#### 事件监听
- 另一种思路是采用**事件驱动模式**。任务的执行**不取决于代码的顺序**，而**取决于某个事件是否发生**。

```javascript
/**
 * @description https://code.jquery.com/jquery-3.6.0.js
 * @function f1 绑定一个事件
 * @function f2 当f1发生done事件，就执行f2。 
*/
function f2() {
  console.log('2');
}

f1.on('done', f2);

function f1() {
  setTimeout(function () {
    f1.trigger('done'); // 执行完成后，立即触发done事件，从而开始执行f2。
  }, 1000);
}
```

- 优点: 比较**容易理解**，可以**绑定多个事件**，每个事件可以指定**多个回调函数**，而且可以"**[去耦合](https://en.wikipedia.org/wiki/Decoupling)**"(Decoupling)，有利于实现**模块化**。
- 缺点: 整个程序都要变成**事件驱动型**，**运行流程**会变得很不清晰。

#### 发布/订阅
- 事件驱动中的事件，完全可以理解成"信号"。
- 我们假定，存在一个"**信号中心**"，某个任务执行完成，就向**信号中心"发布"（publish）一个信号**，其他任务可以向**信号中心"订阅"（subscribe）这个信号**，从而知道什么时候自己可以开始执行。这就叫做"**发布/订阅模式**"(`publish-subscribe pattern`)，又称"**观察者模式**"(`observer pattern`)。

```javascript
let publisher = {
  subscribers: {
    any: []
  },
  subscribe: function (fn, type=`any`) {
    if (typeof this.subscribers[type] === `undefined`) {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  },
  unSubscribe: function (fn, type=`any`) {
    let newSubscribers = [];
    this.subscribers[type].forEach((item, i) => {
      if (item !== fn) {
        newSubscribers.push(fn);
      }
    });
    this.subscribers[type] = newSubscribers;
  },
  publish: function (args, type=`any`) {
    this.subscribers[type].forEach((item, i) => {
      item(args);
    });
  }
};

function makePublisher(obj) {
  for (let i in publisher) {
    if (publisher.hasOwnProperty(i) && typeof publisher[i] === `function`) {
      obj[i] = publisher[i];
    }
  }
  obj.subscribers = { any: [] };
}

var paper = {
  day: function () {
    this.publish(`today!`);
  },
  week: function () {
    this.publish(`a week has seven days!`, `week`);
  }
};

makePublisher(paper);

var test = {
  sayTime: function(paper) {
    console.log(`Today is ` + paper);
  },
  sayDate: function(week) {
    console.log(`About to fall asleep reading this ` + week);
  }
};

paper.subscribe(test.sayTime);
paper.subscribe(test.sayDate, `week`);

paper.day(); // Today is today!
paper.day(); // Today is today!
paper.week(); // About to fall asleep reading this a week has seven days
paper.week(); // About to fall asleep reading this a week has seven days
paper.week(); // About to fall asleep reading this a week has seven days
```

```javascript
/**
 * @description https://code.jquery.com/jquery-3.6.0.js
 * 首先，f2向"信号中心"jQuery订阅"done"信号。
*/
function f2() {
  console.log(2);
}

jQuery.subscribe("done", f2);

// 然后, f1进行如下写:
function f1() {
  setTimeout(function() {
    // f1的任务代码
    jQuery.publish("done");
  }, 3000)
};

// jQuery.publish("done")的意思是，f1执行完成后，向"信号中心"jQuery发布"done"信号，从而引发f2的执行。
// 此外，f2完成执行后，也可以取消订阅（unsubscribe）。
jQuery.unsubscribe("done", f2);
```

```javascript
/**
 * @description 
*/
const button = document.querySelector("button");
button.addEventListener("click", (event) => /* do something with the evnet */);
```

```javascript
/**
 * @description 
*/
let n = 0;
const evnet = new EventEmitter();

event.subscribe("THUNDER_ON_THE_MOUNTAIN", value => (n = value));

event.emit("THUNDER_ON_THE_MOUNTAIN", 18);

// n: 18

event.emit("THUNDER_ON_THE_MOUNTAIN", 5);

// n: 5
```

- **发布/订阅**方法的性质与"**事件监听**"类似，但是**明显优于后者**。因为我们可以通过查看"**消息中心**"，了解**存在多少信号**、**每个信号有多少订阅者**，从而**监控程序的运行**。

- 以上就是异步编程和实现异步编程的几种方式，但是方式中都存在多多少少不完善的地方，所以在ES6引入了Promise(异步编程的一种解决方案)，因为Promise更加合理也更加强大，那为什么Promise更加合理和强大了？

------

## Promise
- `Promise` 是**异步编程的一种解决方案**，比传统的解决方案——**回调函数和事件**——更合理和更强大。
- 所谓`Promise`，简单说就是一个**容器**，里面保存着**某个未来才会结束的事件**（通常是一个异步操作）的结果。
- 从语法上说，`Promise`是一个对象，从它可以获取异步操作的消息。
- `Promise`提供统一的API，各种异步操作都可以用同样的方法进行处理。

```javascript
/**
 * @description Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
 * resolve和reject是两个函数，由JavaScript引擎提供，不用自己部署。
 * @function resolve JavaScript引擎提供
 * @function reject JavaScript引擎提供
*/
const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

### Promise特点
- 1.对象的状态不受外界影响。
- `Promise`对象代表一个异步操作，有三种状态：`pending`（进行中）、`fulfilled`(`resolved`)（已成功）和`rejected`（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，**任何其他操作都无法改变这个状态**。这也是Promise这个名字的由来，它的英语意思就是"承诺"，表示**其他手段无法改变**。

```javascript
/**
 * @function resolve
 * resolve将Promise对象的状态从"未完成"变为"成功"(pending -> resolved)
 * 在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。
 * 
 * @function reject
 * reject函数的作用是，将Promise对象的状态从"未变成"变为"失败"(pending -> rejected)
 * 在异步操作失败时调用，并将异步操作的结果，作为参数传递出去。
*/
const promise1 = new Promise(function(resolve, reject) {
  // ... some code
  let value = 1;
  if (value === 1) {
    resolve(value);
  } else {
    reject(value);
  }
});

/**
 * @description Promise实力生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
 * then方法可以接受两个回调函数作为参数。
 * 第一个回调函数参数: Promise对象的状态变为resolved时调用。
 * 第二个回调函数参数: Promise对象的状态变为rejected时调用。
 * 这两个参数都是可选的，不一定要提供。
 * 这两个回调函数都接受Promise对象传出的值作为参数。
*/
promise1.then(function(value) {
  // success
}, function(error) {
  // failure
});
```

- 2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果，`Promise`对象的状态改变，只有两种可能: 从`pending`变为`fulfilled`和从`pending`变为`rejected`。
- 只要这两种情况发生，**状态就凝固**了，不会再变了，会一直保持这个结果，这时就称为 `resolved`（**已定型**）。
- 如果改变已经发生了，你再对`Promise`对象添加**回调函数**，也会**立即得到这个结果**。
- 这与事件（`Event`）完全不同，事件的特点是，如果你错过了它，再去监听，是**得不到结果的**。

```javascript
/**
 * @description 使用Promise包装了一个图片加载的异步操作。
 * 如果加载成功，就调用resolve方法，否则就调用reject方法。
*/
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    const img = new Image();

    img.onload = function () {
      resolve(img);
    }

    img.onerror = function () {
      reject(new Error('Could not load image at ' + url));
    }

    img.src = url;
  })
}
```

```javascript
const promise2 = new Promise(function(resolve, reject) {
  let value = 2;
  if (value === 2) {
    resolve(value);
  } else {
    reject(value);
  }
});
```

### Promise的好处
- 可以将异步操作以**同步操作的流程**表达出来，避免了**层层嵌套的回调函数**。
- Promise对象提供了**统一的接口**，使得控制**异步操作更加容易**。

### Promise的缺点
- 无法取消Promise，一旦新建Promise就会立即执行，无法中途取消。
- 不设置回调函数，Promise内部抛出错误，不会反应到外部。
- 当处于`pending`状态时，无法得知目前进展到哪一个阶段(刚刚开始还是即将完成)。


