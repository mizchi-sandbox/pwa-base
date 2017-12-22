/* @flow */
import test from 'ava'
import counter from '../counter'

const nop: any = { type: 'nop' }

test(t => {
  const init = counter(undefined, nop)
  t.deepEqual(init, { value: 0 })
})
