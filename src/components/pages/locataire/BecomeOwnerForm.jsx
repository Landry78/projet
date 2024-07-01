import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './BecomeOwnerForm.css';
import Navbar from '../../Navbar';
import Footer from '../../Footer';



const BecomeOwnerForm = () => {
  const [propertyTitle, setPropertyTitle] = useState(null);
  const [landCertificate, setLandCertificate] = useState(null);
  const [propertyTitlePreview, setPropertyTitlePreview] = useState(null);
  const [landCertificatePreview, setLandCertificatePreview] = useState(null);
  const navigate = useNavigate(); // Utiliser useNavigate

  const handleFileChange = (e, setFile, setPreview) => {
    const file = e.target.files[0];
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gestion de l'envoi du formulaire ici
    navigate('/');
  };

  return (
    <div>
      <Navbar/>
      <div className="become-owner-form-wrapper">
        <form onSubmit={handleSubmit} className="become-owner-form">
          <h2 className="become-owner-form-title">Devenir propriétaire</h2>
          <div className="become-owner-form-group">
            <label htmlFor="propertyTitle" className="become-owner-form-label">Titre de propriété</label>
            <input
              type="file"
              id="propertyTitle"
              className="become-owner-form-input"
              required
              onChange={(e) => handleFileChange(e, setPropertyTitle, setPropertyTitlePreview)}
            />
            {propertyTitlePreview && (
              <div className="become-owner-file-preview">
                <p className="become-owner-file-preview-text">Aperçu du fichier :</p>
                <embed src={propertyTitlePreview} width="300" height="200" className="become-owner-file-embed" />
              </div>
            )}
          </div>
          <div className="become-owner-form-group">
            <label htmlFor="landCertificate" className="become-owner-form-label">Certificat foncier</label>
            <input
              type="file"
              id="landCertificate"
              required
              className="become-owner-form-input"
              onChange={(e) => handleFileChange(e, setLandCertificate, setLandCertificatePreview)}
            />
            {landCertificatePreview && (
              <div className="become-owner-file-preview">
                <p className="become-owner-file-preview-text">Aperçu du fichier :</p>
                <embed src={landCertificatePreview} width="300" height="200" className="become-owner-file-embed" />
              </div>
            )}
          </div>
          <button type="submit" className="become-owner-submit-button">Devenir propriétaire</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default BecomeOwnerForm;
