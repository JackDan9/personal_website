# AST (Abstract Syntax Tree)

| 标题 | 内容 |
| --- | --- |
| AST | AST定义，使用方式，原理 |
| AST | AST例子 |
| AST | AST应用 |

------

## AST 定义

- AST(Abstract Syntax Tree)抽象语法树，简称AST，它是源代码(也就是说它不仅仅是应用于JavaScript，同时还应用于其他语言，例如: Python，Rust等)语法结构的一种抽象表示。
- 它以树状的形式表现编程语言的语法结构，**树上的每个节点都表示源码中的一种结构**。
- 语法【抽象】: 指的是这里的语法并不会表示出真实语法中出现的每个细节。

------

## AST使用方式

- 我们常见的词法分析器以及语法解析器(它可以将JavaScript源码转换成AST)，比如下面实例中的esprima，当然还有其他的，例如: acorn、shift、traceur等

### 用途

- AST 抽象语法树的用途是非常广泛的，比如:
- vscode、atom、sublime中的**代码高亮**、**代码格式化**、**错误提示**、**代码自动补全**；
- [`eslint`](https://eslint.org/)、[`prettier`](https://prettier.io/)对代码错误或者风格的检查；
- [`babel`](https://babeljs.io/)转译`ES6`到`ES5`
...

- 所以说如果你想优化JavaScript的编译和运行速度，AST的了解是必不可少的。

------

## AST原理

- 包括源码读取->**词法分析->语法分析**->机器码。

### 编译流程

- JavaScript执行的过程首先是读取JavaScript文件中的**字符流**，其次通过**词法分析器生成`token`**，之后再通过**语法分析器(Parser)生成AST树**，最后转换为**机器码**执行。

```javascript
var name = "jackdan";
```

- 第一步就先读取上面的字符流`'var name = "jackdan"'`；
- 第二步分词: 将`'var name = "jackdan"'`整个代码字符串分割成最小的语法单元数组；如下:

```javascript
[
  { type: 'Keyword', value: 'var' },
  { type: 'Identifier', value: 'name' },
  { type: 'Punctuator', value: '=' },
  { type: 'String', value: '"jackdan"' }
]
```

- 第三步语法分析: 在分词的基础上建立分析语法单元之间的关系；如下:

```javascript
- Program
  type: "Program"
  - body: [
    - VariableDeclaration {
      type: "VariableDeclaration"
      - declarations: [
        - VariableDeclarator {
          type: "VariableDeclarator"
          - id: Identifier {
            type: "Identifier"
            name: "name"
          }
          - init: Literal {
            type: "Literal"
            value: "jackdan"
            raw: "jackdan"
          }
        }
      ]
      kind: "var"
    }
  ]
```

- 我们重点梳理一下原理中的**词法分析**和**语法分析**，接触过这两者的应该不会太过于陌生。

### 词法分析

- 词法分析：同时也称为扫描(scanner)，简单来说就是调用
next()方法，**一个一个字母的来读取字符**，然后与定义好的**JavaScript关键字符**做比较，生成对应的**Token**。Token是一个**不可分割的最小单元**。例如:

```javascript
var name = "jackdan";
// 先读取v，然后继续读取a,最后读取r组成一个var
// var这三个字符就识别为JavaScript中的关键字，作为一个整体，语义上就不能再被分解了，因此我们也视为一个Token
```

- 从上面的代码实例中不难得出，词法分析器里，每个**关键字是一个Token**，每个**标识符是一个Token**，每个**操作符是一个Token**，每个**标点符号也都是一个Token**。除此之外，还会**过滤掉程序中的注释和空白字符**（换行符、空格、制表符等）。
- 最终，我们看到整个代码都被分割进了一个tokens列表（或者说一维数组）。

```javascript
[
  { type: 'Keyword', value: 'var' },
  { type: 'Identifier', value: 'name' },
  { type: 'Punctuator', value: '=' },
  { type: 'String', value: '"jackdan"' }
]
```

### 语法分析

- 语法分析就是将**词法分析的tokns列表转化成有语法含义的抽象语法树结构**。同时去**验证语法**(高亮、自动补全等)，语法如果有错的话，抛出语法错误。

```javascript
- Program
  type: "Program"
  - body: [
    - VariableDeclaration {
      type: "VariableDeclaration"
      - declarations: [
        - VariableDeclarator {
          type: "VariableDeclarator"
          - id: Identifier {
            type: "Identifier"
            name: "name"
          }
          - init: Literal {
            type: "Literal"
            value: "jackdan"
            raw: "jackdan"
          }
        }
      ]
      kind: "var"
    }
  ]
```

------

## AST 实例

```javascript
// 源代码
var name = "jackdan";
```

```javascript
// AST 抽象语法树
/**
 * 
 *      +-----------+
 *      | assign(=) |
 *      +-----------+
 *      /            \
 *     /              \
 * +----+        +---------+
 * |name|        |"jackdan"|
 * +----+        +---------+
 * 
*/

```


```md
// 运行输出的结构代码
- Program
  type: "Program"
  - body: [
    - VariableDeclaration {
      type: "VariableDeclaration"
      - declarations: [
        - VariableDeclarator {
          type: "VariableDeclarator"
          - id: Identifier {
            type: "Identifier"
            name: "name"
          }
          - init: Literal {
            type: "Literal"
            value: "jackdan"
            raw: "jackdan"
          }
        }
      ]
      kind: "var"
    }
  ]
```

```javascript
> var esprima = require('esprima');
> var program = 'var name = "jackdan"';

> esprima.tokenize(program);
[
  { type: 'Keyword', value: 'var' },
  { type: 'Identifier', value: 'name' },
  { type: 'Punctuator', value: '=' },
  { type: 'String', value: '"jackdan"' }
]

> esprima.parse(program);
Script {
  type: 'Program',
  body: [
    VariableDeclaration {
      type: 'VariableDeclaration',
      declarations: [Array],
      kind: 'var'
    }
  ],
  sourceType: 'script'
}
```

> Thinking in JackDan