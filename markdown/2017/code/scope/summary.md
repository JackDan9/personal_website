# Scrop 作用域

------

| 标题 | 内容 |
| --- | --- |
| 作用域定义 | JavaScript作用域定义是什么？ |
| 全局变量 | 函数内部可以直接读取全局变量 |
| 局部变量 | 函数外部自然无法读取函数内的局部变量 |

------

## JavaScript作用域定义是什么？

- 作用域是指程序源代码中**定义变量的区域**。
- 作用域规定了**如何查找变量**，也就是**确定当前执行代码对变量的访问权限**。
- JavaScript采用**词法作用域(`lexical scoping`)**，也就是**静态作用域**。

```javascript
function scope() {
  var s = 'declared inside function'; // s只能在scope函数中使用
  console.log('Inside function');
  console.log(s);
}

console.log(s); // 引发error Uncaught ReferenceError: s is not defined
```

- 当前的**执行上下文**。
- **值**和**表达式**在其中"可见"或可被访问到的上下文。
- 如果一个变量或者其他表达式不"在当前的作用域中"，那么它就是不可用的。

```javascript
/**
 * @function scope
 * @description scope 函数中s寻找变量路程
 * 1. 问: scope函数作用域里面有s吗？我需要输出到控制台。
 * 2. 答: scope函数作用域里面没有定义s，你去函数的父作用域里面找找吧。
 * 3. 问: 函数的父作用域(这里是全局作用域)里面有s吗？我们需要输出到控制台。
 * 4. 答: 这里有定义的s，值为declared outside function，拿去吧。
 * 5. 控制台: 输出declared outside function字符串。
 * 
*/
var s = 'declared outside function';

scope();

function scope() {
  console.log('Inside function');
  console.log(s);
}

console.log('Outside function');
console.log(s);
```

- 作用域也可以根据**代码层次**分层，以便**子作用域可以访问父作用域**，通常是指沿着**链式的作用域**查找，而不能从**父作用域引用子作用域**中的**变量**和**引用**。

```javascript
/**
 * @function scope
 * @function retScope 
 * @description scope 返回一个函数，函数里面返回变量str。
 * @description retScope 需要返回的函数。
*/
function scope() {
  var str = "Inside function";
  return function retScope() {
    return str;
  }
}

var scope1 = scope();
scope1();
```

- 当然，一个` Function `将生成一个**闭包**（通常是返回一个函数引用），这个函数引用从外部作用域（在当前环境下）可以访问闭包内部的作用域。

------

### 静态作用域
- 因为JavaScript采用的是词法作用域，**函数的作用域在函数定义的时候就决定了**。
- 而词法作用域相对的是动态作用域，**函数的作用域是在函数调用的时候才决定的**。

```javascript
/**
 * @function f
 * @function b
 * @description 执行f函数，先从f函数内部查找是否有局部变量value
 * 如果没有，就根据书写的位置，查找上面一层的代码，也就是value等于1，所以结果会打印1
*/
var value = 1;

function f() {
  console.log(value);
}

function b() {
  var value = 2;
  f();
}

b();

/**
 * @description 假设JavaScript采用动态作用域
 * 执行f函数，依然是从f函数内部查找是否局部变量value。
 * 如果没有，就从调用函数的作用域，也就是b函数内部查找value变量，所以结果会打印2
 * 但是JavaScript采用的是静态作用域，所以这个例子的结果打印的是1
*/
```

### 动态作用域

- 函数的作用域是在**函数调用的时候才决定的**。

```shell
value=1
function f () {
  echo $value;
}
function b () {
  local value=2;
  f;
}
b
```

------
 
## 全局变量

- **函数内部**可以**直接读取全局变量**。

```javascript
/**
 * @description n 全局变量
 * @function f1 可以读取到全局变量n
*/
var n = 999;

function f1() {
  console.log(n);
}

f1(); // 999
```

------

## 局部变量

- **函数外部**自然无法读取**函数内的局部变量**。

```javascript
function f1() {
  var n = 999;
}

f1();

console.log(n); // Uncaught ReferenceError: n is not defined
```

- 函数内部声明变量的时候，一定要使用`var`命令。如果不用的话，你**实际上声明了一个全局变量**！

```javascript
function f1() {
  n = 999;
}

f1();

console.log(n);
```

------

## 外部读取局部变量 闭包

```javascript
/**
 * @function add 没有用var声明，所以在全局作用域中
 * @description f实际上就是闭包f2函数。
 * 它一共运行了两次，第一次的值是999，第二次的值是1000。
 * 这证明了，函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除。
 * 为什么会这样呢？原因就在于f1是f2的父函数，而f2被赋给了一个全局变量，这导致f2始终在内存中，而f2的存在依赖于f1，
 * 因此f1也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收。
 * 
 * 这段代码中另一个值得注意的地方，就是"add=function(){n+=1}"这一行，
 * 首先在add前面没有使用var关键字，因此add是一个全局变量，而不是局部变量。
 * 其次，add的值是一个匿名函数(anonymous function)，而这个匿名函数本身也是一个闭包，
 * 所以add相当于是一个setter，可以在函数外部对函数内部的局部变量进行操作。
*/
function f1() {
  var n = 999;
  
  add = function() {
    n += 1;
  }

  function f2() {
    console.log(n);
  }

  return f2;
}

var f = f1();

f();

add();

f(); 
```

- 错误写法

```javascript
/**
 * @function add 局部作用域里面函数
 * @description 首先在add前面使用了var关键字，因此add是一个局部变量，而不是全局变量。
*/
function f1() {
  var n = 999;

  var add = function() {
    n += 1;
  }

  function f2() {
    console.log(n);
  }

  return f2;
}

var f = f1();

f();

add(); // Uncaught ReferenceError: add is not defined

f();
```

------


> https://developer.mozilla.org/zh-CN/docs/Glossary/Scope