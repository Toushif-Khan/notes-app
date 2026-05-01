import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'


function App() {
  const [notes,setnotes] = useState([]);
  const addnote = (color) => {
      const newnote = {
        id: Date.now(),
        title: "",
        content: "",
        clr: color
      }
      setnotes (prev=>[...prev,newnote])
  }
  return (
    <div id='App'>
    <Navbar/>
    <Sidebar addnote={addnote}/>
    <Main notes={notes} setnotes={setnotes}/>
    <Footer/>
    </div>
  )
}

export default App