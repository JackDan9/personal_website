# EventLoop

| 标题 | 内容 |
| --- | --- |
| MacroTask | 宏任务 |
| MicroTask | 微任务 |
| 事件循环 | 执行顺序 |

## MacroTask 宏任务

- `整体代码<script></script>`, `setTimeout`, `setInterval`, `I/O`, `UI render`


## MicroTask 微任务

- `Promise`, `Object.observe`, `MutationObserver`


## 执行顺序

```javascript
new Promise(function(resolve) {
  console.log('外层宏事件2');
  resolve();
}).then(function() {
  console.log('微事件1');
}).then(function() {
  console.log('微事件2');
});
console.log('外层宏事件1');
setTimeout(function() {
  // 执行后，回调一个宏事件
  console.log('内层宏事件3');
}, 0)
```

```javascript
setTimeout(function() {
  // 执行后，回调一个宏事件
  console.log('内层宏事件1')
}, 0)
console.log('外层宏事件1')
new Promise(function(resolve) {
  console.log('外层宏事件2');
  resolve();
}).then(function() {
  console.log('微事件1');
}).then(function() {
  console.log('微事件2');
});
console.log('外层宏事件3')
```