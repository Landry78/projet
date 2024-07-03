import React, { useState } from 'react';
import './Listings.css';

const Listings = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="listings-container">
      <div className="listings">
        <div className="listing">
          <img src="/src/assets/house1.jpg" alt="House 1" />
          <div className="details">
            <p>appartement, 4 chambres, 1 salons, 2 douches, 1 cuisine</p>
            <span class="prix"><tr>PRIX : 100 000FCFA/mois</tr></span>
            <button>Réserver</button>
          </div>
        </div>
        <div className="listing">
          <img src="/src/assets/house2.jpg" alt="House 2" />
          <div className="details">
            <p>appartement, 4 chambres, 1 salons, 2 douches, 1 cuisine</p>
            <span class="prix"><tr>PRIX : 100 000FCFA/mois</tr></span>
            <button>Réserver</button>
          </div>
        </div>
        <div className="listing">
          <img src="/src/assets/house3.jpg" alt="House 3" />
          <div className="details">
            <p>appartement, 4 chambres, 1 salons, 2 douches, 1 cuisine</p>
            <span class="prix"><tr>PRIX : 100 000FCFA/mois</tr></span>
            <button>Réserver</button>
          </div>
        </div>
        
        {showAll && (
          <>
            <div className="listing">
              <img src="/src/assets/house5.jpg" alt="House 5" />
              <div className="details">
                <p>appartement, 4 chambres, 1 salons, 2 douches, 1 cuisine</p>

                <span class="prix"><tr>PRIX : 100 000FCFA/mois</tr></span>
                <button>Réserver</button>
              </div>
            </div>
            <div className="listing">
              <img src="/src/assets/house6.jpg" alt="House 6" />
              <div className="details">
                <p>appartement, 4 chambres, 1 salons, 2 douches, 1 cuisine</p>
      
              <span class="prix"><tr>PRIX : 100 000FCFA/mois</tr></span>
                    
                <button>Réserver</button>
              </div>
            </div>
          </>
        )}
      </div>
      <a href="#!" className="more-offers" onClick={toggleShowAll}>
        {showAll ? "Voir moins d'offres" : "Consulter les autres offres"}
      </a>
    </div>
  );
};

export default Listings;
