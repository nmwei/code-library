/**
 * Created by nimengwei on 2018/2/28.
 */
import React from 'react'
import ReactDOM from 'react-dom' //eslint-disable-line
import { BrowserRouter } from 'react-router-dom'
import App from './views/App'
import {AppContainer} from 'react-hot-loader' //eslint-disable-line


const root = document.getElementById('root')
// 无法进行服务端渲染，服务端没有document.body
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    root,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default; //eslint-disable-line
    render(NextApp);
  })
}
