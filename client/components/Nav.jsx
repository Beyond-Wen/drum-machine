import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const instruments = ['Drum', 'Guitar']
  return (
    <div className="nav-bar">
      <h2>Nav</h2>
      <ul>
        {instruments.map((instrument, i) => {
          return <li key={i}>
            <Link to={{instrument}}>{instrument}</Link></li>
        })}
      </ul>
    </div>
  )
}

export default Nav
