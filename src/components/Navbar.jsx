import React from 'react';
import { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {

    const [navbar , setNavbar] = useState(false)

    const handleNavBar = () =>{
        setNavbar(!navbar)
    }

  return (
    <nav className="navbar">
      <h2>
        Oscar<span>Dev</span>
      </h2>
      <div className={`links ${navbar?'active':''}`}>
        <a href="#">Home</a>
        <a href="#">About me</a>
        <a href="#">Skills</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact me</a>
      </div>
      <div onClick={handleNavBar} className='burguer'>
        <div className={`icon nav-icon-5 ${navbar?'open':''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
      <div className={`initial ${navbar?'active':''}`}></div>
    </nav>
  );
};

export default Navbar;
