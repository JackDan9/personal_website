# immutable详解

| 标题 | 内容 |
| --- | --- |
| immutable | imutable定义、作用与特点 |
| immutable | imutable原理 |
| immutable | imutable在React中的使用和实现 |
| imutable | 模拟imutable实现 |

## imutable定义、作用与特点

> Shared mutable state is the root of all evil(共享的可变状态是万恶之源)

- 从JavaScript对象的Mutable特性入手去对比、分析和理解，以此来得出immutable的定义、作用与特点。

- immutable字面含义是不可变的，固定的，那么它的反义就是mutable(可变的)，这也是JavaScript中对象的特点。如下代码所示:

```javascript
var obj = {
  a: 1
};

console.log(obj); // Output: { a: 1 }

obj.a = 2;
obj.b = 3;

console.log(obj); // Output: { a: 2, b: 3 } mutable特性
```

- 可能有人会问了，我正常修改这个对象的值会有什么问题了，问题会在下面:

```javascript
var obj = {
  a: 1
};

var copy_obj = obj; // shallow copy 浅拷贝obj对象到copy_obj
copy_obj.a = 2;
copy_obj.b = 3;

console.log(copy_obj); // output: { a: 2, b: 3 }
console.log(obj); // output: { a: 2, b: 3 }
```

- 浅拷贝(引用数据类型赋值)可以节省内存，但是当我的应用非常复杂的时候或者在多人协同开发的时候这是灾难性的噩梦，因为你不知道你的对象里面有什么属性或者对象属性究竟被谁修改了，所以JavaScript对象带来的Mutable特性优势使用起来其实得不偿失。
- 我们其实也可以用deepCopy(lodash中的deepCopy或者如下所示)去拷贝对象，

```js

```

- 但是deepCopy(深拷贝)会带来**CPU和内存的浪费**，这也是JS在CPU密集型任务处理上需要考虑的问题。

- 以上的问题如何解决了？其实Immutable可以非常好的解决此类问题。
