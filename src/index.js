/* @flow */

import 'babel-polyfill'
import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const el = document.querySelector('main')
if (el) {
  ReactDOM.render(<App />, el)
}

require('preact/devtools')

// if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/sw.js')
//       .then(registration => {
//         console.log('SW registered: ', registration)
//       })
//       .catch(registrationError => {
//         console.log('SW registration failed: ', registrationError)
//       })
//   })
// }
