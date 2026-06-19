import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'


function App() {
  const [notes,setnotes] = useState([]);
  const fetchNotes = async () => {
    try {
      const res = await fetch("http://localhost:3000/notes");
      const data = await res.json();
      setnotes(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchNotes();
  },[]);

  const addnote = async (color) => {
     
    try {
      await fetch("http://localhost:3000/notes",
        {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          title:"",
          content:"",
          clr:color
        })
      });

        console.log("POST status:", Response.status)
      fetchNotes();

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div id='App'>
    <Navbar/>
    <Sidebar addnote={addnote}/>
    <Main notes={notes} setnotes={setnotes} fetchNotes={fetchNotes}/>
    <Footer/>
    </div>
  )
}

export default App