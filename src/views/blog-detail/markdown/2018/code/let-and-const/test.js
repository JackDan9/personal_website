// freeze:冻结
const _a = Object.freeze({});
_a.name="jackdan"; // TypeError: Cannot add property name, object is not extensible
console.log(_a);