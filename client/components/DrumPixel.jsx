import React, { useEffect, useState } from 'react'

function DrumPixel(props) {

  function staticAudio(e) {
    e.preventDefault()
    const audio = new Audio(`${props.sound}`)
    audio.play()
    if (props.color !== 'white') {
      props.changeColorToWhite()
    }
  }

  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    props.color === 'white' ? setOpacity(1) : setOpacity(0.7)
  }, [props.color])

  return (
    <img
      src={props.image}
      alt={`drum${props.index}}`}
      // onMouseDown={props.clickHandler}
      onMouseDown={staticAudio}
      className="pixel"
      style={{
        filter: `opacity(${opacity}) drop-shadow(0 0 0 ${props.color})`,
      }}
      onContextMenu={props.rightClickFunc}
      button={props.auxClickFunc}
    />
  )
  // onMouseEnter={randomDrum}
}

export default DrumPixel
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