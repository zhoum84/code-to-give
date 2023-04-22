import React from 'react';
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Progress from './components/Progress'
import Welcome from './pages/Welcome'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Submission from './pages/Submission';
import BeforeLeaving from './pages/BeforeLeaving';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Welcome />} />
            <Route path='/submission' element={<Submission />}/>  
            {/* people shouldn't have direct access to submission page directly */}
            <Route path='/beforeleaving' element={<BeforeLeaving />}/>  
          </Routes>
      </Router>
    </>
  );
}

export default App;