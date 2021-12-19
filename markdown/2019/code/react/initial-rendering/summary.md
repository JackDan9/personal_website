# React - Initial Rendering(初始化渲染)
- redux(redux-sag) / mobx / dva
- 以下内容均从源码角度分析，UI更新本质上是数据更改(props或者state) = render(state)。React提供了一种直接且直观的方法，所有移动部分都以 **状态(states)** 的形式聚合，那么问题来了？React究竟是如何渲染的了？内部的渲染原理是什么样的？接下来我们一步一步的分析。

- Babel: parsering(解析)，transform(转义)，generating(持续生成)

| 标题 | 内容 |
| --- | --- |
| JSX | JSX是如何生效的? |
| React.createElement | React.createElement工作原理 |
| ReactDOM.render | ReacrDOM.render工作原理 |


## JSX或者TSX

- 要想知道react是怎么渲染，没办法去避免对JSX或者TSX的认识。

- JSX: 一种在`JavaScript`代码中交织`HTML`标签的语法。

- [create-react-app](https://github.com/facebook/create-react-app)创建的应用中的`App.js`或者可以下载，这就是JSX的写法案例。

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img scr={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

- 这段代码能够在浏览器中直接运行生效吗？答案是 **否定** 的，或者可以在浏览器中验证一下是否可以运行这段代码，例如:

- 浏览器的规则其实依据W3C(HTML + CSS)以及ECMA规则，浏览器的引擎包括渲染引擎和JS引擎，以前是把渲染引擎和JS引擎合并一块(内核，比如: Trident(IE)、Gecko(firefox)、Blink(Opera)、Webkit(Safari，以前Google用，后来Google换成了Blink)....)，JS引擎(浏览器端)到目前为止还是只能分析ES5(ECMAScript 2013)的代码，应用到浏览器上。
- `create-react-app`生成的代码不仅仅不是ES5的代码，并且它还是HTML+JS/ES的代码，所以浏览器是肯定直接运用不了的。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="uft-8" />
    <title>test html</title>
    <script type="text/javascript">
      import React, { Component } from 'react';
      import logo from './logo.svg';
      import './App.css';

      class App extends Component {
        render() {
          return (
          <div className="App">
            <header className="App-header">
            <img scr={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        );
      }
    }

    export default App;
    </script>
  </head>
  <body>
    <div>Hello JackDan!</div>
  </body>
</html>
```

- 那么JSX是如何生效的了，现在开始解答。
- 在编译时，JSX中定义的组件会被`Babel`编译成`React.createElement()`带有适当参数的函数形式。
- `Babel`的配置:
```javascript
{
  "plugins": [
    ["transform-react-jsx", {
      "pragma": "dom" 
    }]
  ]
}
```
- `pragma`这里是好几种类型的参数可以配置，`stage-0`, `stage-1`, `stage-2`，这个参数是控制在你要转义的原始值(ES7, ES6, react, vue......)，在我们完整的一个项目里面，它可能既有ES6又有ES7或者说最新的JS代码，那这种代码也是需要转义之后浏览器才可以识别的代码，所以说Babel也分几个阶段去对应不同的规则。
- `dom`, 你要将你的代码转义出去的目标值(dom(浏览器可以识别、加载并且运行的代码), es5.......)

- 这块这里想简单理解一下，下面会详细介绍一下。

- 上面的`App.js`编译成:

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return React.createElement(
      'div',
      { className: 'App' },
      React.createElement(
        'header',
        { className: 'App-header' },
        React.createElement(
          'img', 
          { src: logo, className: 'App-logo', alt: 'logo' }
        ),
        React.createElement(
          'h1',
          { className: 'App-title' },
          'Welcome to React'
        )
      ),
      React.createElement(
        'p',
        { className: 'App-intro' },
        'To get started, edit ',
        React.createElement(
          'code',
          null,
          'src/App.js'
        ),
        ' and save to reload.'
      )
    );
  }
}

export default App;
```

- 1. 这是浏览器执行的真实代码。浏览器的Safari(Webkit), QQ浏览器(兼容模式Trident,  高速模式Webkit), Firefox(Gecko), Opera(Blink), Google(Webkit, Blink)。
- 2. Babel: 解析(Parse), 转义(transform), 持续输出/生成(Generate)
- 3. .bablerc / vue.config.json / .umijs /.umits
```json
{
  "transform-react-jsx": [
    "pragma": "dom"
  ]
}

// stage-0, stage-1, stage-2, react, vue, pragma
```

- 4. JSX => React.createElement的代码

- 下次讲之前复习一下。

- 在应用层，`App.js`这个组件将被渲染:

```javascript
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root');
)
```

- 这个嵌套的组件树有点过于复杂，不是一个理想的起点，所以我们现在先过滤掉它，转而看一些更加简单的东西——呈现一个简单的HTML元素。

```javascript
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1 style={{ "color": "blue" }}>Hello JackDan! Welcome to React!</h1>,
  document.getElementById('root');
)
```

## React.createElement —— 创建一个`ReactElement`

```javascript
import ReactDOM from 'react-dom';

ReactDOM.render(React.createElement(
  'h1',
  { style: {"color": "blue"} },
  'Hello JackDan! Welcome to React!'
), document.getElementById('root'));
```

- 这个流程是什么样的了?

- 第一步实际上并没有多大作用。它只是构造了一个`ReactElement`实例，其中填充了传递给**调用堆栈**的任何内容。结果数据结构为:

- 类似于一颗树的结构

| ReactElement[2] |
| --- | --- |
| type | TopLevelWrapper |
| props | child | ReactElement[1] |
| | N/A | |

- 调用栈是:

```javascript
React.createElement
  |=ReactElement.createElement(type, config, children)
    |-ReactElement(type,...,props)
```

- `React.createElement(type, config, children)`只是

```javascript
...
var createElement = ReactElement.createElement;
...

var React = {
...
  createElement: createElement.
...
};

module.exports = React;

// React@isomorphic/React.js
```

- `ReactElement.createElement(type, config, children)`进行了两步操作。
- 第一步: 拷贝`config`中的元素属性到`props`中
- 第二步: 拷贝`children`到`props.children`中
- 第三步: 拷贝`type.defaultProps`到`props`中


```javascript
...
// 第一步: 拷贝`config`中的元素属性到`props`中
if (config !== null) {
  ...过滤掉一下一些无关紧要的config属性...
  // 
  for(propName in config) {
    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
      props[propName] = config[propName];
    }
  }
}

// 第二步: 拷贝`children`到`props.children`中


const childrenLength = arguments.length - 2;
if (childrenLength === 1) {
  props.children = children; // 只有一个子属性是object
} else if (childrenLength > 1) {
  const childArray = Array(childrenLength);
  for (let i = 0; i < childrenLength; i++) {
    childArray[i] = arguments[i + 2]; // 多个子属性是一个对象数组
  }

  props.children = childArray;
}

// 第三步: 处理默认的props
if (type && type.defaultProps) {
  const defaultProps = type.defaultProps;
  for (propName in defaultProps) {
    if (props[propName] === undefined) {
      props[propName] = defaultProps[propName];
    }
  }
}

return ReactElement(
  type,
  key,
  ref,
  self,
  source,
  ReactCurrentOwner.current,
  props,
);
...

// ReactElement.createElement@isomorphic/classic/element/ReactElement.js
```

- 然后`ReactElement(type, ..., props)`原样复制`ReactElement`中的`type`和`props`并且返回一个实例.

```javascript
...
const ReactElement = function(type, key, ref, self, source, owner, props) {
  // 
  $$typeof: REACT_ELEMENT_TYPE,
  type: type, // 源代码中`h1`
  key: key, // 实例代码中还没有声明这个属性
  ref: ref, // 实例代码中还没有声明这个属性
  props: props,
  // props其实有两部分
  // { children: // 示例代码中'Hello JackDan! Welcome to React!', other props: { style: {"color": "blue"} } }
  _owner: owner, // 
}

- 

...

// https://github.com/facebook/react/blob/v15.6.2/src/isomorphic/classic/element/ReactElement.js
```

## ReactDOM.render() - 渲染组件



------

> https://holmeshe.me/bak/understanding-react-js-source-code-initial-rendering-I/

> JackDan Thinking