import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyled } from './style.js';
import { GlobalIcon } from './statics/iconfont/iconfont'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyled />
    <GlobalIcon />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
