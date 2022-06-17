import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

// import DrumPixel from './DrumPixel'
import Machine from './Machine'

describe('<Machine />', () => {
  it('changes colour overlay on rightclick', () => {
    render(<Machine />)
    const tile = screen.getAllByRole('img')[0]
    console.log(tile.style.filter)
    // screen.debug()
    fireEvent.contextMenu(tile)
    const img = screen.getAllByRole('img')[0]
    console.log(img.style.filter)
    expect(img.style.filter).not.toContain('white')
  })
  it('changes colour back to white on leftclick', () => {
    render(<Machine />)

    const tile = screen.getAllByRole('img')[1]
    console.log(tile.style.filter)

    fireEvent.contextMenu(tile)
    const rightClicked = screen.getAllByRole('img')[1]
    console.log(rightClicked.style.filter)

    fireEvent.click(tile)
    const leftClicked = screen.getAllByRole('img')[1]
    console.log(leftClicked.style.filter)

    expect(leftClicked.style.filter).toContain('white')
  })
})
