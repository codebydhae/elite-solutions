import React from 'react';
import logo from "../../assets/wide-logo.png"
import './navbar.css';

const Navbar = () => {

  return (
    <nav className="navbar">
        <div className="logo">
            <img src={logo} alt="Company Logo" className="logo-img" />
        </div>
        <button className="contact-btn"><a href="#contact">Contact Us</a></button>
    </nav>
  );
};

export default Navbar;
