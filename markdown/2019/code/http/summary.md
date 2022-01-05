# HTTP(Hypertext Transfer Protocol) VS HTTPS(HyperText Transfer Protocol Secure)

| 标题 | 内容 |
| --- | --- |
| HTTP是什么? | 定义、概述、请求方法、版本发展 |
| HTTP原理是什么？| 引入、副作用 |
| 七层网络协议 | 定义、每层协议内容 |
| HTTPS | 定义、概述 |
| HTTP 替换为 HTTPS | 方法、副作用 |
| HTTPS 替换为 HTTP | 方法、副作用 |
| Web服务器 | Nginx、Apache、BFE |

## HTTP

### 定义
- **超文本传输协议**(英文: HyperText Transfer Protocol，缩写: HTTP)
- 是一种用于分布式、协作式和超媒体信息系统的**应用层协议**。HTTP是万维网(World Wide Web Consortium，W3C)的数据通信的基础。


### 概述

- HTTP是一个客服端(用户侧)和服务端(数据侧)之间请求和应答的标准，通常使用TCP协议。通过使用网页浏览器(Chrome、Firefox、IE...)、网络爬虫(WireShark...)或者其他的工具(Code...)，客户端发起一个HTTP请求到服务器上指定端口(默认端口为`80`)，我们称这个客户端为用户代理程序(user agent)，应答的服务器上存储着一些资源，比如HTML文件和图像,我们称这个应答服务器为源服务器(origin server)。在用户代理和源服务器中间可能存在多个“中间层”，比如代理服务器(正向或者反向)、网关或者隧道(tunnel)。
- 尽管TCP/IP协议是互联网上最流行的应用，但是在HTTP协议中并没有规定它必须使用或者它支持的协议层。事实上HTTP可以在任何互联网协议或者其他网络上实现。HTTP假定**其下层协议提供可靠的传输**。因此，任何能够提供这种保证的协议都可以被其使用，所以其在TCP/IP协议中使用TCP作为其传输层。
- 通常，由HTTP客户端发起一个请求，创建一个到服务器指定端口(默认是80端口)的TCP连接。HTTP服务器则在那个端口监听客户端的请求。一旦收到请求，服务器会向客户端返回一个状态，比如"HTTP/1.1 200 OK"，以及返回的内容，如请求的文件、错误信息、或者其他信息。
### 七层网络协议

## HTTPS


> https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE
> Thinking in JackDan