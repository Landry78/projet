import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Slideshow from './Slideshow';
import Listings from './Listings';
import Footer from './Footer';
import  SearchBar from  './SearchBar';
import './Navbar.css';
import './Sidebar.css';
import './Slideshow.css';
import './Listings.css';
import './Footer.css';
import './Home.css';
import './SearchBar.css';


const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="Home">
      <Navbar toggleSidebar={toggleSidebar} />
      <SearchBar />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content">
        <Slideshow />
        <Listings />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
