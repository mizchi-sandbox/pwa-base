/* @flow */
import React from 'react'
import { Link } from 'preact-router/match'

export type Props = {}

export default function Header({  }: Props) {
  return (
    <header>
      <Link href="/">Home</Link>
      |
      <Link href="/about">About</Link>
      |
      <Link href="/counter">Counter</Link>
      <hr />
    </header>
  )
}
