const _s = new Set([{name: 'JackDan', age: 26}, {name: 'JackDan', age: 26}]);
// console.log(_s.keys()); // Set Iterator] {  }
for(let _sKey of _s.keys()) {
  console.log(_sKey); // { name: 'JackDan', age: 26 }
}
console.log(_s.values()); // 
// [Set Iterator] {
//   { name: 'JackDan', age: 26 },
//   { name: 'JackDan', age: 26 }
// }
for(let _sValue of _s.values()) {
  console.log(_sValue);
}