import React from 'react'

import { NativeRouter, Routes, Route } from 'react-router-native'

// componentes de ruta
import Intro from './src/intro'
import Game from './src/game'
import Home from './src/home'
import Summary from './src/summary'

export default function App(): JSX.Element {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </NativeRouter>
  )
}
