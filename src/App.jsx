import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OwnerPage from './components/pages/proprietaire/OwnerPage';
import PublishPage from './components/pages/publierOffre/PublishPage';
import AdminPage from './components/pages/administrateur/AdminPage';
import BecomeOwnerForm from './components/pages/locataire/BecomeOwnerForm';
import Locataire from './components/pages/locataire/Locataire';
import Validation from './components/pages/administrateur/Validation';
import ListeP from './components/pages/administrateur/ListeP';
import Inscription from './components/pages/inscription/inscription';
import Messagerie from './messagerie/Messagerie';
import Home from './components/pages/home/Home';
import Contact from './components/pages/contact/Contact';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proprietaire" element={<OwnerPage />} />
        <Route path="/inscrire" element={<Inscription />} />
        <Route path="/locataire" element={<Locataire />} />
        <Route path="/publish" element={<PublishPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/validate" element={<Validation />} />
        <Route path="/listeP" element={<ListeP />} />
        <Route path="/become-owner" element={<BecomeOwnerForm />} />
        <Route path="/message" element={<Messagerie />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
};

export default App;
