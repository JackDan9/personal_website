# Class 类

------

| 标题 | 内容 |
| --- | --- |
| 类 | 为什么要引入类? |
| 类的特征 ｜ 类的特征？|
| 类的继承 | 类的继承是什么样的？｜
| super | 为什么要super? |

------

## 为什么要引入类?

- 类本身相当于是面向对象(人类是一个对象，你或者我都是里面的一个实例(instance)，比如说我想给人类增加一个行为=>抛媚眼技能，那如果我一个人一个人去加是不是非常不方便，但是我统一加到类上，就可以解决这个问题)的，我想实现这个，JavaScript怎么处理？看下面示例。

### 传统方法

```javascript
function saySth(content) {
  this.content = content;
}

saySth.prototype.print = function() {
  console.log(this.content);
  return this.content;
}

// 我想生成一个实例，new操作
let saySth1 = new saySth("我是帅哥");
saySth1.print();
// saySth1就是saySth的一个实例，而我增加一个print就是统一的增加到了saySth上
// 我想在Array这个对象上增加一个统一的方法，不仅仅我的Array可以用，其他人的Array也可以用
```

> 备注: 如果想知道new操作干了什么，请看new篇。

### 引入class写法

```javascript
// 错误写法
class saySth {
  this.content = content;
}

// 正确写法
class saySth {
  constructor(content) {
    this.content = content;
  }

}

// 类中的静态方法错误写法
class saySth {
  this.print = () => {
    
  }
}

// 类中的静态方法正确写法
class saySth {
  construtor(content) {
    this.content = content;
  }

  print() {
    return this.content;
  }

  print1() {
    return this.content;
  }
}

let saySth2 = new saySth("我是帅哥");
saySth2.print();
```

- 所以为什么要引入类？首先代码量并没有减少，维护的东西也并没有减少，就是为了更好的理解面向对象或者更好的去维护对象的原型(1. 如果我的原型上面已经这个方法，我新增的原型方法会被覆盖；2. 更加清晰)。

------

## 类的特征

- 它本质还是一个`function`。

```javascript
class saySth {
  construtor(content) {
    this.content = content;
  }

  print() {
    return this.content;
  }

  print1() {
    return this.content;
  }
}

let saySth2 = new saySth("我是帅哥");
saySth2.print();

typeof saySth // "function"
// saySth.prototype指向什么？
saySth === saySth.prototype.constructor;
```

- 它本身就指向构造函数。

```javascript
class saySth {
  construtor(content) {
    this.content = content;
  }

  print() {
    return this.content;
  }

  print1() {
    return this.content;
  }
}
// 相等于
saySth.prototype = {
  construtor(content) {
    this.content = content;
  },

  print() {
    return this.content;
  },

  print1() {
    return this.content;
  },
}
```

- 它可以直接new一个实例。

```javascript
class saySth {
  construtor(content) {
    this.content = content;
  }

  print() {
    return this.content;
  }

  print1() {
    return this.content;
  }
}

var saySth3 = new saySth("我是帅哥");
saySth3.print();
saySth3.print1();
```

------

## 传统方法实现继承extends

-----

## super

- super既可以当作**函数使用**，也可以当作**对象使用**。

```javascript
class Parent {
  construtor() {} // 默认会有，但是建议还是写上，养成习惯
}

class Child extneds Parent {
  construtor() {
    super()
  }
}
```

> JackDan Thinking