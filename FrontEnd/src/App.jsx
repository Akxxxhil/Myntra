import React from 'react'
import Home from './Pages/Home'
import {Routes,Route} from "react-router-dom"
import Profile from './Pages/Profile'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
     
    </div>
  )
}

export default App
