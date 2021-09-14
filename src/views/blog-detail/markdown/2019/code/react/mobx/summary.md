# Mobx

| 标题 | 内容 |
| --- | --- |
| Mobx | 什么是Mobx? |
| Mobx概念 |  |
| Mobx原则 |  |
| Mobx | Mobx VS Redux |
| Mobx | Mobx使用实例 |

## Mobx VS Redux

- 传统React使用的数据管理库Redux。Redux要解决的问题是统一数据流，数据流完全可控并可追踪。要实现目标，便需要进行相关的约束。Redux由此引出了`dispatch`, `action`, `reducer`等概念，对state的概念进行强约束。

```javascript
// 目录定义
reducers
  todoReducers.js
  filterReducers.js

```


------

## Mobx使用示例

```javascript
import { observable } from 'mobx';

var appState = observable({
  timer: 0
})


```

> https://github.com/mobxjs/mobx

