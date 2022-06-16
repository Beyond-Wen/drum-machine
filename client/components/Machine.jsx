import React from 'react'
import DrumPixel from './DrumPixel'
import drumData from '../../data/drums'

function Machine() {
  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  function randomDrum() {
    const audio = new Audio(`/sounds/drum-${random(1, 12)}.wav`)
    audio.play()
  }

  return (
    <>
      {drumData.map((pixel) => (
        <DrumPixel
          key={pixel.drumId}
          sound={pixel.sound}
          image={pixel.image}
          functionName={randomDrum}
        />
      ))}
    </>
  )

  /* <Pixel img={} sound={} id{} */
}
export default Machine
