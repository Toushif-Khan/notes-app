import React from 'react'

function ColorChange({addnote}) {
  return (
    <div className="btn-prime">
        <button className='btn' style={{backgroundColor:"lightpink"}} onClick={()=>addnote("lightpink")}> + </button>
        <button className='btn' style={{backgroundColor:"lightgreen"}} onClick={()=>addnote("lightgreen")}> + </button>
        <button className='btn' style={{backgroundColor:"lightblue"}} onClick={()=>addnote("lightblue")}> + </button>
        <button className='btn' style={{backgroundColor:"lightgrey"}} onClick={()=>addnote("lightgrey")}> + </button>
    </div>
  )
}

export default ColorChange