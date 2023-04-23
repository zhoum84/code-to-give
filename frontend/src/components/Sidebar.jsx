import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import {FaFile, FaBars, FaHome, FaDesktop, FaUserFriends, FaTachometerAlt, FaDatabase, FaChartLine, FaUserShield, FaCog } from "react-icons/fa";

function Sidebar() {

    const navigate = useNavigate();
    const onPress = (page) =>{
        console.log('click');
        navigate(`/${page}`);
    }
    
  return (
    
    <div className='wrapper'>
      <div className='sidebar'>
      <div className='sideTitle'>Menu</div>

                <ul>
                <li>
                    <Link to='/home'>
                        <div className="entry">
                            <span className="icon"><FaHome/></span>
                            <span className="item">Home</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <div className="entry">
                        <span className="icon"><FaDesktop/></span>
                        <span className="item">My Dashboard</span>
                    </div>
                </li>
                <li>
                    <Link to='/chat'>
                        <div className="entry" >
                            <span className="icon"><FaUserFriends/></span>
                            <span className="item">People</span>
                        </div>
                    </Link> 
                </li>
                <li>
                    <Link to='/formpage'>
                        <div className="entry" >
                            <span className="icon"><FaFile /></span>
                            <span className="item">Complete a Form</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/submission'>
                        <div className="entry">
                            <span className="icon"><FaDatabase/></span>
                            <span className="item">Your Files</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <div className="entry">
                        <span className="icon"><FaChartLine/></span>
                        <span className="item">Reports</span>
                    </div >
                </li>
                <li>
                    <div className="entry">
                        <span className="icon"><FaUserShield/></span>
                        <span className="item">Admin</span>
                    </div>
                </li>
                <li>
                    <div className="entry">
                        <span className="icon"><FaCog/></span>
                        <span className="item">Settings</span>
                    </div>
                </li>
            </ul>
            </div>
    </div>
  );
}

export default Sidebar;
