# Call 

- `Function.prototype.call()`

------

| 标题 | 内容 |
| --- | --- |
| Call的定义 | 什么是Call函数? |
| Call的使用 | 如何使用Call函数? |
| Call的实现原理 | 如何实现Call函数? |

------

## Call的定义

- `call()`方法使用一个**指定的`this`值**和**单独给出的一个**或者**多个参数**来**调用一个函数**。

```javascript
function People(name, age) {
  this.name = name;
  this.age = age;
}

function Person(name, age) {
  People.call(this, name, age);
  this.tall = '185';
}


var person = new Person('jackdan', 25);

console.log(person) // Object { name: "jackdan", age: 25, tall: "185" }
console.log(person.name) // "jackdan"
```

### call的语法

```javascript
/**
 * @desciption Function.prototype.call()
 * 
*/
function.call(thisArg, arg1, arg2, arg3, ...)
```

#### 参数说明

- `thisArg`: 可选的。在`function`函数运行时使用的`this`值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为null或者undefined会自动替换为指向全局变量，原始值会被包装。

- 详细解释(理解记忆): 在**ECMAScript 5的严格模式**中，`call()`和`apply()`的**第一个实参**也就是`thisArg`都会变为 **`this`的值**，哪怕传入的实参是**原始值**甚至是`null`或者`undefined`。在**ECMAScript 3**和**非严格模式**中，传入的`null`和`undefined`都会被**全局对象代替**，而**其他原始值则会被相应的包装对象(`wrapper object`)所代替**。

```javascript
var name = 'jackdan';

function sayName() {
  console.log(this);
  console.log('My Name is %s', this.name)
}

sayName.call();
```

- `arg1, arg2, agr3, ...`: 指定的参数列表。


#### 返回值
- **使用调用者**提供的`this`值和**参数调用该函数的返回值**。若该方法没有返回值，则返回`undefined`。

#### 描述
- `call()`允许为不同的对象分配和调用属于一个对象的**函数/方法**。
- `call()`提供新的this值给当前调用的函数/方法。你可以使用`call`来实现继承: 写一个方法，然后让另外一个新的对象来继承它(而不是在新对象中再写一次这个方法)

------

## 示例

- 在一个子构造函数中，你可以通过调用**父构造函数**的` call `方法来**实现继承**，类似于` Java `中的写法。下例中，使用 Food 和 Toy 构造函数创建的对象实例都会拥有在 Product 构造函数中添加的 name 属性和 price 属性,但 category 属性是在各自的构造函数中定义的。

```javascript
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
console.log(cheese);
console.log(fun);
```

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call