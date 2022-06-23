# componentWillReceiveProps

| 标题 | 内容 |
| --- | --- |
| componentWillReceiveProps | 定义，作用 |
| componentWillReceiveProps | 弃用原因，熟悉原理 |
| getDerivedStateFromProps | 定义， 作用 |


------

## componentWillReceiveProps 定义

- 监听props修改，修改时更新计算某些数据
- 监听props修改，修改时更新/重制某些状态(state)

------

## componentWillReceiveProps 弃用原因

### 现象

- 通过vscode或者webstorm都会存在如下的提示，并且告诉你在16.3版本就已经被弃用了，进而被`getDerivedStateFromProps`替代。
- 原因: 仔细看说明我们可以知道，`componentWillReceiveProps`，我们都知道`componentWillReceiveProps`是同步的，当外部多个属性在很短的时间间隔之内多次变化，就会导致`componentWillReceiveProps`被**多次调用(called)**。**多次调用并不会被合并**，如果多次调用都会触发异步请求，那么可能会导致**多个异步请求阻塞**。
- 我们都知道`setState`操作是会用过`transaction`进行合并的，导致更新过程是批量(一批一批去触发更新)的，我们知道`React`中大部分的更新发起者都是`setState`，所以`render`触发的频率并不会非常频繁，同时也可以去看下`componentWillReceiveProps`的定义，我们也需要不非常频繁去`render`，因为会导致看起来的效果是闪屏或者卡顿。

```javascript
// Called when the component may be receiving new props. React may call this even if props have not changed, so be sure to compare new and existing props if you only want to handle changes.
// 

// Calling Component#setState generally does not trigger this method.

// Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps prevents this from being invoked.

// @deprecated — 16.3, use static getDerivedStateFromProps instead;

componentWillReceiveProps(): void
```

------


## getDerivedStateFromProps 定义

- `getDerivedStateFromProps` 声明周期的意思就是从props中获取state，其功能实际上就是将传入的props映射到state上面。
