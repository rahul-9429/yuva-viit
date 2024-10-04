// Dropdown.js

import React, { useState } from 'react';
import './DropDown1.css'; // Import your CSS styles

const DropDown1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="dropdown">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
      >
        Dropdown Menu
      </button>
      {isOpen && (
        <div id="dropdownMenu" className="show">
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Earnings</a>
            </li>
            <li>
              <a href="#">Sign out</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown1;
