import { useState } from 'react'
import './App.css'
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import tracks from './tracks';

function App() {

  return (
    <Player trackList={tracks} />
  )
}

export default App
