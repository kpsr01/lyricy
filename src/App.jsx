import React, { useState } from 'react'
import apicall from './api';
import './App.css'

function App() {
  const [input,setinput]=useState('');
  const searchfunc =(e)=>
  {
    e.preventDefault();
    apicall(input);
  }
  return (
    <div className='conatiner'>
      <div className="input-tag">
        <form onSubmit={searchfunc} className='input-form'>
          <input type="text" onChange={(e)=>setinput(e.target.value)} placeholder='Enter Lyrics Here'/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App