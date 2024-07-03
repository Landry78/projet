import React from 'react';
import Inscription from '../inscription/inscription';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="src/assets/logo.jpg" alt="Logo" className="logo"  />
        <span className="site-name"><span className='first'>House</span><span className='second'>Booker</span></span>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          ☰
        </button>
      </div>
      <div className="navbar-right">
        <a href="#about">À propos</a>
        <Link to ="/inscrire" color="inherit" variant="button">
            Inscription
          </Link>
        <a href="#login">Se connecter</a>
        <a href="#services">Logements</a>
        <Link to ="/contact" color="inherit" variant="button">
            Contact
          </Link>
        <a href="#help"></a>
      </div>
    </nav>
  );
};

export default Navbar;
