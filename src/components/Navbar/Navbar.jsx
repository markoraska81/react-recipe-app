import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { navLogo } from '../../services/Services';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-brand__logo">
            <img src={navLogo} alt="Logo" />
          </Link>
          <div className="navbar-brand__text">
            <h2>Recipe App</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
