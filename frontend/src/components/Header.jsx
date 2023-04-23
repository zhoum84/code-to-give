import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  return (
        <header className='header'>
                      
        <div></div>
        <div>
        <div className='header-center'>Make-A-Wish</div>
        </div>
          <ul>
          
              <li>
                  <FaUser /> Your Name
              </li>

            <li>
              
              <li>
                <Link to='/'>
                  <button className='btn'> 
                    <FaSignOutAlt /> Logout
                  </button>
                </Link>
              </li>
               
            </li>
          </ul>
        </header>
      )  
}

export default Header