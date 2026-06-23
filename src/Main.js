import React from 'react'

function Main({notes , setnotes , fetchNotes}) {
const updateNote = (_id,field,value) =>{
    setnotes(prev=>
      prev.map((note) => note._id === _id ? {...note,[field]:value} : note
      )
    )
}

const delNote = async (id) =>{

  try {
    await fetch(`https://notes-backend-a7z4.onrender.com/notes/${id}` , {
      method: "DELETE"
    });

  fetchNotes();
  } catch (error) {
    
      console.log(error);

  }
}

const saveNote = async(note) => {

  try {

  const response = await fetch(
    `https://notes-backend-a7z4.onrender.com/notes/${note._id}` ,
    {
      method:"PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: note.title,
        content: note.content,
        clr: note.clr 
      })
    }
  );  
  
  const data = await response.json();
  console.log("updated:" , data);

  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className='main'>
    {notes.map((item)=> (
      <div className='note' style={{backgroundColor:item.clr}} key={item.id}>
         <h1><input placeholder='title' value={item.title} onChange={(e)=> updateNote(item._id,"title",e.target.value)}></input></h1>
         <textarea placeholder='enter content' value={item.content} onChange={(e)=> updateNote(item._id,"content",e.target.value)}></textarea>
         <div className="note-actions">
         <button className='del' onClick={()=>delNote(item._id)}>del</button>
         <button className='save' onClick={()=>saveNote(item)}> save</button>
         </div>
      </div>
   ))}
        </div>
  )
}

export default Main