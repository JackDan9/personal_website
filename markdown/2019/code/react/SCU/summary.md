# SCU shouldComponentUpdate

| 标题 | 内容 |
| --- | --- |
| SCU | 为什么需要SCU? 定义、原理、使用方式 |

## 源码(react版本，类组件的版本)

```javascript

```

## Example 

```javascript
export class SampleComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return <div className={this.props.className}>foo</div>;
  }
}
```

- React默认: **父组件有更新，子组件无条件更新!!**。如果需要父组件有更新而子组件不更新是React默认就行不通了，那怎么办了？往下走。
- 

```javascript
/**
*/
shouldComponentUpdate(nextProps, nextState) {
  if(nextProps.text !== this.props.text) {
    return true;
  }
  return false;
}
```

> Thinking in JackDan