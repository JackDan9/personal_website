# new

## new的实现

### new的模拟过程

- new运算的具体执行过程：
- MDN:
- 1. 创建一个空的简单JavaScript对象（即{}）；
- 2. 为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
- 3. 将步骤1新创建的对象作为this的上下文 ；
- 4. 如果该函数没有返回对象，则返回this

- 1)创建一个空对象
- 2)把这个空对象的__proto__指向构造函数的prototype
- 3)把这个空对象赋值给this
- 4)执行构造函数内的代码，注意此时的this指向新对象，this.n=9999 等价于b.n=9999;

```javascript
var c = new C();

var c = function() {
  var o = new Object();
  //第一个参数改变函数的作用域，即相当于在函数内部设置this = o
  C.apply(o, arguments);
  return o;
}
```

```javascript
var A = {
  n: 9999;
}

var B = {

}
```

## 示例

```javascript
function A() {
  this.do = function() {
    return 'foo';
  };
}

A.prototype = function() {
  this.do = function() {
    return 'bar';
  }
}

var x = new A().do();
console.log(x);

// 换种写法
function A() {
  this.do = function() {
    return 'foo';
  };
}

A.prototype = function() {
  this.do = function() {
    return 'bar';
  }
}

var x = new A();
console.log(x.do());
```