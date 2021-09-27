import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './redux/store.js';
import { authenticate } from './redux/actions.js';

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch(authenticate("hehe"))
//unsubscribe()
store.dispatch(authenticate(null))


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
