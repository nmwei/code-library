/**
 * Created by nimengwei on 2018/3/2.
 * 开启一个服务
 */
const express = require('express')
const fs = require('fs')
const path = require('path')
const ReactSSR = require('react-dom/server')
const serverEntry = require('../dist/server-entry').default

const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')

const app = express()

//当请求public路径下资源时，映射到../dist文件夹
app.use('/public', express.static(path.join(__dirname, '../dist')))

app.get('*', function (req, res) {
    //浏览器发送的任何请求服务器端都返回服务端渲染的代码
    const appString = ReactSSR.renderToString(serverEntry)
    res.send(template.replace('<app></app>', appString))
})

app.listen(3333, function () {
    console.log("server is listening 3333")
})

