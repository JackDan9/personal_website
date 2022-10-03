var obj = {};

var obj1 = Object.preventExtensions({
    a: 1
});

console.log(Object.isExtensible(obj1)); // false

var proxy = new Proxy(obj, {
  isExtensible: function(target) {
    console.log("target called"); // OK
    return NaN; // TypeError: 'isExtensible' on proxy: trap result does not reflect extensibility of proxy target (which is 'true')
  }
});

// 注意点(强限制点): 我的拦截器`isExtensible`返回值必须与我的目标对象的`isExtensible`属性保持一致
console.log(Object.isExtensible(proxy)); // TypeError: 'isExtensible' on proxy: trap result does not reflect extensibility of proxy target (which is 'false')

