import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link>Home</Link>
        <Link>About Us</Link>
        <Link>Contact Us</Link>
        <Link>Services</Link>
      </div>
    </div>
  );
};

export default Footer;
