import React from 'react';
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Router>
          <Header />
          <Sidebar />
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/' element={<Login />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
