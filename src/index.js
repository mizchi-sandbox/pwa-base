/* @flow */
import 'babel-polyfill'
import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const el = document.querySelector('main')
if (el) {
  ReactDOM.render(<App />, el)
}

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    const registration = await navigator.serviceWorker.register('/sw.js')
    console.log('SW registered: ', registration)
  })
}
