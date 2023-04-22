import React from 'react';
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Progress from './components/Progress'
import Welcome from './pages/Welcome'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Welcome />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;