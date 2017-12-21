/* @flow */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './molecules/Header'
import Home from './organisms/Home'
import About from './organisms/About'
import Counter from './organisms/Counter'
import NotFound from './organisms/NotFound'

export default function organisms() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/counter" exact component={Counter} />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  )
}
