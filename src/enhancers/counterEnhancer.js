/* @flow */
import type { State as RootState } from '../../reducers'
import { bindActionCreators } from 'redux'
import { compose, pure, type HOC } from 'recompose'
import { connect } from 'react-redux'
import * as CounterActions from '../reducers/counter'

type Props = {
  value: number,
  actions: { increment: Function }
}

const connector = connect(
  (state: RootState) => state.counter,
  dispatch => ({ actions: bindActionCreators(CounterActions, dispatch) })
)

const enhancer: HOC<Props, {}> = compose(connector, pure)

export default enhancer
