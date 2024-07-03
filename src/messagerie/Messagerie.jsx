import React from 'react';
import './styles.css'; // Fichier CSS pour les styles
import HouseCard from './HouseCard';
import houses from './housesData';
import Navbar from '../components/Navbar';

const Messagerie = () => {
  return (
    <div>
 <Navbar/>
    
     
   
    <div className="Message">
      
      <h1>Liste des maisons disponibles</h1>
      <div className="houses-list">
        {houses.map(house => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </div>
    </div>
  );
}
export default Messagerie;
