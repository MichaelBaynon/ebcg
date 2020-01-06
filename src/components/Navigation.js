import React from "react";

import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className='nav'>
      <Logo />
      <div className='links'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About Us</Link>
      <Link to='/contact'>Contact Us</Link>
      <Link to='/services'>Services</Link>
      </div>
    </div>
  );
};

export default Navigation;
