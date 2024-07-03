import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const images = [
  '/src/assets/house1.jpg',
  '/src/assets/house2.jpg'
];

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      <img src={images[currentImageIndex]} alt="House" className="slide-image" />
      <div className="welcome-message">
        <p>Decouvrez des maisons de reve pour vos sejours!   </p>
      </div>
    </div>
  );
};

export default Slideshow;
