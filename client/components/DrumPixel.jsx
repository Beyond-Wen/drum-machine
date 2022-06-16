import React from 'react'
import drumData from '../../data/drums'

function DrumPixel() {
  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  function randomDrum() {
    const audio = new Audio(`/sounds/drum-${random(1, 12)}.wav`)
    audio.play()
  }

  return (
    <div>
      {' '}
      {drumData.map((drum, i) => {
        console.log(drum.sound)
        function ogAudio() {
          const staticAudio = new Audio(drum.sound)
          staticAudio.play()
        }
        return (
          <div key={i} onClick={ogAudio}>
            play
          </div>
        )
      })}
    </div>
  )

  // onMouseEnter={randomDrum}
}

export default DrumPixel
