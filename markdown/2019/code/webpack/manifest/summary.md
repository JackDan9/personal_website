# manifest vs runtime

| 标题 | 内容 |
| manifest存在原因 | 为什么需要manifest |
| manifest定义 | 什么是manifest |
| manifest特点 | manifest的作用 |

## 缓存

- 我们在使用webpack来打包我们**模块化后的应用程序**，最终会生成一个可以部署的`/dist`目录，然后把打包后的内容放置在此目录中。**只要`/dist`目录中的内容部署到`server`上，client端(浏览器)就能够访问此`server`的网站及其资源**。
- 但是，在最后一步获取资源是**比较耗费时间**的，这就是为什么了浏览器使用一种名为**缓存**的技术。可以**通过命中缓存**，以**降低网络流量**，使**网站加载速度更快**，然而，如果我们在**部署新版本时不更改资源的文件名**，浏览器可能会认为它没有被更新，就会**使用它的缓存版本**。由于缓存的存在，当你需要获取新的代码时，就会显得很棘手。

## manifest定义

- 我们经常在webpack配置中看到`manifest`的配置，或者说我们是否想过webpack和webpack插件似乎"知道"应该生成哪些文件，它是怎么知道了？



```javascript

```

## umi中的webpack-bundler源码书写

```javascript
import Config from 'webpack-chain';
export default async function getConfig() {
  let webpackConfig = new Config();
  if (config.manifest && !config.ssr) {
    webpackConfig
      .plugin('manifest')
      .use(require.resolve('webpack-manifest-plugin'), [
        {
          fileName: 'asset-manifest.json',
          ...config.manifest,
        },
      ]);
  }
}
```