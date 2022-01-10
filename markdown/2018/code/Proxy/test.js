let _obj = {};
let _p = new Proxy(_obj, {
  get: function(_target, _handler) {
    return 1;
  }
});

let _obj1 = Object.create(_p);
console.log(_obj1); // {}
console.log(_obj1._a); // 1