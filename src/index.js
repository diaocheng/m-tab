import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'
import 'animate.css'

import App from './App'
import store from './store'

ReactDOM.render(
  <App store={store} />,
  document.querySelector('#app')
)
