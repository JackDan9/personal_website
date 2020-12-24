// webpack.core.js
// const Config = require('webpack-chain');
// const config = new Config();
const resolve = dir => path.join(__dirname, dir);
const webpack = require("webpack");
// const StylelintPlugin = require("stylelint-webpack-plugin");

const path = require("path");
// const fs = require("fs");

const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);

const IS_DEV = ["development"].includes(process.env.NODE_ENV);

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境修改配置
      config.mode = "production";
    } else {
      // 测试环境修改配置
      config.mode = "development";
    }
  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"));
    
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
  },
  // chainWebpack: config => {
  //   // Markdown Loader
  //   config.module
  //     .rule('md')
  //     .test(/\.md$/)
  //     .use('html-loader')
  //       .loader('html-loader')
  //       .end()
  //     .use('markdown-loader')
  //       .loader('markdown-loader')
  //       .tag(options => {
  //         // 修改它的选线
  //          return options
  //       })
  //       .end()
  // },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
