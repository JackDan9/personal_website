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