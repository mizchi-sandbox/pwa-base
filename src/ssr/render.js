/* @flow */
require('babel-polyfill')
const { Provider } = require('react-redux')
const { MemoryRouter } = require('react-router-dom')
const Routes = require('../components/Routes').default
const createStore = require('../store/create').default

module.exports = mode => {
  switch (mode) {
    case 'preact': {
      const render = require('preact-render-to-string')
      const { createElement: $ } = require('preact-compat')

      return render(
        $(
          Provider,
          { store: createStore() },
          $(MemoryRouter, {}, $(Routes, {}))
        )
      )
    }
    case 'react': {
      // const { createElement: $ } = require('react')
      // const { renderToString } = require('react-dom/server')
      // return renderToString(
      //   $(
      //     Provider,
      //     { store: createStore() },
      //     $(MemoryRouter, {}, $(Routes, {}))
      //   )
      // )
    }
  }
  return ''
}
