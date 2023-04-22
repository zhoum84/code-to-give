import React from 'react'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  return (
        <header className='header'>
          
          <div>
            
          </div>
          <ul>
            <li>
              
              <li>
                  <button className='btn'> 
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
               
            </li>
          </ul>
        </header>
      )  
}

export default Header