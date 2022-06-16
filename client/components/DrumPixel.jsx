import React from 'react'
import drumData from '../../data/drums'

function DrumPixel(props) {
  // props = {
  //   clickHandler: function randomDrum() {
  //     // length 12
  //     // 0 - 0.99999 x 12 = 0- 11.999999999999 = 0 - 11
  //     const randNum = Math.floor(Math.random() * (drum.Data.length))
  //     const audio = new Audio(`/sounds/drum-${randNum}.wav`)
  //     audio.play()
  //   },
  //   key: 1 or 2
  //   sound: './sounds/....wav',
  //   image: './images/....png'
  // }
  return (
    <div>
      <img
        src={props.image}
        alt={props.key}
        onClick={props.functionName}
        className="drum-img"
      />
    </div>
  )
  // onMouseEnter={randomDrum}
}

export default DrumPixel
