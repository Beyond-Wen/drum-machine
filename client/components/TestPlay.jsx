import React, { useState } from 'react'
function TestPlay() {
  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  function randomDrum() {
    const audio = new Audio(`/sounds/drum-${random(1, 12)}.wav`)
    return audio.play()
  }

  const [drum, setDrum] = useState(randomDrum())
  const changeDrum = () => {
    setDrum({ drum })
  }

  return (
    <button id="play" onClick={changeDrum}>
      play
    </button>
  )
}

export default TestPlay
