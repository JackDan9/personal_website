# useState 组件状态管理

- `useState`是hooks中的一个方法，hooks是**React 16.8**中新增的特性(一系列新的方法)

| 标题 ｜ 内容 |
| --- | --- |
| hooks | 为什么要引入hooks ? |




## Hooks

1. class组件太难以理解，这里可能就要问了，为什么class组件太难以理解？如果对类本身不太理解，请到类的章节。请看下面的示例


```javascript
/**
 * 1. class本身是ES6引入进来，
*/
import React, { Component } from 'react';

class AddCount extends Component {
  construtor(props) {
    super(props);
  }
}

```




## 示例

```javascript
import React, { useState } from 'react';

```