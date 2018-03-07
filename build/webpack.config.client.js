/**
 * Created by nimengwei on 2018/2/28.
 */

const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');

//判断是否是开发环境
const isDev = process.env.NODE_ENV === 'development';

const config = webpackMerge(baseConfig, {
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  output: {
    filename: '[name].[hash].js', //name表示app，hash表示hash值
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ]
})

if(isDev) {
    config.entry = {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, '../client/app.js')
        ]
    }
    config.devServer = {
        host: '0.0.0.0',
        port:'8888',
        contentBase: path.join(__dirname, '../dist'),
        hot: true,
        overlay: {
            errors: true //出现错误时，在页面展示
        },
        publicPath: '/public',
        historyApiFallback: {
            index: '/public/index.html'
        }
    }
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
