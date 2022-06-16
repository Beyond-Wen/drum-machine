import React from 'react'

import Nav from './Nav'
import Machine from './Machine'
import DrumPixel from './DrumPixel'

function App() {
  return (
    <>
      <div className="title">
        <h1>Drum Machine Woo</h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Nav />
        <Machine />
        <DrumPixel />
      </div>
    </>
  )
}

export default App
