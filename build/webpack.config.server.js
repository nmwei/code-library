/**
 * Created by nimengwei on 2018/3/2.
 * 服务端渲染打包配置
 */

const path = require('path');

module.exports = {
    target: 'node', //打包环境
    entry: {
        app: path.join(__dirname, '../client/server-entry.js')
    },
    output: {
        filename: 'server-entry.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/public',
        libraryTarget: 'commonjs2', //模块导出规范,commonjs2规范决定了打包之后的server-entry.js使用module.exports导出
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
    }
}
