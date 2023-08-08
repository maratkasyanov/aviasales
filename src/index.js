import { createStore, applyMiddleware } from 'redux'
import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import { Provider } from 'react-redux'
import redducer from './reducer'
import App from './components/app'
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
const store = createStore(redducer,composeWithDevTools(applyMiddleware(thunk)))


  ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>
  , document.getElementById('root'))



