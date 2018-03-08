/**
 * Created by nimengwei on 2018/2/28.
 */
import React from 'react'
import ReactDOM from 'react-dom' //eslint-disable-line
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import App from './views/App'
import {AppContainer} from 'react-hot-loader' //eslint-disable-line
import appState from './store/app-state'

const root = document.getElementById('root')
// 无法进行服务端渲染，服务端没有document.body
const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider appState={appState}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
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
