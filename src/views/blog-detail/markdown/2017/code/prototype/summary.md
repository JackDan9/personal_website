# JavaScript原型与原型链

| 标题 | 内容 |
| --- | --- |
| 工厂模式 | JavaScript并不支持工厂模式 |
| 原型 | 我们创建的每个函数都有一个`prototype`(原型)属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。 |
| 原型链 |  |
| 构造函数 | |


------


## 工厂模式-Factory Pattern

- 虽然**Object构造函数**或者**对象字面量**都可以用来创建单个对象，但这些方式有个明显的缺点: 使用同一个接口创建很多对象，会产生大量的重复代码。为解决这个问题，人们开始使用工厂模式的一种变体。

- 工厂模式是软件工程领域一种广为人知的设计模式，这种模式抽象了创建具体对象的过程。

- 工厂顾名思义就是创建产品，根据产品是具体产品还是具体工厂可分为**简单工厂模式**和**工厂方法模式**，根据工厂的抽象程度可分为**工厂方法模式**和**抽象工厂模式**。该模式用于封装和管理对象的创建，是一种创建型模式。

### 简单工厂模式-Simple Factory Pattern
- 该模式对对象创建管理方式最为简单，因为其仅仅简单的对不同类对象的创建进行了一层薄薄的封装。该模式通过向工厂传递类型来指定要创建的对象。


- 对于使用过基于类的语言(如Java或C++)的开发人员来说，JavaScript有点令人困惑，因为它是动态的，并且本身不提供一个`class`实现。(在ES2015/ES6中引入了`class`关键字，但那只是语法糖，JavaScript仍然是基于原型的)。

- 考虑到在ECMAScript中无法创建类，ECMAScript开发人员就发明了一种函数，用**函数来封装以特定接口创建对象**的细节，如下所示:


```javascript
/**
 * @param prototype
 * @description object that provides shared properties for other objects
 * @note When a constructor creates an object, that object implicitly references the constructor's
 * prototype property for the purpose of resolving property references. The constructor's
 * prototype property can be referenced by the program expression
 * `constructor.prototype`, and properties added to an object's prototype are shared, through
 * inheritance, by all objects sharing the prototype. Alternatively, a new object may be created with
 * an explicitly specified prototype by using the Object.create built-in function.
*/
function createPerson(name, age, job) {
  var obj = new Object();
  obj.name = name;
  obj.age = age;
  obj.job = job;
  obj.sayName = function() {
    console.log(this.name);
  };
  return obj;
}
/**
 * @description 函数`createPerson()`能够根据接受的参数来构建一个包含所有必要信息的`Person`对象。
 * 可以无数次调用这个函数，而每次它都会返回一个包含三个属性一个方法的对象。
 * 工厂模式虽然解决了创建多个相似对象的问题，但却没有解决对象识别的问题，也就是说我怎么知道一个对象的类型。
 * 
*/
```


## 原型-Prototype
