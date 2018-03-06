/**
 * Created by nimengwei on 2018/3/2.
 * 开启一个服务
 */
const express = require('express')
const fs = require('fs')
const path = require('path')
const ReactSSR = require('react-dom/server')

const isDev = process.env.NODE_ENV === 'development';

const app = express();

if(!isDev) {
    const serverEntry = require('../dist/server-entry').default
    const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
    //当请求public路径下资源时，映射到../dist文件夹
    app.use('/public', express.static(path.join(__dirname, '../dist')))

    app.get('*', function (req, res) {
        //浏览器发送的任何请求服务器端都返回服务端渲染的代码
        const appString = ReactSSR.renderToString(serverEntry)
        res.send(template.replace('<!--app-->', appString))
    })
} else {
    const devStatic = require('./utils/dev-static')
    devStatic(app)
}

app.listen(3333, function () {
    console.log("http://localhost:3333/");
})

