import React from 'react';
import './copyright.css'; 

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p>
        &copy; {currentYear} TECHTOCK. All rights reserved.
      </p>
      
      <nav>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
        </ul>
      </nav>
      
    </footer>
  );
};

export default Footer;