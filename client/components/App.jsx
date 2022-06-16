import React from 'react'

import Nav from './Nav'
import Machine from './Machine'
import TestPlay from './TestPlay'

function App() {
  return (
    <>
      <div className="title">
        <img src="/images/color_earth.gif" alt="A coloured globe of the earth spinning around on its axis"/>
        <h1>Drum Machine Woo</h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Nav />
        <Machine />
        <TestPlay />
      </div>
    </>
  )
}

export default App
