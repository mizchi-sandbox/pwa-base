/* @flow */
import React from 'react'
import Header from './molecules/Header'
import Home from './organisms/Home'
import About from './organisms/About'
import Counter from './organisms/Counter'
import NotFound from './organisms/NotFound'
import { Router } from 'preact-router'

export default function organisms() {
  return (
    <div>
      <Header />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Counter path="/counter" />
        <NotFound default />
      </Router>
    </div>
  )
}
