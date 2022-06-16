import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const instruments = ['Drum', 'Guitar']
  return (
    <div className="nav-bar">
      <h2>Nav</h2>
      <ul>
        <li key="home">
          <Link className="home-button" to="/">
            Home
          </Link>
        </li>
        {instruments.map((instrument, i) => {
          return (
            <li key={i}>
              <Link to={`/${instrument}`} className="nav-items">
                {instrument}
                {instrument !== 'Drum' && <div>(coming soon)</div>}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Nav
