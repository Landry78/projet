import React from 'react';
import { Container, Box, Typography, Paper } from '@mui/material';
import Navbar from '../../Navbar.jsx';
import Footer from '../../Footer.jsx';
import PublishForm from './PublishForm.jsx';

const PublishPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
       
            <PublishForm />
         
      </Container>
      <Footer />
    </div>
  );
};

export default PublishPage;
