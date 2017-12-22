/* @flow */
import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../store/create'
import Routes from '../components/Routes'

export type Props = {}

export default function App(_props: Props) {
  const store = createStore()
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}
