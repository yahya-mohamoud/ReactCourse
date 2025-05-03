import React from 'react'
import padData from'./pads'
import { useState } from 'react'
import Pad from './Pad'

function App() {
    const [pads, setPads] = useState(padData)
    
    function toggle (id) {
        setPads(prev => prev.map(item => {
           return item.id === id ? {...item, on: !item.on} : item
        }))        
    }

    const btns = pads.map(pad => 
        <Pad key={pad.id} pad={pad} toggle={toggle}/>
    )

  return (
    <div className='pad-container'>
        {btns}
    </div>
  )
}

export default App