import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="homepage">
      <h1>Choose your instrument</h1>
      <div>
        <Link to="/Drum" className="nav-items">
          <img src="./images/drum-set.png" alt="drum set" />
        </Link>
      </div>
      <div>
        <Link to="/Guitar" className="nav-items">
          <img src="./images/guitar.png" alt="flying v guitar" />
        </Link>
      </div>
      <div>
        <Link to="/Keyboard" className="nav-items">
          <img src="./images/keyboard.jpg" alt="piano keyboard" />
        </Link>
      </div>
    </div>
  )
}

export default Home
