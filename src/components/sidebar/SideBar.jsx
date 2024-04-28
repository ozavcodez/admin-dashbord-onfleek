// import { SideBar } from '..'
import { links } from '../../lib/data'
import React from 'react'
import {Link} from 'react-router-dom';
import "./Sidebar.scss";

const SideBar = () => {
  const currentPath = window.location.pathname;
  return (
    <nav className={`sidebar`}>
      <div className="sidebar-top">
        <div className="sidebar-logo">
          <img src="/logo1.png" alt="" width={40} />
          {/* <span>logo</span> */}
        </div>
      </div>
      <div className="sidebar-body">
        <ul className='menu-list'>
          {links.map((link) => (
            <li key={link.to} className='menu-item'> 
              <Link to={link.to} className={`menu-link ${currentPath === link.to ? 'active' : ''}`}>
                <span className='menu-link-icon' size={50}>{link.icon}</span>
              </Link>
            </li>
          ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default SideBar
