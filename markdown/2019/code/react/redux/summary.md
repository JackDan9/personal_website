# redux

- React 有props和state:

- 1. props意味着父级分下来的属性
- 2. state意味着组件内部可以自行管理的状态，并且整个React没有数据向上回溯的能力，这就是react的单向数据流

- **React根本无法让两个组件互相交流**，使用对方的数据，react的通过层级传递数据的这种方法是非常难受的，这个时候，迫切需要一个机制，**把所有的state集中到组件顶部**，**能够灵活的将所有state各取所需的分发给所有的组件**，是的，这就是redux。

## 定义

- 1. Redux的诞生是为了给React应用提供[可预测化的状态管理]机制。
- 2. Redux会将整个应用状态(其实也就是数据)存储到了一个地方，称为store
- 3. 这个store里面保存一棵状态树(state treee)
- 4. 组件改变state的唯一方法是通过调用store的dispatch方法，触发一个action，这个action被对应的reducer处理，于是state完成更新
- 5. 组件可以派发(dispatch)行为(action)给store，而不是直接通知其它组件
- 6. 其他组件可以通过订阅store中的状态(state)来刷新自己的视图

### 使用步骤

#### 创建reducer
- 1. 可以使用单独的一个reducer，也可以将多个reducer合并为一个reducer，即：combineReducers()
- 2. action发出命令后将state放入reducer加工函数中，返回新的state，对state进行加工处理

#### 创建action
- 1. 用户是接触不到state的，只能有view触发，所以，这个action可以理解为指令，需要发出多少动作就有多少指令
- 2. action是一个对象，必须有一个叫type的参数，定义action类型

#### 创建的store，使用createStore方法

- 1. store可以理解为有多个加工机器的总工厂
- 2. 提供subscribe，dispatch，getState这些方法

```javascript
import { createStore } from 'redux';

/**
 * 
*/
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decrementd':
      return { value: state.value - 1 }
    default:
      return state
  }
}

let store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}
```
