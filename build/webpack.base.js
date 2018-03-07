/**
 * Created by nimengwei on 2018/3/7.
 */
const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/' //指定script标签src属性共有的路径前缀
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      }
    ],
  },
}
