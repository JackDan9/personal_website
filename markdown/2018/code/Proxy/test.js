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