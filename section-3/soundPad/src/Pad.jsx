import React from 'react'

function Pad({pad, toggle}) {

  return (
    <button 
      onClick={() => toggle(pad.id)}
      className={pad.on == true ? "on": undefined}
      style={{backgroundColor: pad.color}}
    ></button>
  )
}

export default Pad