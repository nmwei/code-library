/**
 * Created by nimengwei on 2018/2/28.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'

//无法进行服务端渲染，服务端没有document.body
ReactDOM.render(<App/>, document.getElementById('root'))