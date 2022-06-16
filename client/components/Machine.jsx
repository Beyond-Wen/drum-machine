import React, { useDebugValue } from 'react'
import DrumPixel from './DrumPixel'
import drumData from '../../data/drums'

function Machine() {
  function randomDrum() {
    // length 12
    // 0 - 0.99999 x 12 = 0- 11.999999999999 = 0 - 11
    const randNum = Math.floor(Math.random() * drum.Data.length)
    const audio = new Audio(`/sounds/drum-${randNum}.wav`)
    audio.play()
  }

  return (
    <>
      {drumData.map((pixel) => {
        return (
          <DrumPixel
            clickHandler={randomDrum}
            key={pixel.drumId}
            sound={pixel.sound}
            banana={pixel.image}
          />
        )
      })}
    </>
  )

  // return (
  //   <>
  //     {drumData.map((pixel) => (
  //       <DrumPixel
  //         key={pixel.drumId}
  //         sound={pixel.sound}
  //         image={pixel.image}
  //         functionName={randomDrum}
  //       />
  //     ))}
  //   </>
  // )

  /* <Pixel img={} sound={} id{} */
}
export default Machine
