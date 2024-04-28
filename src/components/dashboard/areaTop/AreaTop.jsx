import React, { useState } from 'react';
import './AreaTop.scss';

const AreaTop = () => {
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  return (
    <div className="navtop">
      <div>
        <img src="logo.png" alt="logo" className="logo" />
      </div>

      <div className="icons">
        <div className='search'>
          <img src="/search.svg" alt="" className="icon" />
          <input type="text" placeholder='search' />
        </div>
        <ul className='menu-list corsica'>
          <li>Feedback</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </div>

      <div className='user-detail'>
        <div className="notification" onClick={() => setShowNotificationDropdown(!showNotificationDropdown)}>
          <img src="/notification.svg" alt="" className="icon" />
          <span></span>
          {/* Notification dropdown content */}
          {showNotificationDropdown && (
            <div className="dropdown-content">
              {/* Dropdown items */}
              <div className="dropdown-item">Notification 1</div>
              <div className="dropdown-item">Notification 2</div>
              <div className="dropdown-item">Notification 3</div>
            </div>
          )}
        </div>

        <div className="user" onClick={() => setShowUserDropdown(!showUserDropdown)}>
          <img src="/user.png" alt="" />
          {/* User dropdown content */}
          {showUserDropdown && (
            <div className="dropdown-content">
              {/* Dropdown items */}
              <div className="dropdown-item">Profile</div>
              <div className="dropdown-item">Settings</div>
              <div className="dropdown-item">Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AreaTop;
