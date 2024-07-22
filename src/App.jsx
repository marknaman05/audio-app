import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
