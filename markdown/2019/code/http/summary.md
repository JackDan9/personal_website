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

### 请求方法
- HTTP/1.1 协议中共定义了八种方法(也叫动作)来以不同方法操作指定的资源；

- GET: 向指定的资源发出"Show"请求。使用GET方法应该**只用在读取资料**，而不应当被**用于产生“副作用”的操作**中，例如在**网络应用程序**(web application)中。其中一个原因是GET可能会被**网络爬虫**(web crawler)等随意访问。浏览器直接发出的GET只能由一个url触发。GET上要在url之外带一些参数就只能依靠url上附带querystring。
- HEAD: 与GET方法一样，都是向**服务器发出指定资源的请求**。只不过服务器将不传回资源的文本部分。它的好处在于，使用这个方法可以在不必传输全部内容的情况下，就可以获取其中“关于该资源的信息”(元信息或者元数据)。


#### 安全方法

### 七层网络协议

## HTTPS

### 定义
- 超文本传输安全协议(英语: HyperText Transfer Protocol Secure，缩写: HTTPS; 常称为HTTP over TLS、HTTP over SSL 或者 HTTP Secure)是一种通过计算机网络进行安全通信的**传输协议**。HTTPS经由HTTP进行通信，但利用SSL/TSL来加密数据包。
#### 目的
- HTTPS开发的主要目的，是提供对网站服务器的身份认证，保护交换资料的隐私与完整性。

### 概述

- HTTPS是在不安全的网络上创建一个安全通道，并可在使用适当的加密包和服务器证书可被验证且可被信任时，对窃听和中间人攻击提供合理的防护，这也是HTTPS的主要作用。
- HTTPS的信任基于预先安装在操作系统中的证书颁发机构(CA)。因此，与一个网站之间的HTTPS连线仅在这些情况下可被信任:
- 1. 浏览器正确地实现了HTTPS且操作系统中安装了正确且受信任的证书颁发机构;
- 2. 证书颁发机构仅信任合法的网站；
- 3. 被访问的网站提供了一个有效的证书，也就是说它是一个由操作系统信任的证书颁发机构签发的(大部分浏览器会对于无效的证书发出警告)
- 4. 该证书正确地验证了被访问的网站(例如，访问`https://www.example.com`时收到了签发给`example.com`而不是其他域名的证书)；
- 5. 此协议的加密层(SSL/TSL)能够有效地提供认证和高强度的加密。

### 历史发展
- HTTPS于1994年首次被网景公司(Netscape)提出，随后扩展到互联网上。
- 最初，HTTPS是与SSL(Secure Sockets Layer)一起使用的；在SSL演变为TSL(Transport Sockets Layer)时，HTTPS也由在2000年五月公布的RFC 2818正式确定下来。

> https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE
> https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%AE%89%E5%85%A8%E5%8D%8F%E8%AE%AE
> Thinking in JackDan