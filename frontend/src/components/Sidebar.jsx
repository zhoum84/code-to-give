import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import {FaFile, FaUser, FaBars, FaHome, FaDesktop, FaUserFriends, FaTachometerAlt, FaDatabase, FaChartLine, FaUserShield, FaCog } from "react-icons/fa";

function Sidebar() {

    const navigate = useNavigate();

  return (
    
    <div className='wrapper'>
      <div className='sidebar'>
      <div className='sideTitle'>Menu</div>

                <ul>
                <li>
                    <div className="entry">
                        <span className="icon"><FaHome/></span>
                        <span className="item">Home</span>
                    </div>
                </li>
                <li>
                    <div className="entry">
                        <span className="icon"><FaDesktop/></span>
                        <span className="item">My Dashboard</span>
                    </div>
                </li>
                <li>
                    <div className="entry">
                        <span className="icon"><FaUserFriends/></span>
                        <span className="item">People</span>
                    </div>
                </li>
                <li>
                    <div className="entry">
                        <span className="icon"><FaFile /></span>
                        <span className="item">Files</span>
                    </div>
                </li>
                <li>
                    <div className="entry">
                        <span className="icon"><FaDatabase/></span>
                        <span className="item">Development</span>
                    </div>
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
