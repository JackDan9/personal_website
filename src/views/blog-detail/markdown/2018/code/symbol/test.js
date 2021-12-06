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