import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Button } from '@mui/material';
import Navbar from '../../Navbar.jsx';
import UserMenu from './UserMenu.jsx';
import DashboardDrawer from '../../DashboardDrawer.jsx';
import Footer from '../../Footer.jsx';

import '../../style.css'

const OwnerPage = () => {
  const navigate = useNavigate();
  const ownerName = 'Romeo';

  const handlePublishClick = () => {
    navigate('/publish');
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <DashboardDrawer />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" onClick={handlePublishClick}>Publier une offre</Button>
          </Grid>
          <Grid item xs={3}sx={{ textAlign: 'right' }}>
          <div className="right-section">
          <span className="owner-name">{ownerName}</span>
            <UserMenu />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default OwnerPage;
