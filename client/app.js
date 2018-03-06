/**
 * Created by nimengwei on 2018/2/28.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {AppContainer} from 'react-hot-loader' //eslint-disable-line

const root = document.getElementById('root')
// 无法进行服务端渲染，服务端没有document.body
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const NextApp = require('./App.jsx').default; //eslint-disable-line
    render(NextApp);
  })
}
