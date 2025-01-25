import React from 'react';
import property from "../../assets/property1.png"
import './header.css'; 

const Header = () => {
  return (
    <div className="header-container">
      <div className="image-container">
        <img
          src={property}  // Replace with your image URL
          alt="Header Background"
          className="background-image"
        />
        <h1 className="header-text">Elevating Your Investment,{"\n"} Bringing Excellence in Every Detail</h1>
      </div>
    </div>
  );
};

export default Header;
