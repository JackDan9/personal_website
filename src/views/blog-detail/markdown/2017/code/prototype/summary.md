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

### Object构造函数

- `Object`**构造函数**将给定的值包装为一个新对象。 

```javascript
// 如果给定的值是null或者undefined, 它会创建并返回一个空对象。
// 否则, 它们返回一个和给定的值相对应的类型的对象。
// 如果给定值是一个已经存在的对象，则会返回这个已经存在的值（相同地址）。
new Object();
new Object(value); // value 任意值

let o = new Object();
o.foo = 25;

console.log(o);
// Object { foo:25 }

let o = new Object();

let o = new Object(undefined);

let o = new Object(null);
```

### 对象字面量



- 在**非构造函数上下文中**调用时，`Object`和`new Object()`表现一致。

- 工厂模式是软件工程领域一种广为人知的设计模式，这种模式抽象了创建具体对象的过程。

- 工厂顾名思义就是**创建产品** —— *比如：你要买一辆HAVAL H6，你直接去HAVAL店里面买一台就行了，但是HAVAL厂家要在工厂里面做好一辆HAVAL H6(制造HAVAL H6的过程)，交付给客户。* ，根据产品是具体产品还是具体工厂可分为**简单工厂模式**和**工厂方法模式**，根据工厂的抽象程度可分为**工厂方法模式**和**抽象工厂模式**。该模式用于封装和管理对象的创建，是一种创建型模式。

### 工厂模式主要思想

- 工厂模式主要思想是将**对象的创建**与**对象的实现**分离。
- 工程模式是一种**关注对象创建概念的模式**。

### 什么时候需要工厂模式

- 当我们的**对象**或者**组件**设置涉及到**高程度级别的复杂度**。什么时候算得上是高程度的复杂度了？其实就是前面所说的制造一辆HAVAL H6。
- 实例对象比较复杂的情况下适用工厂模式，多对象，适用于共同属性的对象，工厂模式可以成批量地生产模式。


### 简单工厂模式-Simple Factory Pattern
- 简单工厂模式（Simple Factory），又叫**静态工厂方法**，由一个**工厂对象**来决定创建某一种产品对象类的实例，主要用来创建同一类对象。
- 该模式对**对象创建管理方式**最为简单，因为其仅仅简单的对**不同类对象的创建进行了一层薄薄的封装**。该模式通过向**工厂传递类型**来指定要**创建的对象**。如下: 以下是`TypeScript`代码。


![Simple Factory Pattern](./images/simple-factory-pattern.png)


#### 汽车类: 汽车标准规范类(Car)
```typescript
abstract class Car {
  public abstract make(): void;
  public abstract sale(): void;
}
```

#### HAVAL H6类: 制造HAVAL H6汽车()
```typescript
public class H6Car extends Car {  
  // @Override
  public make(): void {
    console.log("make haval 6 car");
  }

  public show(): void {
    console.log("sale haval 6 car");
  }
}
```

#### HAVAL H9类: 制造HAVAL H9汽车
```typescript
public class H9Car implements Car {
  // @Override
  public make(): void {
    console.log("make haval 9 car");
  }

  public show(): void {
    console.log("sale haval 9 car");
  }
}
```

#### CarFactory类: 汽车代工厂(Factory)
```typescript
public class CarFactory {
  /**
   * 静态工厂方法
   * @param carType 限制传入的参数为类，而非类的实例
  */
  constructor(name: string, price: number) { }
  public static createCar(carType: new() => Car): Car {
    let car = null;

    try {
      car = new carType();
    } catch(e) {
      console.error("Created failed!");
    }

    return car;
  }
}
```

#### Example
```typescript
let car = CarFactory.createCar(H6Car);
car.make();

car = CarFactory.createCar(H9Car);
car.make();
```

### 工厂方法模式-Factory Method Pattern
- 工厂方法模式，通过对**产品类的抽象**使**其创造业务只要负责用户创建多类产品的实例**。 
- 和简单工厂模式中工厂负责生产所有产品相比，工厂方法模式将**生产具体产品的任务**分发给**具体的产品工厂**，如图所示:

![Factory Method Pattern](./images/factory-method-pattern.png)

- 也就是定义一个抽象工厂，其定义了产品的生产接口，但不负责具体的产品，将生产任务交给不同的派生类工厂。这样不用通过指定类型来创建对象了。

```typescript
```

------

## JavaScript 工厂模式

- 对于使用过基于类的语言(如Java或C++)的开发人员来说，JavaScript有点令人困惑，因为它是动态的，并且本身不提供一个`class`实现。(在ES2015/ES6中引入了`class`关键字，ES6的`class`可以看作只是一个**语法糖**，它的绝大部分功能，`ES5`都可以做到，新的`class`写法只是让**对象原型**的写法更加清晰、更像**面向对象编程的语法**而已。JavaScript仍然是基于原型的)。

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
function createCar(name, price) {
  var obj = new Object();
  obj.name = name;
  obj.price = price;
  obj.sayName = function() {
    console.log(this.name);
  };
  return obj;
}
/**
 * @description 函数`createCar()`能够根据接受的参数来构建一个包含所有必要信息的`Car`对象。
 * 可以无数次调用这个函数，而每次它都会返回一个包含三个属性一个方法的对象。
 * 无数次调用: car1, car2, ..., carN都可以调用这个函数。
*/

let car1 = createCar("H6", 140000);
let car2 = createCar("H9", 400000);
console.log(car1);
console.log(car2);
```

- 这个时候`createCar`就类似于一个创造汽车的工厂一样，工厂模式虽然解决了**创建多个相似对象**的问题，但却没有解决**对象识别的问题**，也就是说我**怎么知道一个对象的类型？**。
- 随着JavaScript的发展，又一个新模式出现。

------

## 构造函数 Constructor

- ECMAScript中的构造函数可用来创建特定类型的对象。
- 像`Object`和`Array`的原生构造函数，在运行时会自动出现在执行环境中。
- 此外，也可以创建自定义的构造函数，从而定义自定义对象类型的属性和方法。
- 例如，可以使用构造函数模式将前面的例子重写如下：

```javascript
/**
 * @description Car()函数取代了createCar()函数。
 * Car()中的代码除了与createCar()中相同的部分外，还存在一下不同之处:
 *   1. 没有显式地创建对象;
 *   2. 直接将属性和方法赋给了this对象;
 *   3. 没有return语句。
 * @name Car
 * @param {*} name
 * @param {*} price
*/
function Car(name, price) {
  this.name = name;
  this.price = price;
  this.sayName = function () {
    console.log(this.name);
  }
}

let car1 = new Car("H6", 140000);
let car2 = new Car("H9", 400000);
console.log(car1);
console.log(car2);
```

- 我们应该注意到函数名Car使用的大写字母*C*。按照惯例，**构造函数始终都应该以一个大写字母开头**，而**非构造函数则应该以一个小写字母开头**。(参照的是OO语言——面向对象(Object Oriented,OO))，主要是为了区别于ECMAScript中的其他函数；因为构造函数本身也是函数，只不过可以用来创建对象而已。

- 注意：我们要创建Car的新实例，必须使用`new`操作符。`new`操作符调用构造函数实际上经历了什么了？如下:

```javascript
/**
 * @description new过程经历了以下4个步骤:
 * 1. 创建一个新对象;
 * 2. 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）;
 * 3. 执行构造函数中的代码（为这个新对象添加属性）;
 * 4. 返回新对象。
*/
let car1 = new Car("H6", 140000);
let car2 = new Car("H9", 400000);
```

- 在上面例子的最后，`car1`和`car2`分别保存着`Car`的一个不同的实例。这两个对象都有一个`constructor`(构造函数)属性，该属性指向`Car`, 如下所示:

```javascript
/**
 * @description 对象的constructor属性最初是用来标识对象类型的。
*/
console.log(car1.constructor == Car); // true
console.log(car2.constructor == Car); // true
```

- 对象的constructor属性最初是用来标识对象类型的。但是，提到检测对象类型，还是`instanceof`操作符要更可靠一些。

```javascript
/**
 * @description 对象car1和car2既是Object的实例(这是因为所有对象均继承自Object)，同时也是Car的实例。
 * 这一点通过instanceof操作符可以得到验证。
*/
console.log(car1 instanceof Object); // true
console.log(car1 instanceof Car); // true
console.log(car2 instanceof Object); // true
console.log(car2 instanceof Car); // true

console.log(car1.constructor == Car); // true
console.log(car1.constructor == Object); // false
console.log(car2.constructor == Car); // true
console.log(car2.constructor == Object); // false
```

### 创建自定义的构造函数
- 创建自定义的构造函数(`constructor`)意味着将来可以将它的实例标识为一种特定的类型; 而这正是构造函数模式胜过工厂模式的地方。

#### 将构造函数当作函数

- 构造函数与其他函数的唯一区别，就在于**调用它们的方式不同**。不过，构造函数毕竟也是函数，不存在定义构造函数的特殊语法。
- 任何函数，只要通过`new`操作符来调用，那它就可以作为构造函数; 而任何函数，如果不通过`new`操作符来调用，那它跟普通函数也不会有什么两样。

```javascript
/**
 * @description 当作构造函数使用
*/
let car = new Car("H6", 140000);
car.sayName(); // "H6"

/**
 * @description 作为普通函数调用
*/
Car("H9", 400000);
window.sayName(); // "H9"

/**
 * @description 在另一个对象的作用域中调用
*/
let o = new Object();
Car.call(o, "H大狗", 30000); // Function.prototype.call();
o.sayName(); // "H大狗"
/**
 * @description 构造函数的典型用法: 使用new操作符来创建一个新对象。
 * let car = new Car("H6", 140000);
 * car.sayName(); // "H6"
 * 
 * 不使用new操作符调用Car(): 属性和方法都被添加给window对象了。
 * 当在全局作用域中调用一个函数时，this对象总是指向Global对象(在浏览器中就是window对象).
 * Car("H9", 400000);
 * window.sayName(); // "H9"
 * 在调用完函数之后, 可以通过window对象来调用sayName()方法, 并且还返回了"H9"。
 * 
 * 最后, 也可以使用call()(或者apply())在某个特殊对象的作用域中调用Car()函数。
 * let o = new Object();
 * Car.call(o, "H大狗", 30000); // Function.prototype.call();
 * o.sayName(); // "H大狗"
 * 
 * 这里是在对象o的作用域中调用的，因此调用后o就用了所有属性和sayName()方法。
*/
```

#### 构造函数的问题
- 构造函数模式虽然好用，但也并非没有缺点。使用构造函数的主要问题，就是每个方法都要在每个实例上重新创建一遍。

```javascript
/**
 * @description car1和car2都有一个名为sayName()的方法, 但car1和car2还不是同一个Function的实例。
*/
let car1 = new Car("H6", 140000);
let car2 = new Car("H9", 400000);
```

- 注意了，ECMAScript中的函数是对象(), 因此每定义一个函数，也就是实例化了一个对象。所以从逻辑角度讲，此时的构造函数也可以这样定义。

```javascript
/**
 * @desciption 从这个角度上来看构造函数, 更容易明白每个Car实例都包含一个不同的Function实例(以显示name属性)的本质。
*/
function Car(name, price) {
  this.name = name;
  this.price = price;
  this.sayName = new Function("console.log(this.name)"); // 与声明函数在逻辑上是等价的
}

/**
 * @description 这种方式创建函数, 会导致不同的作用域链和标识解析，但创建Function新实例的机制仍然是相同的。
 * 因此, 不同实例上的同名函数是不相等的。
*/
console.log(car1.sayName == car2.sayName); // false
```

- 但是, 创建两个完成同样任务的Function实例的确没有必要; 况且有`this`对象在, 根本不用在执行代码前就把函数绑定到特定对象上面。因此, 可以像下面这样, 通过把函数定义转移到构造函数外部来解决这个问题。

```javascript
/**
 * @description 把sayName()函数的定义转移到了构造函数外部。
 * 而在构造函数内部，我们将sayName属性设置成等于全局的sayName函数。
*/
function Car(name, price) {
  this.name = name;
  this.price = price;
  this.sayName = sayName;
}

function sayName() {
  console.log(this.name);
}

let car1 = new Car("H6", 140000);
let car2 = new Car("H9", 400000);
```

- 如上所示, 由于`sayName()`包含的是一个**指向函数的指针**，因此`car1`和`car2`对象就**共享了在全局作用域中**定义的同一个`sayName()`函数。这样确实解决了两个函数做同一件事的问题，可是新问题又来了: 在**全局作用域中定义的函数实际上只能被某个对象调用**, 这让**全局作用域有点名不副实**。而更让人无法接受的是: 如果对象需要定义**很多方法**, 那么就要**定义很多个全局函数**, 于是我们这个**自定义的引用类型就丝毫没有封装性可言**了。好在，这些问题可以通过使用原型模式来解决。


------

## 原型-Prototype

- 我们创建的每个函数都有一个`prototype(原型)`属性, 这个属性是**一个指针**, 指向**一个对象**, 而这个对象的用途是包含可以由**特定类型的所有实例**共享的属性和方法。
- 如果按照字面意思来理解, 那么`prototype`就是通过调用**构造函数**而创建的那个对象实例的**原型对象**。使用**原型对象的好处**是可以让**所有对象实例共享它所包含的属性和方法**。

```javascript
function Car() {
}

Car.prototype.name = 'H6';
Car.prototype.price = 140000;
Car.prototype.sayName = function() {
  console.log(this.name);
}

let car1 = new Car();
car1.sayName(); // H6

let car2 = new Car();
car2.sayName(); // 'H6'

console.log(car1.sayName == car2.sayName); // true
```

------


## 组合使用构造函数模式和原型模式