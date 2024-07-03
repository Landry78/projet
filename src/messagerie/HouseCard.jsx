
// HouseCard.js

import React, { useState } from 'react';
import MessageForm from './MessageForm';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const HouseCard = ({ house }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="house-card">
      <img className="house-image" src={house.image} alt="House" />
      <div className="house-details">
        <p className="characteristics">{house.characteristics}</p>
        <button className="whatsapp-button" onClick={toggleForm}>
           Contacter par WhatsApp
        </button>
        {showForm && <MessageForm owner={house.owner} />}
      </div>
    </div>
  );
};

export default HouseCard;
