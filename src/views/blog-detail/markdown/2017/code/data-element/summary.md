# JavaScript数据类型

------

## 什么是数据类型?

- **数据元**(Data Element)，也称为数据元素，是用一组属性描述其定义、标识、表示和允许值的数据单元，在一定预警下，通常用于构建一个语义正确、独立且无歧义的特定概念语义的信息单元。数据元可以理解为数据的基本单元，将若干个具有相关的数据元按一定的次序组成一个整体结构即为数据模型(备注: 看看就好)。

- 在编程语言中，能够表示并操作的值的类型称做数据类型(type)，编程语言最基本的特性就是能够支持多种数据类型(备注: 看看就好)。


------

## JavaScript中有哪些数据类型了？

### 原始类型(primitive type)
- 同时也称为基本数据类型（红宝书），包括有：`Undefined`类型, `Null`类型, `Boolean`类型, `String`类型, `Number`类型, `Symbol`类型(ES6增加)。

#### `Undefined`类型
- `Undefined`类型只有一个值，即特殊的`undefined`。
- 怎样才会产生一个`Undefined`类型的值了？在使用`var`或者`let`(ES6增加)声明变量但是未对其加以初始化时，这个变量的值就是`undefined`也就是`Undefined`类型，例如:

```javascript
// The Undefined type has exactly one value, called undefined. 
// Any variable that has not been assigned a value has the value undefined.
var message;
console.log(message == undefined); // true
// 等价于
/**
 * 但是这样是多此一举，因为未经过初始化的值默认就会取得undefined值。
 * 一般地，不存在需要显示地把一个变量设置为undefined值的情况。
 * Undefined类型的字面值undefined的主要用途是用来比较。
 * var message = undefined;
 * console.log(message == undefined); // true 
*/

let message1;
console.log(message1 == undefined); // true
// 等价于
/**
 * 但是这样是多此一举，因为未经过初始化的值默认就会取得undefined值。
 * 一般地，不存在需要显示地把一个变量设置为undefined值的情况。
 * Undefined类型的字面值undefined的主要用途是用来比较。
 * let message1;
 * console.log(message1 == undefined); // true
*/
```

- 不过，包含`undefined`值得变量与尚未定义的变量还是不一样的。例如:

```javascript
var message; // 这个变量声明之后取得了undefined值

console.log(message); // undefined
// 未声明的变量
console.log(age); // Uncaught ReferenceError: age is not defined（报错）
```

- 但是，对于未初始化的变量执行`typeof`操作符会返回`undefined`值，而对未声明的变量执行`typeof`操作符同样也会返回`undefined`值。例如:

```javascript
var message; // 这个变量声明之后取得了undefined值

console.log(typeof message); // undefined
console.log(typeof age); // undefined
```

- 对未初始化和未声明的变量执行`typeof`操作符返回了`undefined`值；这个结果有其逻辑上的合理性。因为虽然这两种变量从技术角度看有**本质区别**，但实际上无论对哪种变量也不可能执行真正的操作，所以建议不要在实际的程序代码中存在未初始化的变量或者使用`const`(ES6增加)声明变量。
- 即使未初始化的变量会自动被赋予`undefined`值，但是**显式地初始化变量**（本身这个机制没有问题的）依然是明智的选择。如果能够做到这一点，那么当`typeof`操作符返回"undefined"值时，就可以知道被检测得到变量还没有声明，而不是尚未初始化。


------


### 对象类型(object type)
- 同时也称为复杂数据类型（红宝书）。


------


> http://www.ecma-international.org/ecma-262/6.0/#sec-type
