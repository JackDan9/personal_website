# jsonp

| 标题 | 内容 |
| jsonp定义 | 什么是jsonp? |
| jsonp作用 | jsonp作用 |
| jsonp实现 | jsonp实现 |


------

## jsonp实现

```javascript
/**
 * @description 
*/
function jsonp(req) {
  var script = document.createElement('script');
  var url = req.url + '?callback=' + req.callback.name;
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
```

```javascript
/**
 * @description 
*/
(function (global) {
  var id = 0;
  var container = document.getElementsByTagName("head")[0];

  function jsonp(options) {
    if(!options || !options.url) return;

    var scriptNode = document.createElement("script");
    var data = options.data || {};
    var url = options.url;
    var callback = options.callback;
    var fnName = "jsonp" + id++;

    data["callback"] = fnName;

    var params = [];
    for(var key in data) {
      params.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    url = url.indexOf("?") > 0 ? (url + "&") : (url + "?");
    url += params.join("&");
    scriptNode.src = url;

    // 传递的是一个匿名的回调函数，要执行的话，暴露为一个全局方法
    global[fnName] = function (ret) {
      callback && callback(ret);
      container.removeChild(scriptNode);
      delete global[fnName];
    }

    // 出错处理
    scriptNode.onerror = function () {
      callback && callback({error: "error"});
      container.removeChild(scriptNode);
      global[fnName] && delete global[fnName];
    }

    scriptNode.type = "text/javascript";
    container.appendChild(scriptNode);
  }

  global.jsonp = jsonp;

})(this);
```

------