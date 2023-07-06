import React from 'react'
import Start from './component/start/Start'
import Home from './component/home/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App