import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Submission() {
  const handleClick = () => {
    toast('Form submitted!');
    toast('You will be contacted shortly!', {delay: 1000})
  }

  return (
    <div>
      <Sidebar />
      <Header />
      <div className='centerer'> 
    <div className='vscontainer'>

      <div>
        <Link to='/viewform'>
        <button className='vsbutton'>
            View Form
        </button>
        </Link>
      </div>

      <div>
        <button className='vsbutton' onClick={handleClick}> 
            Submit Form
        </button>
        <ToastContainer />
      </div>
    </div>
  </div>
    </div>
  )
}

export default Submission;
