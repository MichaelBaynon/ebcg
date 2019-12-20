import React from "react";

import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className='nav'>
      <Logo />
      <div className='links'>
      <Link>Home</Link>
      <Link>About Us</Link>
      <Link>Contact Us</Link>
      <Link>Services</Link>
      </div>
    </div>
  );
};

export default Navigation;
