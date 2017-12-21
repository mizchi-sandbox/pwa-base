/* @flow */
import React from 'react'
import Label from '../atoms/Label'
import counterEnhancer from '../../enhancers/counterEnhancer'

export default counterEnhancer(props => {
  return (
    <div>
      <h1>Counter</h1>
      <Label text={props.value} />
      <button onClick={() => props.actions.increment()}>+</button>
    </div>
  )
})
