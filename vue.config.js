// webpack.core.js
// const Config = require('webpack-chain');
// const config = new Config();
const resolve = dir => path.join(__dirname, dir);
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
// const StylelintPlugin = require("stylelint-webpack-plugin");

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const fs = require("fs");

const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

const IS_DEV = ["development"].includes(process.env.NODE_ENV);

module.exports = {
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // 生产环境修改配置
  //     config.mode = "production";
  //   } else {
  //     // 测试环境修改配置
  //     config.mode = "development";
  //   }
  // },
  chainWebpack: config => {
    //二者选其一即可
    // config.plugin('dll-reference-plugin')
    //   .use(webpack.DllReferencePlugin)
    //   .tap(options => {
    //     options[0] = {
    //       context: __dirname,
    //       // manifest就是我们在第2步中打包出来的json文件
    //       manifest: require(path.join(__dirname, `./vendor-manifest.json`))
    //     }
    //     return options
    //   });
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"));
    
    // ts组件
    const tsRule = config.module.rule("ts")
    tsRule.uses.clear()
    tsRule.exclude.add(/node_modules/)
    tsRule
      .test(/\.ts$/)
      .use("ts-loader")
      .loader("ts-loader")
      .options({
        // Needed for <script lang="ts"> to work in *.vue files; see https://github.com/vuejs/vue-loader/issues/109
        appendTsSuffixTo: [ /\.vue$/ ]
      })
      .end()
      .use("tslint-loader")
      .loader("tslint-loader")
      .end()
    // markdown 组件
    const mdRule = config.module.rule("md");
    mdRule.uses.clear();
    mdRule.exclude.add(/node_modules/);
    mdRule
      .test(/\.md$/)
      .use("html-loader")
      .loader("html-loader")
      .end()
      .use("markdown-loader")
      .loader("markdown-loader")
      .options({})
      .end()
    // if(IS_PROD) {

    // }
    // if(IS_PROD) {
    //   config.module
    //     .rule("images")
    //     .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    //     .use("image-webpack-loader")
    //     .loader("image-webpack-loader")
    //     .options({
    //       mozjpeg: { progressive: true, quality: 65 },
    //       optipng: { enabled: false },
    //       pngquant: { quality: [0.65, 0.90], speed: 4 },
    //       gifsicle: { interlaced: false }
    //     });
    // }
  },
  configureWebpack: config => {
    if(IS_PROD) {
      config.plugins.push(
        // new webpack.DllReferencePlugin({
        //   context: process.cwd(),
        //   manifest: require('./public/vendor/vendor-manifest.json')
        // }),
        // new HtmlWebpackPlugin(),
        // new AddAssetHtmlPlugin({
        //   // dll文件位置
        //   filepath: path.resolve(__dirname, './public/vendor/*.js'),
        //   // dll 引用路径
        //   publicPath: './vendor',
        //   // dll最终输出的目录
        //   outputPath: './vendor'
        // }),
        new CompressionPlugin({
          // test: /\.(js|css|html|svg|jpg|png)$/,
          test: /\.(js|css|html|png|svg|jpg|gif)$/,
          algorithm: "gzip",
          filename: "[path].gz",
          threshold: 0,
          minRatio: 0.8,
          deleteOriginalAssets: false
        })
        
      )
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  devServer: {
    // overlay: { // 让浏览器 overlay 同时显示警告和错误
    //   warnings: true,
    //   errors: true
    // },
    // open: false, // 是否打开浏览器
    // host: "localhost",
    // port: "8080", //
    // https: false,
    // hotOnly: false, // 热更新
    proxy: {
      "/api": {
        target: "http://192.168.1.224:8080", // 目标代理接口地址
        secure: false,
        changeOrigin: true, // 开启代理, 在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
        pathRewrite: {
          "^/api": "/"
        }
      },
    }
  }
}
