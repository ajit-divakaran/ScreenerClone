// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
function App() {


  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Landing/>}/>
    </Routes>
    </Router>

    </>
  )
}

export default App
