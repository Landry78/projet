import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './inscription.css';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const Inscription = () => {
  const [formData, setFormData] = useState({
   
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    // Logique de soumission du formulaire ici
    console.log('Formulaire soumis', formData);
  };

  return (
    <div>
      <Navbar/>
    <form onSubmit={handleSubmit} className="registration-form">
      <div>
        <h1 className='registration-form-h1'>INSCRIPTION</h1>
        <label>Username</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Mot de passe</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <div>
        <label>Confirmer mot de passe</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
      </div>
      <div>
        <button type="submit">S'inscrire</button>
      </div>
      <div>
        <Link to="/forgot-password" className="forgot-password-link">Mot de passe oublié ?</Link>
      </div>
    </form>
    <Footer/>
    </div>
  );
};

export default Inscription;