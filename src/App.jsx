import React from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Mealinfo from './Pages/Mealinfo'
import 'react-toastify/dist/ReactToastify.css';
import Mainpage from './Pages/Mainpage'


function App() {

  return (
    <>
      <div className='App'>
       <Routes>
        <Route path='/' element={<Navigate to="/login"/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Mainpage/>}/>
        <Route path='/:mealid' element={<Mealinfo/>}/>
       </Routes>
      </div>
    </>
  )
}

export default App
