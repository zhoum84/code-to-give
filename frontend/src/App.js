import React from 'react';
import Welcome from './pages/Welcome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Submission from './pages/Submission';
import BeforeLeaving from './pages/BeforeLeaving';
import FormPage from './pages/FormPage';
import Chat from './pages/Chat'
import Signup from './pages/Signup'

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Welcome />} />
            <Route path='/submission' element={<Submission />}/>  
            {/* people shouldn't have direct access to submission page directly */}
            <Route path='/beforeleaving' element={<BeforeLeaving />}/>  
            <Route path='/formpage' element={<FormPage />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;