# Symbol

## 为什么引入Symbol?

```javascript
// A
let _obj = {
  _a: 1
}
console.log(_obj._a); // 1

// B
_obj._a = 2;
console.log(_obj._a); // 2
```

```javascript
// A
let _obj = {
  print: function() {
    console.log(1);
  }
}
_obj.print();
// B
_obj.print = function() {
  console.log(2);
}

_obj.print();
```

- 防止对象属性名相同导致命名冲突的问题。

```javascript
let s = Symbol();

console.log(typeof s); // symbol
```

```javascript
let _obj = {
  _a: 1
}

// _obj.Symbol('_a') = 2; // TypeError: _obj.Symbol is not a function
// . 和 []区别

// B
// _obj['_a'] = 2;
// _obj[Symbol('_a')] = 2;
// _obj._c = 2;
// _obj.Symbol('_a') = 2; // TypeError: _obj.Symbol is not a function

_obj[_c] = 2; // ReferenceError: _c is not defined
let _b = Symbol('_a');
_obj[_b] = 2;

console.log(_obj);
console.log(_obj._a);
```

### Symbol的特点

```javascript
// 由于它生成并不是对象，所以不能添加属性
let _s = Symbol();

// _s.a = 1; // 并没有报错
// _s[b] = 2; 
```

```javascript
let _s = new Symbol(); // 因为生成的Symbol是一个基础数据类型，不是对象

console.log(_s); // TypeError: Symbol is not a constructor
```

- 接受字符串作为参数

```javascript
let _c = Symbol();
let _d = Symbol();
let _a = Symbol('a');
let _b = Symbol('b');

console.log(_a == _b);
console.log(_a === _b);
console.log(_a); // Symbol(a);
console.log(_a.toString()); // Symbol(a) 我们可以去把它转换为一个字符串，显示转换

if(_a) {
  console.log('boolean 类型是true'); // boolean 类型是true
}
```

- 接受一个对象作为参数 

```javascript
let _obj = {
  _a: 1
}

let _s = Symbol(_obj);
console.log(_s); // Symbol([object Object])
console.log(_s._a); // undefined
// console.log(_s[_a]);
console.log(_s['_a']); // undefined
```

- Symbol函数的返回值，这个值不能与其他类型进行计算/运算。

```javascript
let _a = Symbol();
let _b = Symbol('my name is  ');

// console.log(_a + 0); // TypeError: Cannot convert a Symbol value to a number
// console.log(_b + 'jackdan'); // TypeError: Cannot convert a Symbol value to a string
```

### Symbol的描述

- description方法去获取Symbol函数的描述

```javascript
let _a = Symbol('a');

console.log(_a); // Symbol(a)

console.log(_a.toString()); // Symbol(a)
console.log(String(_a)); // Symbol(a)

console.log(_a.description); // a
```

------

## 属性名Symbol

```javascript
// A同学写的
let _obj = {
  a: 1
}

// B同学写的
// _obj[a] = 2; // ReferenceError: a is not defined
_obj.a = 2;

console.log(_obj);
```

- 每一个**Symbol值**都是不相等的


```javascript
let _s = Symbol();

// 第一种写法
let _obj = {};
_obj[_s] = "Hello JackDan!";

// 第二种写法
let _obj1 = {
  [_s]: "Hello JackDan!"
}

// 第三种写法
let _obj2 = {};
Object.defineProperty(_obj2, _s, { value: "Hello JackDan!" }); // 将对象的属性名指定为一个Symbol值，Vue框架是用的非常多，Proxy

console.log(_obj); // { [Symbol()]: 'Hello JackDan!' }
console.log(_obj1); // { [Symbol()]: 'Hello JackDan!' }
console.log(_obj2); // {}
console.log(_obj2[_s]); // 'Hello JackDan!'

console.log(_obj._s); // undefined
// 点运算符后面接的是字符串，Symbol指向的具体值
```

- 作为属性名的symbol，并不能被点运算符获取到，而是要通过[]去获取。

```javascript
// 实例
let _obj = {};

_obj.name = {
  _a: Symbol('a'),
  _b: Symbol('a'),
  _c: Symbol('a')
};

console.log(_obj);
console.log(_obj.name._a == _obj.name._b);
```

- deepCopy
```javascript
```