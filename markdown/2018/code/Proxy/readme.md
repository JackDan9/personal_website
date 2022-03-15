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

### `has(target, propKey)`

- 想去拦截**判断对象里面是否具有某个属性时的操作**，这个时候has()就派上用场。
- 额外知识点: 典型的判断对象里面是否具有某个属性的操作运算符就是`in`

```javascript
var _obj = {
  _a: 1,
  a: 2,
}

console.log('_a' in _obj); // true
console.log('b' in _obj); // false
// in运算符 -> 判断对象中是否存在某个属性

var _p = new Proxy(_obj, {
  has: function(target, propKey) {
    console.log(propKey); // _a
    if (propKey[0] === '_') {
      console.log("propKey[0]", propKey[0]); // _
      return false;
    }
    return true;
  }
});

console.log('_a' in _p); // false
```

- `hasOwnProperty`

- 判断对象中的属性是对象自身的属性还是继承的属性

```javascript
var _obj = {
  _a: 1,
  a: 2
}

var _obj2 = Object.create(_obj);

_obj2.b = 2;
_obj2._b = 3;


// console.log(_obj2); // { b: 2, _b: 3 }
// console.log('_a' in _obj2);  // true

var _p = new Proxy(_obj2, {
  has: function(target, propKey) {
    console.log(target);
    // if (propKey[0] === '_') {
    //   console.log(propKey);
    //   return false;
    // }
    // return true;
    return propKey in target;
  }
});

var _p1 = new Proxy(_obj, {
  has: function(target, propKey) {
    console.log(_obj);
    // if()
    // if (propKey[0] === '_') {
    //   console.log(propKey);
    //   return false;
    // }
    // return true;
    return propKey in target;
  }
});

// console.log(_p);
// console.log('_a' in )
// console.log('_a' in _obj2); // true
console.log('_a' in _p); // false
// 我不去判断你是否是继承的属性，没有HasOwnProperty操作的拦截，而是只是HasProperty操作的拦截
console.log('_a' in _p1); // false

// console.log(_obj2.hasOwnProperty('_a')); // false
// console.log(_p.hasOwnProperty('_a')); // false
// console.log(_obj.hasProperty('_a')); // 没有hasProperty的方法
```

- 不可扩展或者不可配置的对象，是否还可以进行has拦截 

```javascript
var _obj = {
  _a: 1
};
Object.preventExtensions(_obj); // 变成不可扩展的

var _p = new Proxy(_obj, {
  has: function(_target, _propKey) {
    return false;
  }
});

console.log('_a' in _p); // false 
// 变成不可扩展的时候
console.log('_a' in _p); // TypeError: 'has' on proxy: trap returned falsish for property '_a' but the proxy target is not extensible
```

```javascript
var _obj = {
  _a: 1
};

Object.defineProperty(_obj, '_a', {
  // writable: false,
  configurable: false
});


var _p = new Proxy(_obj, {
  has: function(_target, _propKey) {
    return _propKey in _target;
  }
});

console.log('_a' in _obj); // true
console.log('_a' in _p); /// true
// console.log('_a' in)
```

- `in`存在拦截操作，`for...in`循环操作符存不存在has的拦截


## `construct(target, args)`: 拦截Proxy实例对象作为`构造函数调用`的操作

- 作为构**造函数调用**的操作将会被Proxy实例对象所拦截
- 什么是否才会存在构造函数的调用？`new`的操作就是构造函数的调用

```javascript
// var _obj = {}; // 本身的空对象作为目标对象有没有什么问题 有，TypeError: _p is not a constructor
// construct()方法目标对象必须要是一个函数，而不是简单的对象，是因为construct()方法拦截的是构造函数
var _obj = function() {};
var _p = new Proxy(_obj, {
  construct: function(_target, _args) {
    // _target是我们的目标对象
    // _args并不是像我们在apply拦截方法里面的目标对象的上下文
    // _args构造函数的参数数组
    console.log("调用: " + _args); // 调用: 1，_args传递到_proxy里面的参数
    console.log("参数: ", _args[10]); // undefined
    console.log("参数0:", _args[0]); // 1
    return {
      _a: _args[0] * 2
    }; // OK
    // return _args; // OK
    // return _args[0]; // TypeError: 'construct' on proxy: trap returned non-object ('1')
  }
});

// 如果我返回不是一个对象
console.log(_p); // [Function: _obj]
console.log(_p(1)); // undefined
// console.log((new _p(1)));  // TypeError: _p is not a constructor // new 操作符作为construct构造函数的操作
// console.log((new _p(1))._a); // new 操作符操作过后的实例(instance)对象，实例对象里面的一个属性

// construct()方法返回的必须是一个对象，否则会报错 // TypeError: 'construct' on proxy: trap returned non-object ('1')
```


```javascript
var _funcObj = function() {};
var _handler = {
  construct: function(_target, _args) {
    console.log(this); // { construct: [Function: construct] }
    console.log(_handler); // { construct: [Function: construct] }

    console.log(this == _handler); // true
    console.log(this === _handler); // true
    return new _target(..._args);
  }
}
var _p = new Proxy(_funcObj, _handler);
new _p();
// console.log(new _p());

// 构造函数拦截方法construct方法中的this指向的是_handler本身，而不是我的实例对象
```

------

## `deleteProperty(target, propKey)`: 拦截去删除Proxy里面指定的propKey的操作，返回一个布尔值

```javascript
var _obj = {
  _a: 1,
  a: 2
};

var judgeKey = function(_key, _action) {
  if(_key[0] === '_') {
    throw new Error(`首字母为'_'的删除${_action}是不允许的`)
  }
}

var _p = new Proxy(_obj, {
  deleteProperty: function(_target, _propKey) {
    judgeKey(_propKey, 'delete');
    delete _target[_propKey];
    return true;
  }
});

console.log("_obj: ", _obj); // { _a: 1, a: 2 }
console.log("_p: ", _p); // { _a: 1, a: 2 }
console.log(_p == _obj); // false
console.log(_p === _obj); // false
// delete _p._a; // Error: 首字母为'_'的删除delete是不允许的
delete _p.a; // 允许的
console.log(_p); // { _a: 1 }
console.log(_obj); // { _a: 1 }
```

```javascript
var _obj = {
  _a: 1
};

Object.defineProperty(_obj, '_a', {
  // writable: false,
  configurable: false
});

var _p = new Proxy(_obj, {
  deleteProperty: function(_target, _propKey) {
    delete _target[_propKey];
    return true;
  }
});

// delete _p._a // TypeError: 'deleteProperty' on proxy: trap returned truish for property '_a' which is non-configurable in the proxy target
// console.log(delete _p._a); // true 
console.log(_p);
console.log(_obj);
```

- 目标对象自身的属性(Property)是不可配置的，不是被deleteProperty方法删除，硬要删除，对不起，你将得到一个错误。