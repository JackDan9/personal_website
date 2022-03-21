# HTTP Headers

------

| 标题 | 内容 |
| --- | --- |
| HTTP Headers | HTTP Headers定义 |
| HTTP Headers | HTTP Headers种类 |
| HTTP Headers | HTTP Headers使用 |
| HTTP Headers | HTTP Headers配置(方案，内容以及结果示例) |

------

## HTTP Headers定义

- 我们都知道HTTP协议是应用层面向链接的协议，而HTTP Headers(消息头)允许客户端(client)和服务端(server)通过`request`和`response`传递**附加信息**，也就是我们常见的API接口请求。
- 形式就是`<Headers名称>:<Headers值>`，需要注意的是**Headers名称不区分大小写**，Headers值**不带换行符**并且Headers值**前面的引导空白会被忽略**。


------

## HTTP Headers种类

- 不同上下问进行种类区分

### General Headers

- 同时适用于请求`request`和响应`response`消息，但与最终消息主体`body`中传输的数据无关的消息头，也就是说不能应用于消息内容自身的HTTP Headers。
- 取决应用Application的**上下文环境**，通用首部可以是响应头部或者请求头部，但是不可以实体头部，再次强调了一遍了。

- 都有如下这些:

| 消息头 | 描述 | 更多信息 | HTTP 版本(引入版本) |
| --- | --- | --- | --- |
| Cache-Control | 控制缓存的行为 | - | - |
| Connection | 逐条首部，链接的管理 | - | - |
| Keep-Alive | 允许消息发送者暗示连接的状态，还可以用来设置超时时长和最大请求数 | 需要将 The Connection 首部的值设置为  "keep-alive" 这个首部才有意义。同时需要注意的是，在HTTP/2 协议中， Connection 和 Keep-Alive  是被忽略的；在其中采用其他机制来进行连接管理 | - |
| Date | 创建报文的日期时间 | - | - |
| Pragma | 报文指令 | - | - |
| Trailer | 报文末端的首部一览 | 列出将在消息正文之后在尾部块中传输的头。这允许服务器计算一些值，如Content-MD5：在传输数据时。请注意，Trailer：标头不得列出Content-Length :, Trailer：或Transfer-Encoding：headers | - |
| Transfer-Encoding | 指定报文主体的传输编码方式 | - | - |
| Upgrae | 升级为其它协 | - | - |
| Via | 代理服务器的相关信息 | - | - |
| Warning | 错误通知 | - | - |

### Request Headers

- 包含更多有关要获取的资源或者客户端本身信息的消息头

- 都有如下这些:

| 消息头 | 描述 | 更多信息 | HTTP 版本(引入版本) |
| --- | --- | --- | --- |
| Accept | 用户代理期望的MIME 类型列表 | [HTTP Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) | HTTP/1.1 | 
| Accept-Charset | 列出用户代理支持的字符集 | [HTTP Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) | HTTP/1.1 |
| Accept-Encoding | 列出用户代理支持的压缩方法 | [HTTP Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) | HTTP/1.1 |
| Accept-Language | 列出用户代理期望的页面语言 | [HTTP Content Negotiation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Content_negotiation) | HTTP/1.1 |
| Authorization | 包含用服务器验证用户代理的凭证 | - | - |
| Expect | 期待服务器的特定行为 | - | - |
| Form | 用户的电子邮箱地址 | - | - |
| Host | 请求资源所在的服务器 | - | - |
| If-Match | 比较实体标记（ETag） | - | - |
| If-Modified-Since | 比较资源的更新时间 | - | - |
| If-None-Match | 比较实体标记（与If-Match 相反 ）| - | - |
| If-Range | 资源未更新时发送实体 Byte 的范围 | - | - |
| If-Unmodified-Since | 比较资源的更新时间 | - | - |
| Max-Forwards | 最大传输逐跳数 | - | - |
| Proxy-Authorization | 代理服务器要求客户端的认证信息 | - | - |
| Range | 实体的字节范围请求 | - | - |
| Referer | 对请求中的 URI 的原始获取方 | - | - |
| TE | 传输编码的优先级 | - | - |
| User-Agent | HTTP 客户端程序的信息 | - | - |


### Response Headers

- 包含有关响应的补充信息，如其**位置**或者**服务器本身**(名称和版本等)的消息头。

- 都有如下这些:

| 消息头 | 描述 | 更多信息 | HTTP 版本(引入版本) |
| --- | --- | --- | --- |
| Accept-Ranges | 是否接受字节Bytes范围请求 | - | - |
| Age | 推算资源创建经过时间 | - | - |
| ETag | 资源的匹配信息(协商缓存中的消息头) | - | - |
| Location | 代理服务器对客户端的认证信息 | - | - |
| Proxy-Authenticate | 代理服务器对客户端的认证信息 | - | - |
| Retry-After | 对再次发起请求的时机要求 | - | - |
| Server | HTTP 服务器的安装信息 | - | - |
| Vary | 代理服务器缓存的管理信息 | - | - |
| WWW-Authenticate | 服务器对客户端的认证信息 | - | - |

### Entity Headers

- 包含有关实体主体的更多信息，比如**主体长度**(Content-Length)或者**其他MIME类型**

- 都有如下这些:

| 消息头 | 描述 | 更多信息 | HTTP 版本(引入版本) |
| --- | --- | --- | --- |
| Allow | 资源可支持的 HTTP 方法(GET, POST, PUT, DELETE, OPTION) | - | - |
| Content-Encoding | 实体主体适用的编码方式 | - | - |
| Content-Language | 实体主体的自然语言 | - | - |
| Content-Length | 实体主体的大小（单位：Byte） | - | - |
| Content-Location | 替代对应资源的 URI | - | - |
| Content-MD5 | 实体主体的报文摘要 | - | - |
| Content-Range | 实体主体的位置范围 | - | - |
| Content-Type | 实体主体的媒体类型 | - | - |
| Expires | 实体主体的过期日期时间(强缓存设置参数) | - | - |
| Last-Modified | 资源的最后修改日期时间(强缓存的设置参数) | - | - |

------

- 不同处理方式分类

### 端到端消息头

- 请求的服务器(server)或者响应的客户端(client)**必须要接受到端到端消息头**，也就是是这类消息头必须被**传输到最终的消息接收者**。
- 中间的代理服务器**必须转发未经修改的端到端消息头**，并且**必须缓存它们**。

### 逐跳消息头

- 逐跳(不是逐条)消息头仅对单次传输连接有意义，不能通过代理或者缓存进行重新转发。这些消息头包括`Connection`, `Keep-Alive`, `Proxy-Authenticate`, `Proxy-Authorization`, `TE`, `Trailer`, `Transfer-Encoding`以及`Upgrade`。
- 注意: 只能使用`Connection`来设置逐跳消息头，也就是说如果我们需要使用逐跳消息头，需要结合`Connection`消息头配合使用。

- 通常有如下这些:

| 消息头 | 描述 | 更多信息 | HTTP 版本(引入版本) |
| --- | --- | --- | --- |
| Connection | - | - | - | 
| Keep-Alive | - | - | - | 
| Proxy-Authenticate | - | - | - | 
| Proxy-Aruhoriztion | - | - | - | 
| Traller | - | - | - | 
| TE | - | - | - | 
| Transfer-Encoding | - | - | - | 
| Upgrade | - | - | - | 

------

> https://datatracker.ietf.org/doc/html/rfc6648
> https://www.iana.org/assignments/message-headers/message-headers.xhtml
> https://datatracker.ietf.org/doc/html/rfc4229
> https://www.iana.org/assignments/message-headers/message-headers.xhtml
> Thinking in JackDan