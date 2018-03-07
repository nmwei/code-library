/**
 * Created by nimengwei on 2018/3/2.
 * 服务端渲染打包配置
 */

const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = webpackMerge(baseConfig, {
  target: 'node', //打包环境
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2', //模块导出规范,commonjs2规范决定了打包之后的server-entry.js使用module.exports导出
  }
})
