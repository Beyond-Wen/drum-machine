import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Machine from './Machine'

function App() {
  return (
    <>
      <div className="title">
        <h1>Instrument Revolution</h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/:instrument/"
            element={
              <div className="instrument">
                <Machine />
              </div>
            }
          />
        </Routes>
      </div>
    </>
  )
}

export default App
