import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <Link to="/">My Website</Link>
        </h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/not-home" 
              className={`nav-link ${location.pathname === '/not-home' ? 'active' : ''}`}
            >
              NotHome
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;