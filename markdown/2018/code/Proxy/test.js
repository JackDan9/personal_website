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
