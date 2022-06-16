import React from 'react'

function Nav() {
  const instruments = ['Drum', 'Guitar']
  return (
    <div className="nav-bar">
      <h2>Nav</h2>
      <ul>
        {instruments.map((instrument, i) => {
          return <li key={i}>{instrument}</li>
        })}
      </ul>
    </div>
  )
}

export default Nav
