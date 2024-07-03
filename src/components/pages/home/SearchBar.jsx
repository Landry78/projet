import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <input type="text" className="search-input" placeholder="Rechercher..." />
      <button className="search-button">Rechercher</button>
    </div>
  );
};

export default SearchBar;
