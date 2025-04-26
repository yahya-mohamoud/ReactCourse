import React from 'react'
import image from '../src/assets/react.svg'

function Navbar() {
  return (
    <header>
        <nav>
            <img src={image} alt="logo" />
            <span>ReactFacts</span>
        </nav>
    </header>
  )
}

export default Navbar