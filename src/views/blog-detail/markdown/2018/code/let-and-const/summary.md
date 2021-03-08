
# let和const命令

| 标题 | 内容 |
| --- | --- |
| var | 为什么要减少var声明变量? |
| let and const | 为什么建议尽可能多的使用let和const声明变量? |


## 为什么需要let命令和const命令？

- 其实上面的疑问等价于为什么要减少var命令声明变量？那么如何来解答这个问题。其实从以下几方面解答即可。

### 1. 能否重复声明
### 2. 是否具有块级作用域
### 3. 是否存在变量声明提升问题(核心点)


## let命令
- ES6(ECMAScript 2015)新增了`let`命令，用于声明变量。其用法类似于`var`关键字，但是所声明的变量只在`let`命令所在的代码块内有效。如下所示:

```javascript
/**
 * @description 在代码块中分别用let和var声明了两个变量。
 * 然后在代码块外分别打印这两个变量a和b，结果let方式报错，var方式放回正确的值。
 * 结论: let声明的变量只在其所在代码块有效。
*/
{
  let a = 1;
  var b = 1;
}
console.log(a); // ReferenceError: a is not defined.
console.log(b); // 1
```

### for循环计数器

