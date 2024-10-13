// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Screens from './pages/Screens';
function App() {


  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/screens' element={<Screens/>}/>
    </Routes>
    </Router>

    </>
  )
}

export default App
