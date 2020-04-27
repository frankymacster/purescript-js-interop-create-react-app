import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const Main = require('./output/Main/index')

const store = Main.store()

const render =
  state =>
    () =>
      ReactDOM.render(
        <App
          state={state}
          dispatch={store.dispatch}
        />,
        document.getElementById('root')
      )

store.subscribe(render)()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
