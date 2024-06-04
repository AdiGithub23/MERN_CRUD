// import { useState } from 'react'
import './App.css'
import AddUser from './addUser/AddUser'
import User from './getUser/User'

import { Routes, Route } from 'react-router-dom'
import Update from './updateUser/Update'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<User/>}></Route>
        <Route path='/user' element={<AddUser/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
    </>
  )
}

export default App
