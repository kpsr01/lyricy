import React, { useState } from 'react'
import apicall from './api';
import './App.css'

function App() {
  const [input,setinput]=useState('');
  const [display,setdisplay]=useState(false);
  const [artistname,setartistname]=useState('');
  const [songname,setsongname]=useState('');
  const [albumart,setalbumart]=useState('');
  const searchfunc =(e)=>
  {
    e.preventDefault();
    apicall(input,setartistname,setsongname,setalbumart);
    setdisplay(true);
  }
  return (
    <div className='conatiner'>
      <div className="input-tag">
        <form onSubmit={searchfunc} className='input-form'>
          <input type="text" onChange={(e)=>setinput(e.target.value)} placeholder='Enter Lyrics Here'/>
          <button>Submit</button>
        </form>
      </div>
      {display && (<div className="output-tag"> <div className="outputitems">{songname} <br /> {artistname} <br /> <img src={albumart} alt="" /></div> </div>)}
    </div>
  )
}

export default App