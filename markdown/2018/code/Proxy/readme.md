# Proxy - 代理
## 介绍

- 在我们目标对象之前设置一层拦截器，如果我们对这个对象进行访问，都会经过这个拦截器(自定义操作)，对外界去访问目标对象进行了改造(过滤或者改写)

```javascript
// 拦截器_p针对于_obj进行一层拦截
let _obj = {};
let _p = new Proxy(_obj, {
  get: function(_target, _propKey, _receiver) {
    console.log('_p get: ', _target, _propKey, _receiver);
    return Reflect.get(_target, _propKey, _receiver); 
    // Reflect 其实JavaScript内置的一个对象，它提供拦截JavaScript操作的方法
    // 注意点: Reflect并不是一个函数对象，因此它是不可以构造的
  },
  set: function(_target, _propKey, _value, _receiver) {
    console.log('_p set: ', _target, _propKey, _value, _receiver);
    return Reflect.set(_target, _propKey, _value, _receiver);
  }
});

_p._a = 1;
_p._b = 2;
console.log(_p);
console.log(_p._a);
```

```javascript
// Object.defineProperty() ES5
// 在我们的目标对象上面定义新的属性或者说是修改现有的属性，并且返回这个对象

// Object.defineProperty(obj, PropertyKey, descriptor);
// obj: 目标对象
// PropertyKey: 要定义新的属性或者要修改的属性的名称
// descriptor: 定义新的属性或者要修改的属性的描述
let _obj = {};
_obj._a = 1;
Object.defineProperty(_obj, "_a", {
  // _b: 1 // 其实不会报错，但是没有意义，因为我们的descriptor又一定约束
  // configurable?: boolean;
  // enumerable?: boolean;
  // value?: any;
  // writable?: boolean;
  // get?(): any;
  // set?(v: any): void;
  value: 1,
});

console.log(_obj); // { _a: 1 }
console.log(_obj._a); // 1
console.log(_obj["_a"]); // 1
```

- Proxy其实一个构造函数，用来声明一个Proxy实例

```javascript
let _p = new Proxy(_target, _handler);
// _handler: 对象，用来定制拦截行为的，每一个行为之间用逗号隔开，每一个拦截行为都是行为处理函数

let _obj = {};
let _p1 = new Proxy(_obj, {
  get: function(_target, _propKey) {
    return 1;
  }
});

console.log(_p1._a); // 1
console.log(_p1._b); // 1
console.log(_p1._c); // 1
console.log(_p1._d); // 1
console.log(_obj._a); // undefined
console.log(_obj._b); // undefined
console.log(_obj._c); // undefined
console.log(_obj._d); // undefined
```

```javascript
let _obj = {};
let _p1 = new Proxy(_obj, {
});

// 当我没有拦截行为的时候，我的proxy实例对象就是我的目标对象，只不过这是会多此一举的操作
_p1._a = 1;
console.log(_p1._a); // 1
console.log(_obj._a); // 1
```

```javascript
let _obj = {};
let _p = new Proxy(_obj, {
  get: function(_target, _handler) {
    return 1;
  }
});

let _obj1 = Object.create(_p); // Proxy实例是可以作为其他对象的原型对象
console.log(_obj1); // {}
console.log(_obj1._a); // 1 会从原型链去找到_p上，_p对象有一个拦截行为，返回1

let _obj = {proxy: new Proxy(_target, _handler)};

// 我可以在_obj对象直接点用proxy(_obj.proxy)进行拦截器的操作
```

- 有多少种操作是支持拦截行为/拦截处理函数的了，13种
- `get(target, propKey, receiver)`: 拦截对象属性的获取/读取
- `set(taget, propKey, value, receiver)`: 拦截对象属性的设置
- `has(target, propKey)`: 拦截propKey 是否在 Proxy里面，返回一个布尔值
- `apply(target, object, args)`: 拦截Proxy实例作为函数调用的操作
- `construct(target, args)`: 拦截Proxy实例对象作为构造函数调用的操作
- `deleteProperty(target, propKey)`: 拦截去删除Proxy里面指定的propKey的操作，返回一个布尔值
- `ownKeys(target)`: 拦截Proxy中的keys，返回一个数组`Object.getOwnPropertyNames(), Object.getOwnPropertySymbols(), Object.keys(), for...in`，目标对象target所有自身的属性的属性
- `getOwnPropertyDescriptor(target, propKey)`: 拦截`Object.getOwnPropertyDescriptor(Proxy, propKey)`, 返回属性的描述对象 
- `defineProperty(target, propKey, propDesc)`: 拦截`Object.defineProperty(Proxy, propKey, propDesc), Object.defineProperties(Proxy, propDescs)`, 返回是一个布尔值
- `preventExtensions(target)`: 拦截`Object.preventExtensions(Proxy)`, 返回一个布尔值
- `getPrototypeOf(target)`: 拦截`Object.getPrototypeOf(Proxy)`，返回是一个对象。
- `setPrototpeOf(target, proto)`: 拦截`Object.setPrototypeOf(Proxy, proto)`，返沪一个布尔值
- `isExtensible(target)`: 拦截`Object.isExtensible(Proxy)`，返回一个布尔值
