# JavaScript数据类型

| 数据类型名称 | 数据类型内容 |
| --- | --- |
| 原始类型(primitive type) | Undefined类型、Null类型、Boolean类型、String类型、Number类型、Symbol类型(ES6新增) | 
| 对象类型(object) | Object类型 |

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


#### Null类型

- `Null`类型第二个只有一个值的类型，这个值是`null`。从逻辑上来讲，`null`值表示的是一个**空对象指针**。何以见得它是空对象指针了？如下所示: 

```javascript
/**
 * @description null value: primitive value that represents 
 * the intentional absence of any object value.
*/
var oTemp = null;
console.log(typeof oTemp); // object

```

- 这也正是使用`typeof`操作符检测`null`值时会返回"object"的原因。

- 如果定义的变量**准备在将来用于保存对象**，那么最好将变量初始化为`null`而不是其他值。这样一来，只要直接检查`null`值就可以知道相应的变量是否已经保存了一个对象的引用，如下所示:

```javascript
/**
 * @description 如果函数或者方法要返回的是对象，那么找不到该对象时，返回的通常是null。
*/
if (oTemp != null) {
    console.log(oTemp); // 对oTemp对象执行某些操作
}
```

#### Undefined类型的值与Null类型的值关系
- 也就是`undefined`与`null`的关系，值`undefined`实际上是从值`null`派生来的, 因此ECMAScript(ECMA-262)规定对它们的相等性测试要返回`true`。如下所示:

```javascript
/**
 * @description 尽管两个值相等，但它们的含义不同、用途也不一样。
 * undefined是声明了变量但未对其初始化时赋予该变量的值
 * null则用于表示尚未存在的对象
 * 
 * 前面讲到，无论在什么情况下都没有必要把一个变量的值显式地设置为undefined, 可是同样的规则对null却不适用。
 * 换句话说，只要在保存对象的变量还没有真正保存对象，就应该明确地让该变量保存null值。
 * 这样做不仅可以体现null作为空对象指针的惯例，而且也有助于进一步区分null和undefined。
*/
console.log(undefined == null); // true
/**
 * @description 上面未于undefined和null之间的相等操作符(==)总是返回true
 * 不过要注意的是，这个操作符出于比较的目的会转换其操作数(类型转换的范畴了)。
*/
```

#### Boolean类型

- `Boolean`类型是ECMAScript中最常用的类型之一。它有两个值`true`和`false`(即Boolean的字面量)。
- 这两个值与数字值不是一回事，因此`true`不一定等于1, 而`false`也不一定等于0。如下所示:

```javascript
/**
 * @description The Boolean type represents a logical entity having two values, 
 * called `true` and `false`.
 * 
 * @note 需要注意的是，Boolean类型的字面值true和false是区分大小写的。
 * 也就是说，True和False(以及其他的混合大小写形式)都不是Boolean值, 只是标识符。
*/
var bFound = true;
var bLost = false;
```

- 虽然`Boolean`类型的字面值只有两个，但ECMAScript中所有类型的值都有与这两个`Boolean`值等价的值。要将一个值转换为其对应的Boolean值，可以调用转型函数`Boolean()`，如下所示:

```javascript
/**
 * @description 字符串bMessage被转换成了一个Boolean值，该值被保存在bMessageAsBoolean变量中。
 * 可以对任何类型的值调用Boolean()函数，而且总会返回一个Boolean值。
 * 至于返回的这个值是true还是false，取决于要转换值的数据类型及其实际值。
*/
var bMessage = "Hello JackDan";
var bMessageAsBoolean = Boolean(bMessage);
```

- 各种数据类型及其对应的规则。如下表：

| 数据类型 | 转换为true的值 | 转换为false的值 |
| --- | --- | --- |
| Boolean | true | false |
| String | 任何非空字符串 | ""(空字符串) |
| Number | 任何非零数字值(包括无穷大) | 0和NaN(后面会讲到) |
| Object | 任何对象 | null |
| Undefined | n/a(或者N/A),是not applicable的缩写,意思是"不适用" | undefined | 
 
- 这些转换规则对理解控制语句(如`if`语句)自动更新相应的`Boolean`转换非常重要，如下:

```javascript
/**
 * @description 这个示例，就会打印"Value is true", 因为字符串`bMessage`被自动转换成了对应的Boolean值(true)。
 * 由于存在这种自动执行的Boolean转换，因此确切地知道在控制语句中适用的是什么变量至关重要。
 * 错误地使用一个对象而不是一个Boolean值，就有可能彻底改变应用程序的流程。
*/
var bMessage = "Hello JackDan!";
if (bMessage) {
  console.log("Value is true");
}
```

#### Number类型
- `Number`类型应该是ECMAScript中最令人关注的数据类型了，这种类型使用IEEE754格式来表示整数和浮点数值(浮点数值在某些语言中也被称为双精度数值)。
- 为了支持各种数值类型，ECMA-262定义了不同的数值字面量格式。

##### 十进制整数
- 最基本的数值字面量格式是十进制整数，十进制整数可以像下面这样直接在代码中输入:

```javascript
/**
 * @description Number类型既可以表示32位的整数，还可以表示64位的浮点数。 
 * 直接输入的(而不是从另一个变量访问的)任何数字都被看做Number类型的字面量。
 * 鉴于JavaScript中保存数值的方式，可以保存正零(+0)和负零(-0)，正零和负零被认为相等。
*/
var intNum = 55; // 整数
```

##### 八进制整数

- 除了以十进制表示外，整数还可以通过八进制(以8为基数)或者十六进制(以16为基数)的字面值来表示。
- 其中，八进制字面值的第一位必须是零(0)，然后是八进制数字序列(0~7)。
- 如果字面值中的数值超出了范围，那么前导零将被忽略，后面的数值将被当作十进制数值解析。如下:

```javascript
/**
 * @note 八进制字面量在严格模式下是无效的，会导致支持的JavaScript引擎抛出错误。
*/
var octalNum1 = 070; // 八进制的0*8^3 + 7*8^1 + 0*8^0 = 56
var octalNum2 = 079; // 无效的八进制数值 —— 解析为79
var octalNum3 = 08; // 无效的八进制数值 —— 解析为8
```

##### 十六进制整数

- 十六进制字面量的前两位必须是`0x`，后跟任何十六进制数字(`0~9`以及`A~F`)。
- 其中，字母`A~F`可以大写，也可以小写。如下所示:

```javascript
/**
 * @note 在进行算术计算时，所有以八进制和十六进制表示的数值最终都将被转换成十进制数。
*/
var hexNum1 = 0xA; // 十六进制的10*16^0
var hexNum2 = 0x1f; // 十六进制的1*16^1 + 15*16^0
```

##### 浮点数值
- 所谓浮点数值，就是该数值中必须包含一个小数点，并且小数点后面必须至少有一位数字。

```javascript
/**
 * @description 虽然小数点前面可以没有整数，但我们不推荐这种写法。
*/
var floatNum1 = 1.1;
var floatNum2 = 0.1;
var floatNum3 = .1; // 有效，但不推荐
```

- 由于保存浮点数值需要的**内存空间**是保存整数值的两倍，因此ECMAScript会不失时机地将**浮点数值转换为整数值**。
- 显然，如果小数点后面没有跟任何数字，那么这个数值就可以作为整数值来保存。
- 同样地，如果浮点数值本身表示的就是一个整数(如1.0)，那么该值也会被转换为整数。如下:

```javascript
var floatNum1 = 1.; // 小数点后面没有数字——解析为1
var floatNum2 = 10.0; // 整数——解析为10
```

- 对于那些极大或者极小的数值，可以用`e`表示法(即科学计数法)表示的浮点数值表示。
- 用`e`表示法表示的数值等于`e`前面的数值乘以10的**指数次幂**。ECMAScript中`e`表示法的格式也是如此，即前面是一个数值(可以是整数也可以是浮点数)，中间是一个大写或者小写的字母E，后面是10的幂中的指数，该幂值将用来与前面的数相乘。如下所示:

```javascript
/**
 * @description 使用e表示法的变量floatNum的形式虽然简洁，但它的实际值则是31250000。
 * 在此，e表示法的实际含义就是"3.125乘以10^7"。
*/
var floatNum = 3.125e7; // 等于31250000
```

- 也可以使用`e`表示法极小的数值，如`0.000000000000000003`，这个数值可以使用更简洁的3e^-17表示。
- 在默认情况下，ECMAScript会将那些小数点后面带有6个零以上的浮点数值转换为以`e`表示法表示的数值(例如，0.0000003会被转换成3e^-7)。

- 浮点数值的最高精度是17位数，但在进行算术计算时其**精确度远远不如整数**。如下:

```javascript
/**
 * @descrition 这个小小的舍入误差会导致无法测试特定的浮点数值。
*/
console.log(0.1 + 0.2); // 0.30000000000000004。
console.log(0.1 + 0.2 == 0.3); // false
/**
 * @description 我们测试的是两个数的和是不是等于0.3。答案是不等于的。
 * 如果这两个数是0.05和0.25，或者是0.15和0.15都不会有问题了。
 * 而这两个数是0.1和0.2，那么测试将无法通过。
 * 因此，永远不要测试某个特定的浮点数值。
*/
console.log(0.05 + 0.25 == 0.3); // true
console.log(0.15 + 0.15 == 0.3); // true
```



##### 数值范围

- 由于内存的限制，ECMAScript并不能保存世界上所有的数值。ECMAScript能够表示的最小数值保存在`Number.MIN_VALUE`中——在大多数浏览器中，这个值是`5e^-324`；能够表示的最大数值保存在`Number.MAX_VALUE`中——在大多数浏览器中，这个值是`1.7976931348623157e^+308`。
- 如果某次计算的结果得到了一个**超出JavaScript数值范围**的值，那么这个数值将被自动转换成特殊的`Infinity`(无穷)值。
- 具体来说，如果这个数值是负数，则会被转换成`-Infinity`(负无穷)，如果这个数值是整数，则会被转换成`Infinity`(正无穷)。

```javascript
/**
 * @description 如果某次计算返回了正或负的Infinity值，那么该值将无法继续参与下一次的计算，因为Infinity不是能够参与计算的数值
 * 要想确定一个数值是不是有穷的(是不是位于最小和最大的数值之间)，可以使用`isFinite()`函数。
 * `isFinite()`函数在参数位于最小与最大数值之间时会返回true。
*/
var result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(result)); // false
/**
 * @note 访问Number.NEGATIVE_INFINITY 和 Number.POSITIVE_INFINITY也可以得到负和正Infinity的值。
 * 可以相见，这两个属性中分别保存着-Infinity和Infinity。
*/
```

- 尽管在计算中很少出现某些值超出表示范围的情况，但在执行**极小**或**极大**数值的计算时，检测监控这些值是可能，也是必需的。

##### NaN

- `NaN`, 即非数值(Not a Number)是一个特殊的数值，那这个数值代表什么了？为什么需要这个数值了？如下所示:
- 一般情况下，这种情况发生在类型(String, Boolean等)转换失败时。

```javascript
/**
 * @desciption 要把单词jackdan转换成数值就会失败，因为没有与之等价的数值。
*/
console.log("jackdan" / 0); // NaN
/**
 * @description 这个数值表示一个本来要返回数值的操作数未返回数值的情况。
 * number value that is an IEEE 754-2008 "Not a Number" value
 * @note 1. 任何涉及NaN的操作都会返回NaN，这个特点在多步计算中有可能导致问题。
 * 2. NaN与任何值都不相等，包括NaN本身。
*/
console.log(10/NaN); // NaN
console.log(NaN == NaN); // false
```

- 任何涉及NaN的操作都会返回NaN，这个特点在**多步计算**中有可能导致问题，也就是说NaN与Infinity(无穷大)是一样的，不能用于算术运算。
- NaN与**任何值都不相等**，**包括NaN本身**。

- 基于NaN上面的这两个特点，ECMAScript定义了`isNaN()`函数。
- `isNaN`函数接受一个参数，该参数可以是任何类型，而函数会帮我们确定这个参数**是否"不是数值"**。
- `isNaN()`函数在接收到一个值之后，会尝试将这个值转换为数值。某些不是数值的值会直接转换为数值，例如字符串"10"或者Boolean值。

```javascript
/**
 * @description 任何不能被转换为数值的值都会导致这个函数返回true。
 * The isNaN function is the %isNaN% intrinsic object.
 * When the isNaN function is called with one argument number, the following steps are taken:
 * 1. Let num be ToNumber(number).
 * 2. ReturnIfAbrupt(num).
 * 3. If num is NaN, return true.
 * 4. Otherwise, return false.
 * @note A reliable way for ECMAScript code to test if a value X is a NaN is an expression of the form X !== X.
 * The result will be true if and only if X is a NaN.
*/
console.log(isNaN(NaN)); //true
console.log(isNaN(10)); //false(10是一个数值)
console.log(isNaN("10")); //false(可以被转换成数值10)
console.log(isNaN("blue")); //true(不能转换成数值)
console.log(isNaN(true)); //false(可以被转换成数值1)  
```

- `isNaN`确实也适用于对象。在基于对象调用`isNaN()`函数时，会首先调用对象的`valueOf()`方法，然后确定该方法返回的值是否可以转换为数值。如果不能，则基于这个返回值再调用`toString()`方法，再测试返回值。

##### 数值转换

- 有3个函数可以把非数值转换为数值: `Number()`、`parseInt()`和`parseFloat()`。
- `Number()`转型函数可以用于任何数据类型，而另外两个函数则专门用于把**字符串转换成数值**。

```javascript
/**
 * @description Number()函数的转换规则如下:
 * 如果是Boolean值，true和false将分别被转换为1和0.
 * 如果是数字值，只是简单的传入和返回.
 * 如果是null值，返回0.
 * 如果是undefined，返回NaN.
 * 如果是字符串，遵循下列规则:
 *  如果字符串中只包含数字(包括前面带正号或负号的情况)，则将其转换为十进制数值，即"1"会变成1，"123"会变成123，而"011"会变成11(注意: 前导的零被忽略零);
 *  如果字符串中包含有效的浮点格式，如"1.1"，则将其转换为对应的浮点数值(同样，也会忽略前导零);
 *  如果字符串中包含有效的十六进制格式，例如"0xf"，则将其转换为相同大小的十进制整数值;
 *  如果字符串是空的(不包含任何字符)，则将其转换为0;
 *  如果字符串中包含除了上述格式之外的字符，则将其转换为NaN.
 * 如果是对象，则调用对象的`valueOf()`方法，然后依照前面的规则转换返回的值。
 * 如果转换的结果是NaN，则调用对象的`toString()`方法，然后再次依照前面的规则转换返回的字符串值。
*/
var num1 = Number(true); //1
var num2 = Number(false); //0
var num3 = Number(4); //4
var num4 = Number(null); //0
var num5 = Number(undefined); //NaN
var num6 = Number('011'); //11
var num7 = Number("01.1"); //1.1
var num8 = Number('0xf'); //15
var num9 = Number(''); //0
var num10 = Number("Hello world!"); //NaN
/**
 * @note 一元操作符的操作与Number()函数相同。
*/
```

- 由于`Number()`函数在转换字符串时比较复杂而且不够合理，因此在处理整数的时候更常用的是`parseInt()`函数。
- `parseInt()`函数在转换字符串时，更多的是看其是否符合数值模式。它会忽略字符串前面的空格，直至找到第一个非空格字符。
- 如果第一个字符不是**数字字符或者负号**，`parseInt()`就会返回NaN；也就是说，用`parseInt()`转换空字符串会返回NaN(`Number()`对空字符返回`0`)。
- 如果第一个字符是数字字符，`parseInt()`会继续解析第二个字符，直到**解析完所有后续字符**或者**遇到了一个非数字字符**。


```javascript
/**
 * @description 如果字符串中的第一个字符是数字字符，parseInt()也能够识别初各种整数格式(即前面讨论的十进制、八进制和十六进制数)。
 * 也就是说，如果字符串以"0x"开头且后跟数字字符，就会将其当作一个十六进制整数；如果字符串以"0"开头且后跟数字字符，则会将其当作一个八进制数来解析。
 * 在使用parseInt()解析像八进制字面量的字符串时，ECMAScript3和5存在分歧。
*/
var num1 = parseInt("1234blue"); //1234
var num2 = parseInt(""); //NaN
var num3 = parseInt("0xA"); //10(十六进制数)
var num4 = parseInt(22.5); //22
var num5 = parseInt("070"); //56(八进制)
var num6 = parseInt("70"); //70(十进制)
var num7 = parseInt("0xf"); //15(十六进制数)
var num8 = parseInt("070"); // ECMAScript 3认为是56(八进制数)，ECMAScript 5认为是0(十进制)
```

- 在ECMAScript3 JavaScript引擎中，"070"被当成八进制字面量，因此转换后的值是十进制的56.
- 而在ECMAScript 5 JavaScript引擎中，parseInt()已经不具有解析八进制值的能力，因此前导的零会被认为无效，从而将这个值当成"0"，结果就得到十进制的0。
- 在ECMAScript5中，即使是在严格模式下也会如此。那么怎样消除这种差异了？
- 在使用`parseInt()`函数时可能导致的上述困惑，可以为这个函数提供第二个参数：**转换时使用的基数**(即多少进制)。

```javascript
/**
 * @description 如果知道要解析的值是十六进制格式的字符串，
 * 那么指定基数16作为第二个参数，可以保证得到正确的结果。
 * 实际上，如果指定了16作为第二个参数，字符串可以不带前面的"0x"。
*/
var num = parseInt("0xAF", 16); //175
var num1 = parseInt("AF", 16); //175
var num2 = parseInt("AF"); //NaN

/**
 * @note var num1 = parseInt("AF", 16);转换成功，
 * var num2 = parseInt("AF"); 转换失败。
 * 差别在于第一个转换传入了基数，明确告诉`parseInt()`要解析一个十六进制格式的字符串；
 * 而第二个转换发现第一个字符不是数字字符，因此就自动终止了。
*/
```

- 指定基数会影响到转换的输出结果。如下:

```javascript
/**
 * @function parseInt(string, radix)
 * The parseInt function produces an integer value dictated by interpretation of the contents of the string argument according to the specified radix. 
 * Leading white space in string is ignored.
 * If radix is undefined or 0, it is assumed to be 10 except when the number begins with the code unit pairs 0x or 0X, in which case a radix of 16 is assumed.
 * If radix is 16, the number may also optionally begin with the code unit pairs 0x or 0X.
 * 
 * @note 不指定基数意味着让parseInt()决定如何解析输入的字符串，因此为了避免错误的解析，我们建议无论在什么情况下都明确指定基数。
*/
var num1 = parseInt("10", 2); //2(按二进制解析)
var num2 = parseInt("10", 8); //8(按八进制解析)
var num3 = parseInt("10", 10); //10(按十进制解析)
var num4 = parseInt("10", 16); //16(按十六进制解析)
```

- 多数情况下，我们要解析的都是十进制数值，因此始终将10作为第二个参数是非常必要。

- 与`parseInt()`函数类似，`parseFloat()`也是从**第一个字符(位置0)**开始解析每个字符。
- 而且也是**一直解析到字符串末尾**，或者解析到遇见一个**无效的浮点数字字符为止**。
- 也就是说，字符串中的**第一个小数点是有效**的，而**第二个小数点就是无效**的了，因此**它后面的字符串将被忽略**。
- 除了第一个小数点有效之外，`parseFloat()`与`parseInt()`的第二个区别在于它始终都会忽略前导的零。

```javascript
/**
 * @function parseFloat(string)
 * @description The parseFloat function produces a Number value dictated by interpretation of the contents of the string arguments as a decimal literal.
 * @description parseFloat()可以识别前面讨论过的所有浮点数值格式，也包括十进制整数格式。
 * 但是十六进制格式的字符串始终会被转换成0。
 * 由于parseFloat()只解析十进制值，因此它没有用第二个参数指定基数的用法。
 * 如果字符串包含的是一个可解析为整数的(没有小数点，或者小数点后都是零)，parseFloat()会返回整数。
*/
var num1 = parseFloat("1234blue"); //1234(整数)
var num2 = parseFloat("0xA"); //0
var num3 = parseFloat("22.5"); //22.5
var num4 = parseFloat("22.34.5"); //22.34
var num5 = parseFloat("0908.5"); //908.5
var num6 = parseFloat("3.125e7"); //31250000
```

#### String类型
- **String类型**用于表示由零或者多个16位Unicode字符组成的字符序列，即字符串。

```javascript
/**
 * @description 字符串可以由双引号("")或者单引号('')表示。
 * 用双引号表示的字符串和用单引号表示的字符串完全相同(这一点与PHP，Java(""->字符串，''->字符)不一样)。
 * 但是，以双引号开头的字符串也必须以双引号结尾，而以单引号开头的字符串必须以单引号结尾。 
*/
var firstName = "Jack";
var lastName = "Dan";
var firstName = "Jack'; //语法错误(左右引号必须匹配)
```

- **String类型**的独特之处在于，它是唯一没有固定大小的原始类型。

##### 字符字面量
- **String类型**包含一些特殊的字符字面量，也叫**转义序列**，用于表示**非打印字符**，或者具有其他用途的字符。

| 字面量(Escape Sequence) | Unicode表示值(Code Unit Value) | Unicode字符名称 | 符号(Symbol) |
| --- | --- | --- | --- |
| \b | 0x0008 | 空格(BACKSPACE) | `<BS>` |
| \t | 0x0009 | 制表(CHARACTER TABULATION) | `<HT>` |
| \n | 0x000A | 换行(LINE FEED {LF}) | `<LF>` |
| \v | 0x000B | (LINE TABULATION) | `<VT>` |
| \f | 0x000C | 换页符(FORM FEED {FF}) | `<FF>` |
| \r | 0x000D | 回车(CARRIAGE RETURN {CR} | `<CR>` |
| \" | 0x0022 | 双引号(QUOTATION MARK) | " | 
| \' | 0x0027 | 单引号/撇号(APOSTROPHE) | ' |
| `\\` | 0x005C | 反斜杠(REVERSE SOLIDUS) | \ |
| \0nnn | - | 八进制代码nnn表示字符(n是0到7中的一个八进制数字) | \070(8) |
| \xnn | -  | 十六进制代码nn表示的字符(n是0到F中的一个十六进制数字) | \x41(A) |
| \unnnn | - | 以十六进制代码nnnn表示的一个Unicode字符(其中n为0～F)。| \u03a3(Σ) |

- 这些字符字面量可以出现在**字符串中的任意位置**，而且也将被作为一个**字符来解析**，如下:

```javascript
/**
 * @description 长度为28，其中6个字符长的转义序列表示1个字符
 * 任何字符串的长度都可以通过访问其length属性取得
 * 这个属性返回的字符数包括16位字符的数目
 * 如果字符串中包含双字节字符，那么length属性可能不会精确地返回字符串中的字符数目
*/
var sText = "This is the letter sigma: \u03a3.";
console.log(sText.length); // 28
var sText1 = "This is the letter sigma: .";
console.log(sText1.length); // 27
```

##### 字符串的特点
- `ECMAScript`中的字符串是不可变的，也就是说，字符串一旦创建，它们的值就不能改变。
- 要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量。

```javascript
/**
 * @description 变量sLang开始时包含字符串"Java"
 * 第二行代码把sLang的值重新定义为"Java"与"Script"的组合，即"JavaScript"
 * 实际操作过程:
 * 首先创建一个能容纳10个字符的新字符串，
 * 然后在这个字符串中填充"Java"和"Script"，
 * 最后一步是销毁原来的字符串"Java"和字符串"Script"，因为这两个字符串已经没用来
 * 这个过程是在后台发生的，而这也是在某些旧版本的浏览器中拼接字符串时速度很慢的原因所在
 * 但这些浏览器后来的版本已经解决了这个低效率问题
*/
var sLang = "Java";
sLang = sLang + "Script";
```

##### 转换为字符串
- 要把一个值转换为一个字符串有两种方式。第一种是使用几乎每个值都有的`toString()`方法。
- 这个方法唯一要做的就是返回相应值的字符串表现。

```javascript
/**
 * 数值、布尔值、对象和字符串值(没错，每个字符串也都有一个toString()方法，该方法返回字符串的一个副本)都有toString()方法
 * 但null和undefined值没有这个方法
*/
var sAge = 11;
var sAgeAsString = sAge.toString(); //字符串"11"
var sFound = true;
var sFoundAsString = sFound.toString(); //字符串"true"
```

- 多数情况下，调用`toString()`方法不必传递参数。但是，在调用数值的`toString()`方法时，可以传递一个参数：**输出数值的基数**。

```javascript
/**
 * @description 默认情况下，toString()方法以十进制格式返回数值的字符串表示
 * 通过传递基数，toString()可以输出以二进制、八进制、十六进制，乃至其他任意有效进制格式表示的字符串值
*/
var sNum = 10;
console.log(sNum.toString()); //"10"
console.log(sNum.toString(2)); //"1010"
console.log(sNum.toString(8)); //"12"
console.log(sNum.toString(10)); //"10"
console.log(sNum.toString(16)); //"a"
```

- 通过指定基数，`toString()`方法会改变输出的值。数值10根据基数的不同，可以在输出时被转换为不同的数值格式。
- 默认的(没有参数的)输出值与指定基数10时的输出值相同。

- 在不知道要转换的值是不是`null`或者`undefined`的情况下，还可以使用转型函数`String()`，这个函数能够将任何类型的值转换为字符串。`String()`函数遵循下列转换规则:

```javascript
/**
 * @desciption 如果值有toString()方法，则调用该方法(没有参数)并返回相应的结果；
 * 如果值有null，则返回"null"
 * 如果值有undefined，则返回"undefined"
 * 
 * 数值、布尔值、null和undefined。
 * 数值和布尔值的转换结果与调用toString()方法得到的结果相同。
 * 因为null和undefined没有toString()方法，所以String()函数就返回了这两个值的字面量
 * 要把某个值转换为字符串，可以使用加号操作符把它与一个字符串("")加在一起
*/
var sValue1 = 10;
var sValue2 = true;
var sValue3 = null;
var sValue4;
console.log(String(sValue1)); //"10"
console.log(String(sValue2)); //"true"
console.log(String(sValue3)); //"null"
console.log(String(sValue4)); //"undefined"
```

#### Symbol类型

- Symbol类型是ES6(ECMAScript2015)引入的，那为什么需要引入Symbol原始数据类型(`primitive type`)了?

- ES5的对象属性名都是字符串，这容易造成属性名的冲突。


```javascript
/**
 * @description 如果你使用了一个他人提供的对象，但又想为这个对象添加新的方法(mixin模式)
 * ，新方法的名字就有可能与现有方法产生冲突。
*/

// jackdan定义的
const obj = {};
obj.name = 'JackDan';
// jackdan1 去引入然后使用，再去定义一个name属性，复制

obj.name = 'jackdan';

console.log(obj); // jackdan，会发现jackdan定义的obj.name被覆盖了
```

- 如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是ES6引入`Symbol`的原因。

```javascript
const obj = {};
obj[Symbol('name')] = 'JackDan';
obj[Symbol('name')] = 'jackdan';

console.log(obj); // {Symbol(name): "JackDan", Symbol(name): "jackdan"}
```

- ES6引入了一种新的原始数据类型`Symbol`，表示独一无二的值。Symbol值是通过`Symbol`函数生成。

```javascript
/**
 * @description 对象得属性名现在可以有两种类型，一种是原来就有得字符串，另一种就是新增得Symbol类型。
 * 凡是属性名属于Symbol类型，就都是独一无二，可以保证不会与其他属性名产生冲突。
*/
let s = Symbol();

typeof s; // "symbol"
/**
 * @note 变量s就是一个独一无二得值。
 * typeof运算符得结果，表明变量s是Symbol数据类型，而不是字符串之类的其他类型。
*/
```

- `Symbol`函数可以接受一个字符串作为参数，表示对**Symbol实例的描述**，主要是为了在**控制台显示**，或者**转换为字符串时，比较容易区分**。

```javascript
/**
 * @description sTemp1和sTemp2是两个Symbol值。
 * 如果不加参数，它们在控制台的输出都是Symbol()，不利于区分。
 * 有了参数以后，就等于为它们加上了描述，输出的时候就能够分清，到底是哪一个值。
 * Symbol函数的参数只是表示对当前Symbol值的描述，因此相同参数的Symbol函数的返回值是不相等的。
*/
let sTemp1 = Symbol();
let sTemp2 = Symbol();
sTemp1 // Symbol()
sTemp2 // Symbol()
sTemp1 === sTemp2 // false

let s1 = Symbol('jackdan1');
let s2 = Symbol('jackdan2');
s1 // Symbol(jackdan1)
s2 // Symbol(jackdan2)
s1 === s2 // false
s1.toString() // "Symbol(jackdan1)"
s2.toString() // "Symbol(jackdan2)"

let s3 = Symbol('jackdan');
let s4 = Symbol('jackdan');
s3 === s4 // false
// 上面代码中，s3和s4都是Symbol函数的返回值，而且参数相同，但是它们是不相等的。
```

- 需要注意的是，`Symbol`函数前不能使用`new`命令，否则会报错。那这又是为什么了？

```javascript
/**
 * @description 这是因为生成的Symbol是一个原始类型的值，不是对象。
*/
let sError1 = Symbol('jackdan'); // Uncaught TypeError: Symbol is not a constructor

let s = Symbol('jackdan'); 
let sError2 = new s(); // Uncaught TypeError: Symbol is not a constructor
```

- 也就是说，由于**Symbol值**不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。

- 如果`Symbol`的参数是一个对象，就会调用该对象的`toString`方法，将其转为字符串，然后才生成一个`Symbol`值。

```javascript
const obj  = {
  toString() {
    return 'jackdan';
  }
};
const s = Symbol(obj);
s // Symbol(jackdan)
```

- `Symbol`值不能与其他类型的值进行运算，会报错。

```javascript
let s1 = Symbol('jackdan');
"your symbol is " + s1
// Uncaught TypeError: Cannot convert a Symbol value to a string
`your symbol is ${s1}`
// Uncaught TypeError: Cannot convert a Symbol value to a string
```

- 但是，`Symbol`值可以显示转为字符串。

```javascript
let s = Symbol('jackdan');
String(s); // 'Symbol(jackdan)'
s.toString(); // 'Symbol(jackdan)'
```

- 另外，`Symbol`值也可以转为布尔值，但是不能转为数值。

```javascript
let s = Symbol();
Boolean(s); // true
!s // false

if (s) {
  // ...
}

Number(s); // TypeError
s + 2; // TypeError
```

------


### 对象类型(object type)
- 同时也称为复杂数据类型（红宝书）。
- ECMAScript中的对象其实就是**一组数据和功能的集合**。对象可以通过执行`new`操作符后跟要创建的对象类型的名称来创建。而创建`Object`类型的实例并为其添加属性和(或)方法，就可以创建自动逸对象，如下所示:

```javascript
/**
 * @description An Object is logically a collection of properties.
 * Each property is either a data property, or an accessor property:
 * A data property associates a key value with an ECMAScript language value and a set of Boolean attributes.
 * An accessor property associates a key value with one or two accessor functions, and a set of Boolean attributes. The accessor functions are used to store or retrieve an ECMAScript language value that is associated with the property.
*/
var obj = new Object();
obj // {}
```

- 这个语法与Java中创建对象的语法相似；但在ECMAScript中，如果不给构造函数传递参数，则可以省略后面的那一对圆括号。也就是说，在像前面这个示例一样不传递参数的情况下，完全可以省略那对圆括号(但这不是推荐的做法):

```javascript
var obj = new Object;
obj // {}
```

- 仅仅创建`Object`的实例并没有什么用处，但关键是要理解一个重要的思想:  即在ECMAScript中，（就像Java中的java.lang.Object对象一样）Object类型是所有它的实例的基础。换句话说，Object类型所具有的**任何属性和方法也同样存在于更具体的对象**中。
- Object对象自身用处不大，但是ECMAScript中的**所有对象都由这个对象继承**而来，Object对象中的所有属性和方法都会出现在其他对象中，所以理解了Object对象，就可以更好第理解其他对象。

- Object的每个实例都具有下列属性和方法。
- **属性**:
- `constructor`: 保存着用于创建当前对象的函数，`var obj = new Object();`构造函数(`constructor`)就是`Object()`。换句话说，`constructor`是对创建对象的函数的引用(指针)。对于`Object`对象，该指针指向原始的`Object()`函数。
- `__proto__`: *该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。*

- **方法**:
- `hasOwnProperty(propertyName)`: 用于检查**给定的属性**在当前对象实例中(**不是在实例的原型中**)是否存在。其中，作为参数的**属性名(propertyName)必须以字符串形式指定**(例如: `obj.hasOwnProperty("name")`)。
- `isPrototypeOf(object)`: 用于检查**传入的对象是否是另一个对象的原型**。
- `propertyIsEnumerable(propertyName)`: 用于检查**给定的属性是否能够使用`for-in`语句来枚举**。与`hasOwnProperty()`方法一样，作为参数的属性名必须以字符串形式指定。
- `toLocaleString()`: 返回对象的字符串表示，该字符串与执行环境的地区对应。
- `toString()`: 返回对象的字符串表示。
- `valueOf()`: 返回对象的字符串、数值或布尔值表示。通常与`toString()`方法的返回值相同。

```javascript
/**
 * @description 
*/
// constructor
var obj = new Object();
obj.constructor // ƒ Object() { [native code] }

//hasOwnProperty
obj.hasOwnProperty("name"); // false

var obj1 = new Object();
obj1.name = "jackdan";
obj1.hasOwnProperty("name"); // true

var obj2 = new Object();
obj2.name = 'jackdan';
function deleteProp() {
  obj2.newName = obj2.name;
  delete o.name;
}
obj2.hasOwnProperty('name');  // true
deleteProp();
obj2.hasOwnProperty('name');  // false

// isPrototypeOf
function Foo() {}
function Bar() {}
function Baz() {}
Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);
var baz = new Baz();
console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true

// propertyIsEnumerable 每个对象都有一个 propertyIsEnumerable 方法。此方法可以确定对象中指定的属性是否可以被 for...in 循环枚举，但是通过原型链继承的属性除外。如果对象没有指定的属性，则此方法返回 false。
const obj = new Object();
const arr = new Array();
obj.property1 = 42;
arr[0] = 42;

console.log(obj.propertyIsEnumerable('property1'));
// expected output: true
console.log(arr.propertyIsEnumerable(0));
// expected output: true
console.log(arr.propertyIsEnumerable('length'));
// expected output: false

// toLocaleString 该函数提供给对象一个通用的toLocaleString 方法，即使不是全部都可以使用它。
const obj = new Object();
console.log(obj.toLocaleString()); // "[object Object]"
console.log(obj.toString()); // "[object Object]"
console.log(obj.toLocaleString() === obj.toString()); // true
```

------

### 拓展

- `isPrototypeOf()`与`object instanceof constructor`
- 如果你有段代码只在需要操作继承自一个特定的原型链的对象的情况下执行，同`instanceof`操作符一样`isPrototypeOf()`方法就会派上用场，例如，为了确保某些方法或属性将位于对象上。

``` javascript
// isPrototypeOf() 与 instanceof 运算符不同。在表达式 "object instanceof AFunction"中，object 的原型链是针对 AFunction.prototype 进行检查的，而不是针对 AFunction 本身。
// instanceof 运算符用于检测构造函数的`prototype`属性是否出现在某个实例对象的原型链。
// instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
// object instanceof constructor
// 定义构造函数
function Cat(){}
function Dog(){}

var obj = new Cat();

console.log(obj instanceof Cat); // true，因为 Object.getPrototypeOf(obj) === Cat.prototype

console.log(obj instanceof Dog); // false，因为 Dog.prototype 不在 obj 的原型链上

console.log(obj instanceof Object); // true，因为 Object.prototype.isPrototypeOf(obj) 返回 true

console.log(Cat.prototype instanceof Object); // true，同上

Cat.prototype = {};
var obj1 = new Cat();

console.log(obj1 instanceof Cat); // true

console.log(obj instanceof Cat); // false，Cat.prototype 指向了一个空对象,这个空对象不在 obj 的原型链上.

Dog.prototype = new Cat(); // 继承
var obj2 = new Dog();
console.log(obj2 instanceof Dog); // true
console.log(obj2 instanceof Cat); // true 因为 Cat.prototype 现在在 obj2 的原型链上
```

------


> http://www.ecma-international.org/ecma-262/6.0/#sec-type

> https://en.wikipedia.org/wiki/Mixin