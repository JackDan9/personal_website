const _m = new Map();
_m.set(-0, 1);
console.log(_m); // Map(1) { 0 => 1 }
console.log(_m.get(0)); // 1
console.log(_m.get(+0)); // 1

console.log(NaN == NaN); // false