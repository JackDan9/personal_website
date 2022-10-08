var obj = {
    c: 3
};
var a = Symbol("a");
var b = Symbol.for("b");

obj[a] = 1;
obj[b] = 2;

console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(a), Symbol(b) ]
console.log(Object.getOwnPropertyNames(obj)); // [ 'c' ]
console.log(Object.keys(obj)); // ['c']
console.log(Reflect.ownKeys(obj)); // [ 'c', Symbol(a), Symbol(b) ]
for(var _key in obj) {
    console.log(_key); // c
}