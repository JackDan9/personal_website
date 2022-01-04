const _wm = new WeakMap();

let _objValue = {name: "jackdan"};
const _objKey = {age: 26};

_wm.set(_objKey, _objValue);
_objValue = null;
console.log(_wm.get(_objKey)); // { name: 'jackdan' }