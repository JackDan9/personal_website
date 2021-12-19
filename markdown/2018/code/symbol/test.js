// let _replace = Symbol.replace;
let _obj = {};
_obj[Symbol.replace] = (..._s) => {
  console.log(_s);
}
// String.prototype.replace()
console.log('Hello'.replace(_obj, 'Jackdan!')); // [ 'Hello', 'Jackdan!' ]
console.log('Hello'.replace(_obj, 'Jackdan!')); // Hello 