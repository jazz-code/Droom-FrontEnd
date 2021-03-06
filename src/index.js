import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './stylesheets/main.scss'
import 'semantic-ui-css/semantic.min.css'

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { reducers } from './store/reducers/reducers'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById('root')
)
