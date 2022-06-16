import React, { useState } from 'react';
import loading from './img/loading.svg';

import {MusicNoteIcon} from '@heroicons/react/outline'

import './App.css';
import {Sounder} from "./Sounder"
function App() {
  const [makingMusic, setMakingMusic]=useState(false)

  const handleButton=():void=>{
    setMakingMusic(true)
  }
  return (

    <div className="App">
      <header className="App-header">
        {
          makingMusic ? (
            <Sounder/>
          ):(<div>
            <button onClick={handleButton}>
              <MusicNoteIcon className="App-logo animate-spin-stopping text-sky-800"/>
            </button>
            <header className="text-yellow-500">No Sound Is Being Generated</header>
          </div>)
        }
      </header>
    </div>
  );
}

export default App;
