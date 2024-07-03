import React, { useState } from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import SUserMenu from './SUserMenu';
import './Validation.css'; // Importez le fichier CSS correspondant

const Validation = () => {
  const [owners, setOwners] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', documents: ['Doc1', 'Doc2'] },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', documents: ['Doc1', 'Doc2'] },
    // Ajoutez plus de propriétaires si nécessaire
  ]);

  const handleActivate = (id) => {
    // Logique pour activer un propriétaire
    console.log(`Propriétaire avec ID ${id} activé`);
  };
  const ownerName = 'Romeo';
  return (
    <div>
      <Navbar />
      <div className="admin-user-section">
          <div className="right-section">
            <span className="owner-name">{ownerName}</span>
            <SUserMenu />
          </div>
        </div>
      <div className="validation-container">
        <h1 className='validation-h1'>Validation des Propriétaires</h1>
        <table className="validation-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Documents</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {owners.map((owner) => (
              <tr key={owner.id}>
                <td>{owner.lastName}</td>
                <td>{owner.firstName}</td>
                <td>{owner.email}</td>
                <td>{owner.documents.join(', ')}</td>
                <td>
                  <button onClick={() => handleActivate(owner.id)}>Activer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Validation;
