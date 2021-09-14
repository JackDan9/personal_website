# React - Initial Rendering(初始化渲染)

- 一下内容均从源码角度分析，UI更新本质上是数据更改(props或者state) = render(state)。React提供了一种直接且直观的方法，所有移动部分都以状态(states)的形式聚合，那么问题来了？React究竟是如何渲染的了？内部的渲染原理是什么样的？接下来我们一步一步的分析。

| 标题 | 内容 |
| --- | --- |
| JSX | JSX是如何生效的? |
| React.createElement | React.createElement工作原理 |
| ReactDOM.render | ReacrDOM.render工作原理 |


## JSX

- JSX: 一种在 JavaScript 代码中交织 HTML 标签的语法。

- ![create-react-app](https://github.com/facebook/create-react-app)创建的应用中的`App.js`，这就是JSX的写法案例。

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

- 这段代码能够在浏览器中直接运行生效吗？答案是否定的，那么JSX是如何生效的了，现在开始解答。
- 在编译时，JSX中定义的组件会被Babel编译成`React.createElement()`带有适当参数的函数形式。上面的`App.js`编译成:

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
        React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
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

- 这是浏览器执行的真实代码。
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
  <h1>Hello JackDan! Welcome to React!</h1>,
  document.getElementById('root');
)
```

## React.createElement



------

> https://holmeshe.me/bak/understanding-react-js-source-code-initial-rendering-I/
> JackDan Thinking