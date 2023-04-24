import React from 'react'
import logo from '../resources/logo-blue-transparent.png'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  return (
        <header className='header'>
                      
        <div></div>
        <div>
        <div className='header-center'>
          <img src={logo} height={100} width={420} alt='logo'/>
        </div>

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