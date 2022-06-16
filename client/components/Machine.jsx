import React, { useState } from 'react'
import DrumPixel from './DrumPixel'
import drumData from '../../data/drums'

function Machine() {
  return (
    <div className="pixels">
      {drumData.map((pixel, i) => {
        const [color, setColor] = useState('white')
        const colors = ['blue', 'green', 'yellow', 'white', 'black']

        function changeColor() {
          const randNum = Math.floor(Math.random() * colors.length)
          setColor(colors[randNum])
        }

        function randomDrum() {
          // length 12
          // 0 - 0.99999 x 12 = 0- 11.999999999999 = 0 - 11
          const randNum = Math.floor(Math.random() * drumData.length)
          const audio = new Audio(`/sounds/drum-${randNum}.wav`)
          audio.play()
        }

        function rightClHandler(e) {
          e.preventDefault()
          randomDrum()
          changeColor()
        }

        function changeColorToWhite() {
          setColor('white')
        }

        return (
          <DrumPixel
            key={pixel.drumId}
            sound={pixel.sound}
            image={pixel.image}
            index={i}
            color={color}
            rightClickFunc={rightClHandler}
            changeColorToWhite={changeColorToWhite}
          />
        )
      })}
    </div>
  )

}
export default Machine
