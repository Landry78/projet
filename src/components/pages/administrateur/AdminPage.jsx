import React from 'react';
import Navbar from '../../Navbar'; // Importez le composant Navbar existant
import AdminMenu from './AdminMenu';
import SUserMenu from './SUserMenu';
import Footer from '../../Footer';
import './AdminPage.css'; // Importez le fichier CSS correspondant

const AdminPage = () => {
  const ownerName = 'Romeo';
  return (
    <div>
      <Navbar /> {/* Utilisation du même Navbar que pour le propriétaire */}
      <div >
        <div >
          
   
          <AdminMenu />
        </div>
        <div className="admin-user-section">
          <div className="right-section">
            <span className="owner-name">{ownerName}</span>
            <SUserMenu />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
