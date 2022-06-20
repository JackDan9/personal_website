# Egg 服务搭建微信公众号的基础服务

| 标题 | 内容 |
| --- | --- |
| | |
| | |

## Config配置代码
```javascript
module.exports = appInfo => {
  config.wehcat = {
    token: 'token', // 基础配置的token信息
    appid: 'appid', // 微信公众号的appid信息
    encodingAESKey: 'encodingAESKey', // 微信公众号的encodingAESKey信息
  }
}
```

## 路由代码
```javascript

```

## 控制层代码 

```javascript

```

## 安装Middleware

```shell
npm i co-wechat -s
```


## 注意点

- 阿里云默认的ssl或者tsl证书比较缓慢，如果使用之后是URL请求超时或者服务根本没有走到egg服务里面，可以替换成http进行测试，或者使用付费的ssl或者tsl证书进行解析，我是亲自排查了很久这个原因才找到了

------

> [微信公众号基础服务对接说明](https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Access_Overview.html)
> [微信公众号接口调试](https://mp.weixin.qq.com/debug/cgi-bin/apiinfo)