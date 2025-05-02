import React, { useState } from 'react'

function Pad({pad}) {
    const [on, setOn] = useState(pad.on)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
  return (
    <button 
    onClick={toggle}
    className={on ? "on" : undefined}
    style={{backgroundColor: pad.color}}></button>
  )
}

export default Pad