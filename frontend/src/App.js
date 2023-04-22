import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from './pages/FormPage'
import Welcome from './pages/Welcome'
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
            <Route path='/formpage' element={<FormPage />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
