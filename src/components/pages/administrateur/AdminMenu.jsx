import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import './AdminMenu.css';

const AdminMenu = () => {
  const [owners, setOwners] = useState([]);
  const [showOwnersList, setShowOwnersList] = useState(false);

  const fetchOwners = () => {
    // Simuler une récupération de données
    const mockData = [
      { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
      { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com' },
    ];
    setOwners(mockData);
    setShowOwnersList(true);
  };

  const handleDelete = (id) => {
    // Logique de suppression ici
    setOwners(owners.filter(owner => owner.id !== id));
  };

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <h2>Menu</h2>
        <div className="menu-item">
          <CheckCircleIcon />
          <Link to="/validate" className="menu-link">Valider un propriétaire</Link>
        </div>
        <div className="menu-item">
          <PeopleAltIcon />
          <button onClick={fetchOwners} className="menu-link">Liste de propriétaires</button>
        </div>
      </div>
      <div className="admin-content">
        {showOwnersList && (
          <table className="owners-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {owners.map(owner => (
                <tr key={owner.id}>
                  <td>{owner.lastName}</td>
                  <td>{owner.firstName}</td>
                  <td>{owner.email}</td>
                  <td><button onClick={() => handleDelete(owner.id)}>Supprimer</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminMenu;
