import React from 'react'
import drumData from '../../data/drums'

function DrumPixel(props) {
  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  return (
    <div>
      <img src={props.image} alt={props.key} onClick={props.functionName} />
    </div>
  )
  // onMouseEnter={randomDrum}
}

export default DrumPixel
