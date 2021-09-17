# React组件间的通信

| 标题 | 内容|
| --- | --- |
| 通信情况 | React组件间的通信情况有哪些? |
| 方式 | React组件间的通信方式有哪些? |

# React组件存在的通信情况

## 父组件向子组件进行通信


```javascript
// 类组件 子
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul>
        <li>{props.name}</li>
        <li>{props.age}</li>
        <li>{props.height}</li>
      </ul>
    )
  }
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.integer.isRequired,
  height: PropTypes.integer.isRequired
}

// 类组件 父
import React, { Component } from 'react';
import CHild from './Child';

class People extends Component {
  constructor() {
    super()
    this.state = {
      name: "jackdan",
      age:L 18,
      height: 185
    }
  }

  render() {
    return (
      <Person name={this.state.name} age={this.state.age} height={this.state.height}></Person>
    )
  }
}

// 函数组件 16.8之后
function Person(props) {
  return (
    <ul>
      <li>{props.name}</li>
      <li>{props.age}</li>
      <li>{props.height}</li>
    </ul>
  )
}

export default Person;



import Person from './Person';

function People() {
  const [name, setName] = useState("jackdan");
  const [age, setAge] = useState(27);
  const [height, setHeight] = useState(185);
  
  return (
    <Person name={name} age={age} height={height}></Person>
  )
}
```

## 子组件向父组件进行通信

## 跨级组件之间进行通信

## 没有嵌套关系组件间进行通信

# React组件间的通信方式

## props