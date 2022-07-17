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

- 这个时候可能有人会问，`_init`走到哪里去了，也没有看到Vue Function中存在`_init`的方法，其实`new Vue({})`之后，再次复习一下`new`的操作过程，如下:

```javascript
// 1. 创建一个空的简单 JavaScript 对象（即{}）；
// 2. 为步骤 1 新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
// 3. 将步骤 1 新创建的对象作为this的上下文 ；
// 4. 如果该函数没有返回对象，则返回this。
// 所以这个是this 指向了Vue自身，我们可以继续源码研究发现Vue.prototype._init方法
// Vue.prototype._init方法是在initMixin(Vue)中的，我们看一下
let uid = 0

export function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    // a uid
    vm._uid = uid++

    let startTag, endTag
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = `vue-perf-start:${vm._uid}`
      endTag = `vue-perf-end:${vm._uid}`
      mark(startTag)
    }

    // a flag to avoid this being observed
    vm._isVue = true
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options)
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm)
    } else {
      vm._renderProxy = vm
    }
    // expose real self
    vm._self = vm
    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created')

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false)
      mark(endTag)
      measure(`vue ${vm._name} init`, startTag, endTag)
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
}
```



