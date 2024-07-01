import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Button } from '@mui/material';
import Navbar from '../../Navbar.jsx';
import LUserMenu from './LUserMenu.jsx';
import DashboardDrawer from '../../DashboardDrawer.jsx';
import Footer from '../../Footer.jsx';
import '../../style.css';

const locataire= () => {
  const navigate = useNavigate();
  const ownerName = 'Romeo';

  

  return (
    <div>
      <Navbar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <DashboardDrawer />
          </Grid>
          
          <Grid item xs={3}sx={{ textAlign: 'right' }}>
          <div className="right-section">
          <span className="owner-name">{ownerName}</span>
            <LUserMenu />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default locataire;
