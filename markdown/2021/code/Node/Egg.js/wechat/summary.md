# Egg 服务搭建微信公众号的基础服务

| 标题 | 内容 |
| --- | --- |
| 引入 | 服务搭建(http|http(s)) |
| 配置 | Config配置 |
| 代码实现 | 控制层、路由  |

## 安装依赖

```shell
npm i co-wechat -s
# or 
yarn add co-wechat
# or
cnpm i co-wechat -s
```

## Config配置代码
```javascript
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * 微信公众号对接配置内容
 * 
 * config/config.default.js
 * 当然这里面也有一些其他的配置，这里只展示
 */
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
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  router.post('/wechat', controller.wechat.wechat.wechat);
  router.get('/wechat', controller.wechat.wechat.index);
}
```

## 控制层代码 

```javascript
'use strict';

/**
 * 微信公众号基础配置，接口接入
 * // app/controller/wehcat/wechat.js
 */

const wechat = require('co-wechat');
const crypto = require('crypto');

const Controller = require('egg').Controller;

class WechatController extends Controller {
  async index() {
    const { ctx } = this;
    
    const query = ctx.request.query;
    const signature = query.signature;
    const timestamp = query.timestamp;
    const nonce = query.nonce;
    const echostr = query.echostr;
    if (await this.check(timestamp, nonce, signature, 'weixin')) {
      this.ctx.body = echostr;
    } else {
      this.ctx.body = 'It is not from weixin';
    }
  }

  async check(timestamp, nonce, signature, token) {
    const tmp = [token, timestamp, nonce].sort().join('');
    const currSign = crypto.createHash('sha1').update(tmp).digest('hex');
    return (currSign === signature);
  }
}  

WechatController.prototype.wechat = wechat({
  token: 'weixin', // 基础配置的token信息
  appid: 'wx8a709a03e1584e6b', // 微信公众号的appid信息
  encodingAESKey: 'H6xJLje9n5JjgAFiCsmk0TfIkcUpiGrURAUxtnRui0G', // 微信公众号的encodingAESKey信息
}).middleware(async (message, ctx) => {
  console.log(message);
  return { type: 'text', content: 'Hello world!' };
})

module.exports = WechatController;
```


## 注意点

- 阿里云默认的ssl或者tsl证书比较缓慢，如果使用之后是URL请求超时或者服务根本没有走到egg服务里面，可以替换成http进行测试，或者使用付费的ssl或者tsl证书进行解析，我是亲自排查了很久这个原因才找到了

------

> [微信公众号基础服务对接说明](https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Access_Overview.html)
> [微信公众号接口调试](https://mp.weixin.qq.com/debug/cgi-bin/apiinfo)
> [源码位置](https://github.com/JackDan9/miniProgram/tree/master/better-work-server)