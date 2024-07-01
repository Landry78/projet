import React from 'react';
import { AppBar, Toolbar, Typography, Link, Box } from '@mui/material';
import logo from './logo.jpg'; // Assurez-vous que le logo est dans le bon chemin

const Navbar = () => {
  return (
    <AppBar position="static" className="Navbar">
      <Toolbar className="Navbar">
        <Box className="Navbar-logo">
          <img src={logo} alt="Logo"  className="logo"/>
          <Typography variant="h6">HousingBooker</Typography>
        </Box>
        <Box className="Navbar-links">
          <Link href="#about" color="inherit" variant="button">
            À propos
          </Link>
          <Link href ="/admin" color="inherit" variant="button">
            administrateur
          </Link>
          <Link href ="/locataire" color="inherit" variant="button">
            locataire
          </Link>
          <Link href ="/inscrire" color="inherit" variant="button">
            Inscription
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


