import React from 'react';
import { Container, Grid } from '@mui/material';
import Navbar from '../../Navbar'; // Importez le composant Navbar existant
import AdminMenu from './AdminMenu';
import SUserMenu from './SUserMenu';
import { FoodBankTwoTone } from '@mui/icons-material';
import Footer from '../../Footer';


const AdminPage = () => {
   const ownerName = 'Romeo';
  return (
    <div>
      <Navbar /> {/* Utilisation du même Navbar que pour le propriétaire */}
      <Container sx={{ mt: 8 }}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <AdminMenu />
          </Grid>
          <Grid item xs={6}>
            {/* Contenu principal ici */}
          </Grid>
        <Grid item xs={3}sx={{ textAlign: 'right' }}>
          <div className="right-section">
          <span className="owner-name">{ownerName}</span>
            <SUserMenu />
            </div>
          </Grid>
          </Grid>
      </Container>
      
      <Footer/>
    </div>
  );
};

export default AdminPage;
