import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>✖</button>
      <a href="#chambre">🏠 Chambre</a>
      <a href="#appartements">🏢 Appartements</a>
      <a href="#contact">📞 Nous Contacter</a>
      <a href="#services">🛠 Nos Services</a>
      <a href="#aide">❓ Aide</a>
    </div>
  );
};

export default Sidebar;
