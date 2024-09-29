import React, { useState } from 'react';
import apicall from './api';
import './App.css';
import { HashLoader } from 'react-spinners';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [input, setInput] = useState('');
  const [display, setDisplay] = useState(false);
  const [artistName, setArtistName] = useState('');
  const [songName, setSongName] = useState('');
  const [albumArt, setAlbumArt] = useState('');
  const [loader,setLoader]=useState(false);

  const searchFunc = async (e) => {
    e.preventDefault();
    setLoader(true);
    await apicall(input, setArtistName, setSongName, setAlbumArt);
    setLoader(false);
    setDisplay(true);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>🎵 Lyricy</h1>
        <p>Find your favorite songs by entering a few lines of lyrics!</p>
      </header>
      <div className="input-section">
        <form onSubmit={searchFunc} className="input-form">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Lyrics Here"
            className="input-box"
          />
          <button className="submit-button">Find Song</button>
        </form>
      </div>
      {!loader&&display && (
        <div className="output-section">
          <div className="output-card">
            <img src={albumArt} alt="Album Art" className="album-art" />
            <div className="song-details">
              <h2 className="song-title">{songName}</h2>
              <h3 className="artist-name">{artistName}</h3>
            </div>
          </div>
        </div>
      )}
      {loader && <div className="loader-container">
        <div className="loader">
          <HashLoader
            color="#E91E63"
            size={100}
          />
        </div>
      </div>}
      <Analytics mode={'production'} />;
    </div>
  );
}

export default App;
