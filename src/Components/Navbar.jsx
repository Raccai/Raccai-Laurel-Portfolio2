import React from 'react';
import './Navbar.css';
import logo from "../assets/logo.svg"
import MyFace from "../assets/MyFace.svg"

export const Navbar = ({ activeCategory, setActiveCategory }) => {
  const navItems = ['All', 'Mobile App', 'Website', 'Section'];

  const handleContactClick = () => {
    window.open("https://paws.org.ph/", "_blank");
  }

  return (
    <header className='nav-container'>
      <div className="logo-wrapper">
        <img src={logo} alt="Raccai logo" />
      </div>
      <div className="nav-wrapper">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`nav-item ${activeCategory === item ? 'active' : ''}`}
            onClick={() => setActiveCategory(item)}
            onKeyDown={(event) => {if (event.key === 'Enter') setActiveCategory(item)}}
            tabIndex="0" 
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="contact-wrapper" onClick={handleContactClick} tabIndex="0" >
        <img src={MyFace} alt="My face, but as an svg" />
        <div className="tooltip">My favorite thing so far</div>
      </div>
    </header>
  );
};
