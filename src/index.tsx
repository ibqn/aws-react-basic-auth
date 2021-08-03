import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import reportWebVitals from './reportWebVitals'
import GlobalStyles from './components/global-styles'

import 'antd/dist/antd.css'

import Amplify from 'aws-amplify'
import config from './aws-exports'

Amplify.configure(config)

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
