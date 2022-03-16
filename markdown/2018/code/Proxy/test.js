var _obj = {};

// Object.preventExtensions(_obj);

// Object.defineProperty(_obj, '_a', {
//   // writable: false,
//   configurable: false
// })

var _p = new Proxy(_obj, {
  defineProperty: function(_target, _propKey, _propDesc) {
    console.log("_propDesc:", _propDesc);
    _target[_propKey] = _propDesc.value;
    return false;
  }
});

// _p._a = 1;
_p._b = 2;
console.log(_p);

// 如果我的目标对象的某个属性被我设置成不可写或者不可配置的时候，我们改写这个值是不生效或者说是我们用`defineProperty()`方法是不得改变设置的这些属性。
// preventExtensions()的时候，目标对象是不可扩展的，我可以用defineProperty()的操作，但是其实它是不生效的或者说是没有意义的