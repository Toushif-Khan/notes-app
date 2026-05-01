import React, { useState } from 'react'
import {FaPlus} from "react-icons/fa"
import ColorChange from './helper/ColorChange'

function Sidebar({addnote}) {
    const[ShowColors ,setShowColors] = useState(true);
     const toggle =() => {
            setShowColors(prev => !prev)
     }

    
  return (
    <div className='side'>
        <div>
        <button className='add'onClick={toggle}>
            <FaPlus/>
        </button>
       <p>Add notes</p>
       <div>{ShowColors && <ColorChange addnote={addnote}/>}</div>
        </div>
    </div>
  )
}

export default Sidebar