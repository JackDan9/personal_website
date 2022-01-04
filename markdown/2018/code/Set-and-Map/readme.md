# Set and Map

## Set

- 它是一个新的数据结构，有点类似于数组Array，但是Set数据结构的每一个成员都是不能够重复的，也就是唯一的

```javascript
const _s = new Set();

[1, 2, 3, 4, 5, 2, 3, 4, 6].forEach(x => _s.add(x));

for(let _sItem of _s) {
  console.log(_sItem); // 1 2 3 4 5 6
}
```

```javascript
const _a = [1, 2, 3, 1, 2, 3, 4, 1, 2];
// [1, 2, 3, 4]
// const _as = new Set(_a);
const _as = [...new Set(_a)];
console.log(_as); // Set { 1, 2, 3, 4 }
```

```javascript
const _s = new Set();
let _a = NaN;
let _b = NaN;
_s.add(_a);
_s.add(_b);

console.log(_s); // Set { NaN }

let _obj = {};
let _obj1 = {};


console.log(_obj == _obj1);
console.log(_obj === _obj1);
_s.add(_obj);
_s.add(_obj1);

console.log(_s); // Set { NaN, {}, {} }
```

## Set方法

```javascript
const _a = [1, 2, 3];
// console.log(_a.length());
console.log(_a.length);

const _s = new Set();
// console.log(_s.size()); // TypeError: _s.size is not a function
console.log(_s.size); // 0 返回Set数据结构中的成员总数 

const _s1 = new Set();
[1, 2, 3, 4, 5, 2, 3, 4, 6].forEach(x => _s1.add(x));
console.log(_s1.size); // 6
```

- `Set.prototype.add(value)`

```javascript
const _s = new Set();
_s.add(1);
_s.add(2);

console.log(_s); // Set { 1, 2 }

_s.delete(1); 

console.log(_s); // Set { 2 }

console.log(_s.has(1)); // false
console.log(_s.has(2)); // true

console.log(_s.clear); // [Function: clear]
_s.clear()
// console.log(_s.clear()); // undefined
console.log(_s); // Set {}
```

- `Set.prototype.delete(value)`
```javascript
const _s = new Set();
_s.add(1);
_s.add(2);

console.log(_s); // Set { 1, 2 }

_s.delete(1); 

console.log(_s); // Set { 2 }

console.log(_s.has(1)); // false
console.log(_s.has(2)); // true

console.log(_s.clear); // [Function: clear]
_s.clear()
// console.log(_s.clear()); // undefined
console.log(_s); // Set {}
```
- `Set.prototype.has(value)`

```javascript
const _s = new Set();
_s.add(1);
_s.add(2);

console.log(_s); // Set { 1, 2 }

_s.delete(1); 

console.log(_s); // Set { 2 }

console.log(_s.has(1)); // false
console.log(_s.has(2)); // true

console.log(_s.clear); // [Function: clear]
_s.clear()
// console.log(_s.clear()); // undefined
console.log(_s); // Set {}
```
- `Set.prototype.clear()`
```javascript
const _s = new Set();
_s.add(1);
_s.add(2);

console.log(_s); // Set { 1, 2 }

_s.delete(1); 

console.log(_s); // Set { 2 }

console.log(_s.has(1)); // false
console.log(_s.has(2)); // true

console.log(_s.clear); // [Function: clear]
_s.clear()
// console.log(_s.clear()); // undefined
console.log(_s); // Set {}
```

- `Set.prototype.keys()`

```javascript
const _s = new Set(['a', 'b', 'c', 'd']);
console.log(_s.keys()); // [Set Iterator] { 'a', 'b', 'c', 'd' }
for(let _sKey of _s.keys()) {
  console.log(_sKey); // a b c d
}
console.log(_s.values()); // [Set Iterator] { 'a', 'b', 'c', 'd' }
for(let _sValue of _s.values()) {
  console.log(_sValue); // a b c d
}

console.log(_s.entries()); 
// [Set Entries] {
//   [ 'a', 'a' ],
//   [ 'b', 'b' ],
//   [ 'c', 'c' ],
//   [ 'd', 'd' ]
// }

_s.forEach((key, value) => console.log(key + ' + ' + value));
// a + a
// b + b
// c + c
// d + d
```
- `Set.prototype.values()`

```javascript
const _s = new Set(['a', 'b', 'c', 'd']);
console.log(_s.keys()); // [Set Iterator] { 'a', 'b', 'c', 'd' }
for(let _sKey of _s.keys()) {
  console.log(_sKey); // a b c d
}
console.log(_s.values()); // [Set Iterator] { 'a', 'b', 'c', 'd' }
for(let _sValue of _s.values()) {
  console.log(_sValue); // a b c d
}

console.log(_s.entries()); 
// [Set Entries] {
//   [ 'a', 'a' ],
//   [ 'b', 'b' ],
//   [ 'c', 'c' ],
//   [ 'd', 'd' ]
// }

_s.forEach((key, value) => console.log(key + ' + ' + value));
// a + a
// b + b
// c + c
// d + d
```
- `Set.prototype.entries()`

```javascript
const _s = new Set(['a', 'b', 'c', 'd']);
console.log(_s.keys()); // [Set Iterator] { 'a', 'b', 'c', 'd' }
for(let _sKey of _s.keys()) {
  console.log(_sKey); // a b c d
}
console.log(_s.values()); // [Set Iterator] { 'a', 'b', 'c', 'd' }
for(let _sValue of _s.values()) {
  console.log(_sValue); // a b c d
}

console.log(_s.entries()); 
// [Set Entries] {
//   [ 'a', 'a' ],
//   [ 'b', 'b' ],
//   [ 'c', 'c' ],
//   [ 'd', 'd' ]
// }

_s.forEach((key, value) => console.log(key + ' + ' + value));
// a + a
// b + b
// c + c
// d + d
```
- `Set.prototype.forEach()`

```javascript
const _s = new Set(['a', 'b', 'c', 'd']);
console.log(_s.keys()); // [Set Iterator] { 'a', 'b', 'c', 'd' }
for(let _sKey of _s.keys()) {
  console.log(_sKey); // a b c d
}
console.log(_s.values()); // [Set Iterator] { 'a', 'b', 'c', 'd' }
for(let _sValue of _s.values()) {
  console.log(_sValue); // a b c d
}

console.log(_s.entries()); 
// [Set Entries] {
//   [ 'a', 'a' ],
//   [ 'b', 'b' ],
//   [ 'c', 'c' ],
//   [ 'd', 'd' ]
// }

_s.forEach((key, value) => console.log(key + ' + ' + value));
// a + a
// b + b
// c + c
// d + d
```

```javascript
const _s = new Set([{name: 'JackDan', age: 26}, {name: 'JackDan', age: 26}]);
// console.log(_s.keys()); // Set Iterator] {  }
for(let _sKey of _s.keys()) {
  console.log(_sKey); // { name: 'JackDan', age: 26 }
}
console.log(_s.values()); // 
// [Set Iterator] {
//   { name: 'JackDan', age: 26 },
//   { name: 'JackDan', age: 26 }
// }
for(let _sValue of _s.values()) {
  console.log(_sValue);
}
```

## WeakSet

### WeakSet与Set区别
- 1. WeakSet可以接受一个数组或者类似于数组的对象作为参数。(作为具有iteratable接口的对象，都是可以作为WeakSet参数);

```javascript
const _arr = [1, 2, 3, 4];
const _arr1 = [[1, 2, 3,4]];
// const _ws = new WeakSet(_arr); // TypeError: Invalid value used in weak set
const _ws1 = new WeakSet(_arr1);
```

### WeakSet方法与Set

- `WeakSet.prototype.add()` 新添一个成员到WeakSet
- 新增加的成员只能是一个对象，不能是其他类型

```javascript
const _ws = new WeakSet();
_ws.add([1, 2, 3, 4]);
console.log(_ws);
// _ws.add(1); // TypeError: Invalid value used in weak set
// _ws.add('a'); // TypeError: Invalid value used in weak set
// _ws.add(Symbol()); // TypeError: Invalid value used in weak set
// _ws.add(null); // TypeError: Invalid value used in weak set
// _ws.add(undefined); // TypeError: Invalid value used in weak set
// _ws.add(true); //TypeError: Invalid value used in weak set
_ws.add({name: 'junjun'});
_ws.add(function print() { console.log("junjun") });
```

- `WeakSet.prototype.delete()`将成员进行清除处理

```javascript
const _obj = {name: "junjun"};
const _ws = new WeakSet();
_ws.add(_obj);
// _ws.delete(_obj);
// _ws.clear(); // TypeError: _ws.clear is not a function 不可以去清空
console.log(_ws.has(_obj));
// 也不可以对它进行遍历
// console.log(_ws.keys()); // TypeError: _ws.keys is not a function
// console.log(_ws.values()); // TypeError: _ws.keys is not a function
```

- `WeakSet.prototype.has()`判断是否拥有一个成员

```javascript
const _obj = {name: "junjun"};
const _ws = new WeakSet();
_ws.add(_obj);
// _ws.delete(_obj);
// _ws.clear(); // TypeError: _ws.clear is not a function 不可以去清空
console.log(_ws.has(_obj));
// 也不可以对它进行遍历
// console.log(_ws.keys()); // TypeError: _ws.keys is not a function
// console.log(_ws.values()); // TypeError: _ws.keys is not a function
```

### WeakSet中的对象或者说成员都是弱引用
- 不会被垃圾回收机制所识别。
- 做一些临时记录，对内存回收机制不产生影响的记录。

```javascript
// malloc calloc free 
let _obj = {name: 'junjun'}; // 强引用
let _obj1 = _obj; // 强引用 与实际的值建立连接断掉了，

let _ws = new WeakSet();
_ws.add(_obj1); // 弱引用 也同时断掉

// _obj = null; // 在node和chrome 浏览器中都没有办法释放掉
delete _obj1.name;
// _obj1 = null;
console.log(_ws);
console.log(_obj);
console.log(_obj1);
```

## Map

```javascript
const _obj = {} // 是健值对的集合，健只能用字符串当作健，我想用非字符串的值去作为健，在_obj里面就没办法做到
// _obj._key1 = 1;
// const _key1 = 'key1';
// _obj[_key1] = 1; // ReferenceError: _key1 is not defined
// _obj['_key1'] = 1;
// console.log(_obj);

const _arr = [1, 2, 3];
const _arr1 = [{name: "Jackdan"}]; // Object[]
// const _domElement = document.getElementById("_myId");
_obj[_arr] = 'arr';
_obj[_arr1] = 'arr1';
console.log(_obj); // { '1,2,3': 'arr', '[object Object]': 'arr1' }
console.log(_obj['1,2,3']); // arr
console.log(_obj[_arr]); // arr
```

```javascript
const _m = new Map();
// _m._key1 = 1; // map数据结构本身并没有新增一个值进去
// console.log(_m); // Map(0) { _key1: 1 }
// console.log(_m.get('_key1')); // undefined
// console.log(_m.get(_key1)); // ReferenceError: _key1 is not defined


const _o = {};
const _objKey = {name: "Jackdan"};

_o[_objKey] = 'set name';
console.log(_o); // { '[object Object]': 'set name' }
console.log(_o[_objKey]); // set name

_m.set(_objKey, 'set name');
console.log(_m); // Map(1) { { name: 'Jackdan' } => 'set name' }
// console.log(_m[_objKey]); // undefined
console.log(_m.get(_objKey)); // set name

// Object 本身是`字符串到(:)值`
// Map 本身是`值到(=>)值`
// 如果你需要用到健值对的时候，再不确定你的健会是什么的时候，这个时候Map更加适合了
// Map 更完善的Hash结构实现 了解就可以了
```

```javascript
// 作为构造函数的参数，不仅仅是数组，如果你具有Iterator属性并且还要满足成员都是一个双元素数组的数据结构

const _s = new Set([
  [1, 2],
  [1, 2]
]);

const _s1 = new Set([
  [1, 2],
  [3, 4]
]);

const _m6 = new Map(_s);
const _m7 = new Map(_s1);
console.log(_m6); // Map(1) { 1 => 2 }
console.log(_m7); // Map(2) { 1 => 2, 3 => 4 }


// const _m = new Map([1,2,3]); // TypeError: Iterator value 1 is not an entry object
// const _m = new Map(1); // TypeError: number 1 is not iterable (cannot read property Symbol(Symbol.iterator))
const _m = new Map([
  [1, 2],
  [3, 4]
]);

const _m1 = new Map([
  [1, 2, 3],
  [4, 5, 6]
]);

const _m2 = new Map([
  [1, 2, 3, 4],
  [5, 6, 7, 8]
]);

const _m3 = new Map([
  [1],
  [2]
]);

const _m4 = new Map([
  ["name", "JackDan"],
  ["age", 26]
]);

const _arr = [
  ["name", "JackDan"],
  ["age", 26]
];


const _m5 = new Map();

_arr.forEach(([_k, _v]) => {
  _m5.set(_k, _v);
});

// 接收一个二维数组，二维数组中的元素也是数组，元素数组中的前两位值作为map的key和value
console.log(_m); // Map(2) { 1 => 2, 3 => 4 }
console.log(_m1); // Map(2) { 1 => 2, 4 => 5 }
console.log(_m2); // Map(2) { 1 => 2, 5 => 6 }
console.log(_m3); // Map(2) { 1 => undefined, 2 => undefined }
console.log(_m4); // Map(2) { 'name' => 'JackDan', 'age' => 26 }
console.log(_m4.size); // 2
console.log(_m4.has("name")) // true
console.log(_m4.has("name1")) // false
console.log(_m5); // Map(2) { 'name' => 'JackDan', 'age' => 26 }
console.log(_m5.size); // 2
console.log(_m5.has("name")) // true
console.log(_m5.has("name1")) // false
console.log(_m4 == _m5); // false
console.log(_m4 === _m5); // false
```

```javascript
const _obj = {}
_obj.key1 = 1;
_obj.key1 = 2;
console.log(_obj); // { key1: 2 }


const _m = new Map();
_m.set(3, "4");
_m.set(3, "3");

console.log(_m); // Map(1) { 3 => '3' }
```

```javascript
const _m = new Map();

const _arr = ["name"];
const _arr1 = ["name"];

_m.set(_arr, "Jackdan");

console.log(_m.get(_arr)); // Jackdan
// _arr 和 ["name"]表面上是针对于同一个健，但是实际上它们两个是不同的数组实例，内存地址不一样，所以说Map get方法并不能获取内存地址不一样的健的值，返回了undefined
console.log(_arr == ["name"]); // false
console.log(_arr === ["name"]); // false
console.log(_m.get(["name"])); // undefined

// console.log(_m.get(1)); // undefined
// console.log(_m.get('a')); // undefined
```

```javascript
// Map健实际上它是内存地址绑定的，只要内存地址不一样，就指定了你的健不是一样的
// 如果内存地址是一样的两个值作为健，其实他们是一样的
const _m = new Map();
_m.set(-0, 1);
console.log(_m); // Map(1) { 0 => 1 }
console.log(_m.get(0)); // 1
console.log(_m.get(+0)); // 1

console.log(NaN == NaN); // false


// true "true" 'true'
// undefined null
// NaN 在Map当中把它视为同一个健
```

## WeakMap


```javascript
// 生成健值对的集合
const _wm = new WeakMap();

const _key = { name: "Jackdan" } 
_wm.set(_key, 1);
console.log(_wm);

const _wm1 = new WeakMap([
  [[1, 2], 2],
  [[3, 4], 4]
])

const _wm2 = new WeakMap([
  [1, 2],
  [3, 4]
])

console.log(_wm2); // TypeError: Invalid value used as weak map key
console.log(_wm1);
```

### 与Map区别

#### 就是WeakMap里面的key必须是一个对象(不能是null)，不允许其他类型的值作为健

```javascript
const _wm = new WeakMap();

// _wm.set(1, 1); // TypeError: Invalid value used as weak map key
// _wm.set(null, 2); // TypeError: Invalid value used as weak map key
// _wm.set(undefined, 3); // TypeError: Invalid value used as weak map key
_wm.set([1, 2, 3], 4);
console.log(_wm); // WeakMap { <items unknown> }
// Symbol
// String
```

#### WeakMap的健所指向的值/对象，是不会被垃圾回收机制识别的，或者不计入垃圾回收机制

```javascript
// const _dom1 = document.getElementById("myDom1");
// const _dom2 = document.getElementById("myDom2");
const _dom1 = [1];
const _dom2 = [2];

const _arr = [
  [_dom1, "myDom1"],
  [_dom2, "myDom2"]
];

// 如果我不去做_dom1和_dom2的销毁，其实在内存这两块开辟的内存空间就一直会被占用，这其实就是内存的浪费/内存的泄露
_arr[0] = null;
_arr[1] = null;

console.log(_arr);
```

```javascript
// 健所引用的值/对象是一个弱引用
// 特点： 如果你不再需要引用，又想让它自动的释放内存资源出来，健以及健引用/指代(=>)值/对象会自动消失，不用考虑手动删除
// 场景：key是对象，又想往这个健去增添数据，又不想被/影响垃圾回收机制，可以使用WeakMap去覆盖

const _wm = new WeakMap();
const _arr = [1];

_wm.set(_arr, 'jackdan');
console.log(_wm.get(_arr)); // jackdan
// WeakMap对健为_arr的引用其实是一个弱引用，不会被计入垃圾回收机制里面
```

```javascript
const _wm = new WeakMap();
const _arr = [1];

_wm.set(_arr, 'jackdan');
// console.log(_wm.has(_arr)); // true
// _wm.delete(_arr);
// console.log(_wm.has(_arr)); 
// console.log(_wm.clear()); // TypeError: _wm.clear is not a function
// console.log(_wm.keys()); // TypeError: _wm.keys is not a function
console.log(_wm.get(_arr)); // jackdan
// WeakMap对健为_arr的引用其实是一个弱引用，不会被计入垃圾回收机制里面
```

```javascript
// WeakMap对健做的一个弱引用，而健值并没有去做弱引用，健值还是可以正常引用
const _wm = new WeakMap();

let _objValue = {name: "jackdan"};
const _objKey = {age: 26};

_wm.set(_objKey, _objValue);
_objValue = null;
console.log(_wm.get(_objKey)); // { name: 'jackdan' }
```

- 操作DOM元素，DOM元素被删除/被清空了，这个时候就不用考虑它了，就可以采用WeakMap
- 作为class类的私有属性的时候，当我们声明的实例消失或者被清除的时候，实例的私有属性也随之消失，这个时候也是可以采用WeakMap