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


## Proxy实例的方法

### `get(target, propKey, receiver)`

```javascript
// target --- 目标对象
// propKey --- 属性名/键
// receiver --- proxy实例本身(严格意义上来说，它是操作行为所针对的对象)，Options(可选的)
var _car = {
  _price: 136000
};

console.log(_car._name); // undefined

var _p = new Proxy(_car, {
  get: function(target, propKey) {
    if (propKey in target) {
      return target[propKey];
    } else {
      return ReferenceError("不好意思！你的 " + propKey + " 不存在！");
    }
  }
});

// console.log(_car._name); // undefined
console.log(_car._price); // 136000
console.log(_p._price); // 136000
console.log(_p._name); // ReferenceError: 不好意思！你的_name不存在！
```

```javascript
// 特点
// Proxy get实例方法是会被继承
var _obj = {};
var _p = new Proxy(_obj, {
  get: function(_target, _propKey, _receiver) {
    console.log("拿到: " + _propKey); // 拿到: _name
    return _target[_propKey];
  }
});

var _obj1 = Object.create(_p);
console.log(_obj1._name);
```

- `Object.defineProperty`

```javascript
// get ---- getter函数
var _obj = {};
// 数据描述符: enumerable, writable, configurable, value
// 存取描述符: get, set
console.log(_obj._name); // undefined
Object.defineProperty(_obj, "_name", {
  get() { return "jackdan" },
});

console.log(_obj._name); // jackdan
```

- 实例

```javascript
// 通过代理Proxy的实例方法实现了从末尾位置读取数组的元素
var _arr = [1, 2, 3, 4];
console.log(_arr[-1]); // undefined
console.log(_arr[_arr.length - 1]); 

function _handleArr(_arrParams) {
  var _handler = {
    get(_target, _propKey, _receiver) {
      var _index = Number(_propKey);
      if (_index < 0) {
        _propKey = String(_target.length + _index);
      }
      return Reflect.get(_target, _propKey, _receiver);
    }
  };

  // var _target = [];
  // _target.push(...params);
  return new Proxy(_arrParams, _handler);
}

var _arr1 = _handleArr(_arr);
console.log(_arr1[-2]); // 3
```

```javascript
// DOM 对象
var _handleDom = new Proxy({}, {
  get: function(_target, _propKey) {
  // get(_target, _propKey) {
    return function(_attrs = {}, ..._children) {
      var _el = document.createElement(_propKey); // ReferenceError: document is not defined
      for(let _attrItem of Object.keys(_attrs)) {
        _el.setAttribute(_propKey, _attrs[_attrItem]);
      }
      for(let _child of _children) {
        if(typeof _child === 'string') {
          _child = document.createTextNode(_child);
        }
        _el.appendChild(_child);
      }
      return _el;
    }
  }
});

var _el = _handleDom.div({}, '你好！我的名字是', _handleDom.a({href: 'www.baidu.com'}, "超链接"), '. 我喜欢');
console.log(_el)
```

```javascript
var _p = new Proxy({}, {
  get: function(_target, _propKey, _receiver) {
    return _receiver;
  }
});

console.log(_p);
console.log(_p.getReceiver);
console.log(_p.getReceiver === _p); // true
console.log(_p.a === _p);

var _p1 = Object.create(_p);
console.log(_p1.a === _p); // false
console.log(_p1.a === _p1); // true
```

### `set(taget, propKey, value, receiver)`

- 拦截对象某个属性的赋值操作

```javascript
// var _car 
// target 目标对象
// propKey 属性名/键
// value 属性值/键值
// receiver Proxy实例本身
var _p = new Proxy({}, {
  set: function(_target, _propKey, _value, _receiver) {
    if(_propKey === '_price') {
      if (!Number.isInteger(_value)) {
        throw new TypeError(_value + "不是一个合法的整数值！");
      }
      if (_value >= 20000000) {
        throw new RangeError(_value + "我买不起！");
      }
    }
  }
});

_p._price = 1;
// _p._price = 'a'; // throw new TypeError(_value + "不是一个合法的整数值！");
// _p._price = 20000000000; // RangeError: 20000000000我买不起！
```

```javascript
var _obj = {};
Object.defineProperty(_obj, "_price", {
  value: 136000,
  writable: false
});

// 'use strict'
var _handler = {
  set: function(_target, _propKey, _value, _receiver) {
    _obj[_propKey] = _value;
    return true;
  }
};

var _p = new Proxy(_obj, _handler);
_p._price = 126000; // TypeError: 'set' on proxy: trap returned truish for property '_price' which exists in the proxy target as a non-configurable and non-writable data property with a different value
console.log(_p._price);
```

```javascript
'use strict';

var _p = new Proxy({}, {
  set: function(_target, _propKey, _value, _receiver) {
    // return false;
    // return null;
    // return undefined;
    // return 0;
    // return '';
  }
})

_p._a = 1; // TypeError: 'set' on proxy: trap returned falsish for property '_a'
```

```javascript
var _p = new Proxy({}, {
  set: function(_target, _propKey, _value, _receiver) {
    _target[_propKey] = _receiver;
    return true;
  }
});

var _obj = {};
Object.setPrototypeOf(_obj, _p);

_obj._price = 1360000;
console.log(_obj);
console.log(_obj._price);
console.log(_obj._price === _obj); // true
// 本身上面没有找到 -> 原型对象上去找 ... -> null 
// 第一步: 我们设置_obj的_price属性值，但是_obj并没有_price属性,它会继续去原型链上找_price.
// _p有一个set方法，_price就会触发set方法，receiver指向原始赋值行为所在的对象，_obj
```

### `apply(target, object, args)`

```javascript
// target 目标对象
// object 
// args 
var _targetFunc = function() {
  return "我叫JackDan1!"
}
var _handler = {
  apply: function(_target, _object, _args) {
    return "我叫JackDan!"
  }
}

console.log(_targetFunc()); // 我叫JackDan1!

var _p = new Proxy(_targetFunc, _handler);
console.log(_p); // [Function: _targetFunc]
console.log(_p()); // 我叫JackDan!
```

```javascript
var _sum = function(_a, _b) {
  return _a + _b;
}

var _p = new Proxy(_sum, {
  apply: function(_target, _object, _args) {
    console.log(_target); // [Function: _sum]
    console.log(_object); // undefined 目标对象的上下文对象(this) null
    console.log(_args); // [ 1, 2 ] 目标对象的参数数组
    return Reflect.apply(...arguments) * 3;
  }
});

// console.log(_p(1, 2)); // 3 * 3 = 9
console.log(_p.call(null, 5, 6)); // 11 * 3 = 33
console.log(_p.apply(null, [3, 4])); // 7 * 3 = 21
```