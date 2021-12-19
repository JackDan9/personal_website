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

- `Size.prototype.add(value)`

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

- `Size.prototype.delete(value)`
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
- `Size.prototype.has(value)`

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
- `Size.prototype.clear()`
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