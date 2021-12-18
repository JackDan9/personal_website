let _obj = {};

_obj.name = {
  _a: Symbol('a'),
  _b: Symbol('a'),
  _c: Symbol('a')
};

console.log(_obj);
console.log(_obj.name._a == _obj.name._b);