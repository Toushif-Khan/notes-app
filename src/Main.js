import React from 'react'

function Main({notes , setnotes}) {
const updateNote = (id,field,value) =>{
    setnotes(prev=>
      prev.map((note) => note.id === id ? {...note,[field]:value} : note
      )
    )
}

const delNote = (id) =>{
      setnotes(prev=>prev.filter((note)=>note.id !== id))
}
  return (
    <div className='main'>
    {notes.map((item)=> (
      <div className='note' style={{backgroundColor:item.clr}}>
         <h1><input placeholder='title' value={item.title} onChange={(e)=> updateNote(item.id,"title",e.target.value)}></input></h1>
         <textarea placeholder='enter content' value={item.content} onChange={(e)=> updateNote(item.id,"content",e.target.value)}></textarea>
         <button className='del' onClick={()=>delNote(item.id)}>del</button>
      </div>
   ))}
        </div>
  )
}

export default Main