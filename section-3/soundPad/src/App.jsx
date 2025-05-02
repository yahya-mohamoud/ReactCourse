import Pad from "./Pad"
import padData from "./pads"
import { useState } from "react"

export default function App() {
  const [pads, setPads] = useState(padData)
  
   const btns = pads.map(pad => (
      <Pad padColor={pad.color} key={pad.id}/>
   ))


    return ( 
        <main>
            <div className="pad-container">
                {btns}
            </div>
        </main>
    )
}
