class Person {
  constructor() {

  }
}

class Person1 extends Person {
  constructor() {

  }
}

console.log(Person1.__proto__ === Person);
// Person1.prototype = new Person();
console.log(Person1.prototype.__proto__ === Person.prototype);