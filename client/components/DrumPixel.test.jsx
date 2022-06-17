import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import DrumPixel from './DrumPixel'
import Machine from './Machine'

describe('<Machine />', () => {
  it('changes colour overlay on rightclick', () => {
    render(<Machine />)
    const tile = screen.getAllByRole('img')[0]
    console.log(tile.style)
    // screen.debug()
    fireEvent.contextMenu(tile)
    const img = screen.getAllByRole('img')[0]
    console.log(img.style)
    expect(img.style).not.toContain(
      'filter: opacity(1) drop-shadow(0 0 0 white);'
    )
  })
})
