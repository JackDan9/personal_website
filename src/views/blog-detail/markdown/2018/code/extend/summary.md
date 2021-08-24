# extend

## extend原生实现

```javascript
Child.__proto__ = Parent;
Child.prototype.__proto__ === Parent.prototype;
```

```javascript
function Parent(name, age) {
  this.name = name;
  this.age = age;
}

Parent.prototype.print = function() {
  console.log('name:' + this.name + 'age: ' + this.age);
}

function Child(name, age, isYoung) {
  Parent.call(this, name, age);
  this.isYoung = isYoung;
}

var Temp = function() {};

Temp.prototype = Parent.prototype;

Child.prototype = new Temp();
Child.prototype.print = function() {
  console.log('name: ' + this.name + 'age: ' + this.age + 'isYoung: ' + this.isYoung);
}

var child = new Child('jackdan', 26, false);
child.print();
```