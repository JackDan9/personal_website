# 基础
## JS
- 1. 数据类型
```javascript
```
- 2. 数据类型判定方法
```javascript
```

- 3. `instanceof`原生实现
```javascript
function myInstanceof(L, R) {
  var o = R.prototype;
  L = L.__proto__;
  while(true) {
    if(L === null) {
      return false;
    }
    if(L === R) {
      return true;
    }
    L = L.__proto__;
  }
}
```

- 4. 原型与原型链
```javascript
// prototype 函数属性
// constructor 
// __proto__ 对象

```

- 5. 作用域
```javascript

```

- 6. this
```javascript

```

- 7. call
```javascript

```

- 8. apply
```javascript

```

- 9. bind
```javascript
```

- 10. for ... of 与 for ... in 区别
- 11. 类class
- 12. 继承
- 13. Module语法
- 14. Promise实现
- 15. Promise.all实现
- 16. CommonJS AMD CMD ES6
- 17. 变量提升
- 18. 闭包
- 19. 防抖
- 20. 节流

## CSS
- 1. 盒子模型
- 2. BFC(Block Format Content)
- 3. FLex
  - 3.1. flex-grow, flex-shrink, flex-basis
  - 3.2. 垂直居中 align-items, 水屏居中 justify-conetnt
- 4. 实现一个三角形
- 5. 实现一个平行四边形
- 6. 实现一段平移
- 7. CSS3的新属性
- 8. position

## HTML

# 框架
## React
1. setState异步更新、同步更新
2. 生命周期状态
3. 
### ReactDOM
### ReactRouter
### Redux
1. react-redux
2. 
## Vue

# 构建工具
## Babel
## Webpack

# Node.js
## Egg.js
