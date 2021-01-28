const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const AssetsPlugin = require('assets-webpack-plugin')

// dll文件存放的目录
const dllPath = 'public/vendor'

module.exports = {
  entry: {
    // 自己使用的第三方库
    vendor: ['axios', 'vue-router', 'vue/dist/vue.common.js', 'vuex', 'showdown']
  },
  output: {
    // 打包后输出路径，可以自行修改
    path: path.join(__dirname, dllPath),
    // filename: '[name]_[chunkhash].dll.js',
    // library: '[name]_[chunkhash]'
    filename: '[name]_[hash:6].dll.js',
    library: '[name]_[hash:6]'
  },
  plugins: [
    // 清楚之前的dll文件
    new CleanWebpackPlugin(),
    // 设置环境变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production'
      }
    }),
    // manifest.json 描述动态链接库包含了哪些内容
    new webpack.DllPlugin({
      // Tips: DllPlugin的name属性需要和library保持一致
      name: '[name]_[hash:6]',
      // name: '[name]_[chunkhash]',
      // 指定当前目录
      path: path.join(__dirname, dllPath, '[name]-manifest.json'),
      // 保持与 output.library 中名称一致
      // context需要和webpack.config.js保持一致, 这里是和vue.config.js中的webpack配置保持一致
      context: process.cwd()
    }),
    // new AssetsPlugin({
    //   filename: 'bundle-config.json',
    //   path: './'
    // })
  ]
}