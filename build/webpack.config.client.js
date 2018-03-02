/**
 * Created by nimengwei on 2018/2/28.
 */

const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, '../client/app.js')
    },
    output: {
        filename: '[name].[hash].js', //name表示app，hash表示hash值
        path: path.join(__dirname, '../dist'),
        publicPath: '/public' //指定script标签src属性共有的路径前缀
    },
    module: {
        rules: [
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
    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname, '../client/template.html')
        })
    ]
}