# Call 

- `Function.prototype.call()`

------

| 标题 | 内容 |
| --- | --- |
| Call的定义 | 什么是Call函数? |
| Call的使用 | 如何使用Call? |

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

- 详细解释(理解记忆): 在**ECMAScript 5的严格模式**中，`call()`和`apply()`的**第一个实参**也就是`thisArg`都会变为**`this`的值**，哪怕传入的实参是**原始值**甚至是`null`或者`undefined`。在**ECMAScript 3**和**非严格模式**中，传入的`null`和`undefined`都会被**全局对象代替**，而**其他原始值则会被相应的包装对象(`wrapper object`)所代替**。

```javascript

```

- `arg1, arg2, agr3, ...`: 指定的参数列表。


#### 返回值
- **使用调用者**提供的`this`值和**参数调用该函数的返回值**。若该方法没有返回值，则返回`undefined`。

------


> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call