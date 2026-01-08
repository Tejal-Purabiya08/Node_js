import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './comp/Register'
import Login from './comp/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
