/* @flow */
require('babel-polyfill')
const { Provider } = require('react-redux')
const Routes = require('../components/Routes').default
const createStore = require('../store/create').default
const { Router } = require('preact-router')
const render = require('preact-render-to-string')
const { createElement: $ } = require('preact-compat')

module.exports = (mode /*: string */) => {
  switch (mode) {
    case 'preact': {
      return render(
        $(Provider, { store: createStore() }, $(Router, {}, $(Routes, {})))
      )
    }
  }
  return ''
}
