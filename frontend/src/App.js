import Welcome from './pages/Welcome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import FormPage from './pages/FormPage';

import React from 'react';
function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Welcome />} />
            <Route path='/formpage' element={<FormPage />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
