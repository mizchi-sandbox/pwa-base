/* @flow */
import { combineReducers } from 'redux'
import counter from './counter'

const rootReducer = combineReducers({ counter })

export type State = $Call<typeof rootReducer>

export default combineReducers({ counter })
