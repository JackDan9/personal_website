# SCU shouldComponentUpdate

- React默认: **父组件有更新，子组件无条件更新!!**。如果需要父组件有更新而子组件不更新是React默认就行不通了，那怎么办了？往下走。
- 

```javascript
shouldComponentUpdate(nextProps, nextState) {
  if(nextProps.text !== this.props.text) {
    return true;
  }
  return false;
}
```
