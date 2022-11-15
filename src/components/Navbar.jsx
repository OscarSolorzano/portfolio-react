import React, { useEffect } from 'react';
import { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {

    const [navbar , setNavbar] = useState(false)

    const closeNavBar = () =>{
        setNavbar(false)
    }
    const handleNavBar = () =>{
      setNavbar(!navbar)
  }

  return (
    <nav className="navbar">
      <h2>
      <span>{`{`}</span>
        Oscar
        <span>Dev</span>
        <span>{`}`}</span>
      </h2>
      <div className={`links ${navbar?'active':''}`}>
        <a href="#home" onClick={closeNavBar} className='active'>Home</a>
        <a href="#about-me" onClick={closeNavBar}>About me</a>
        <a href="#my-skills" onClick={closeNavBar}>Skills</a>
        <a href="#portfolio" onClick={closeNavBar}>Portfolio</a>
        <a href="#contact-me" onClick={closeNavBar}>Contact me</a>
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
