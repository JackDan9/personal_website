# Virtual Dom 虚拟DOM

| 标题       | 内容                                           |
| ---------- | ---------------------------------------------- |
| VirtualDOM | 为什么要有VirtualDOM?                          |
| VirtualDOM | 与真实DOM的区别?                               |
| VirtualDOM | VirtualDOM的优势                               |
| VirtualDOM | VirtualDOM实例                                 |
| VirtualDOM | VirtualDOM应用                                 |
| VirtualDOM | VirtualDOM的体现, React, Vue, Angular, Sevelte |


------
## VirtualDOM引入的原因

- 这里用过`Vue`和`React`可能都知道VirtualDOM的作用，避免真实DOM的频繁更新从而提升渲染效率，那么真实DOM和VirtualDOM效率究竟是怎么一回事了？这是我们需要好好研究的一门学问。

------
### 真实DOM - Real DOM

- DOM(Document Object Model)文档对象模型(直译过来的含义)，它是`HTML(HyperText Markup Language)`和`XML(Extensible Markup Language)`文档的变成接口。
- DOM提供了对**文档的结构化的表述**，并定义了一种方式**可以使从程序中对该结构进行访问**，从而改变文档的结构，样式和内容。
- DOM将文档解析为一个由节点和对象(包含属性和方法的对象)组成的结构集合。
- 总结来说，DOM会将web页面和脚本或者程序语言连接起来。
- DOM(Document Object Model)的含义有两层:

```md
1. 基于节点和对象来表示的文档模型(the object-based representation);
2. 操作这些节点和对象的API(常见的就是JavaScript脚本语言)
```

- 真实DOM的实例

```html
<!DOCTYPE html>
<html lane="en">
  <head>
    <meta charset="utf-8" />
    <title>document object model</title>
    <script type="text/javascript">
      // ul list 节点信息
      var list = document.getElementById("list");
      console.log("list: ", list);
      var firstLiItem = document.getElementsByClassName("li-item")[0];
      console.log("firstLiItem: ", firstLiItem);
      var secondLiItem = document.getElementsByClassName("li-item")[1];
      console.log("secondLiItem: ", secondLiItem);
      firstLiItem.textContent = 'Change Element li 1';
      secondLiItem.textContent = 'Change Element li 2';

      var newLiItem = document.createElement("li"); 
      newLiItem.classList.add("li-item");
      newLiItem.textContent = 'Element li 3';
      list.appendChild(newLiItem);
    </script> 
  </head>
  <body>
    <div>
      <h2>Hello Real DOM<h2>
      <ul id="list">
        <li class="li-item">Element li 1</li>
        <li class="li-item">Element li 2</li>
      </ul>
    </div>
  </body>
</html>
```

- 我们可以清晰得看出来，这是一棵树的结构->DOM树也叫做Parse树(分析树)，树的每个分支的终点都是一个节点(node)，每个节点都包含对象(text, 子节点)，包含一些节点属性(class, id)。这就是基于对象来表示对象。

```
html
  |—— head
  |—— |—— meta
  |—— |—— title
  |—— body
  |—— |—— div
  |—— |—— |—— h2("Hello Real DOM")
  |—— |—— |—— ul
  |—— |—— |—— |—— li("Element li 1")
  |—— |—— |—— |—— li("Element li 2")
```

- API(通常就是指JavaScript脚本)操作，如下是获取`ul`节点，更新`li`节点中已有的内容以及增加一个新的`li`节点到`ul`节点中。

```javascript
// ul list 节点信息
var list = document.getElementById("list");
console.log("list: ", list);

var firstLiItem = document.getElementsByClassName("li-item")[0];
console.log("firstLiItem: ", firstLiItem);
var secondLiItem = document.getElementsByClassName("li-item")[1];
console.log("secondLiItem: ", secondLiItem);
firstLiItem.textContent = 'Change Element li 1';
secondLiItem.textContent = 'Change Element li 2';

var newLiItem = document.createElement("li"); 
newLiItem.classList.add("li-item");
newLiItem.textContent = 'Element li 3';
list.appendChild(newLiItem);
```

- 单纯从代码出发并不能看出真实DOM的问题，我们只是对真实DOM有了一个认知和认识，我们还要继续往下去分析。

------

> Thinking in JackDan
