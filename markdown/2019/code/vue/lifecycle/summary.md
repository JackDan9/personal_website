# Vue生命周期

| 标题 | 内容 |
| --- | --- |
| Vue版本 ｜ 2.6 ｜
| 总览 | 生命周期总览 |
| 分析 | 生命周期的作用，特点 |
| 对比源码实现 | 参照Vue源码实现一下各个生命周期 |

------

## 总览

- 如下图:

[lifecycle](./images/lifecycle.png)


### new Vue

```html
<div id="app">
  {{ message }}
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: "Hello JackDan"
  }
})
```

```javascript
// 源码解析
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)
```



