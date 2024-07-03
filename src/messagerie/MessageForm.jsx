// MessageForm.js

import React, { useState } from 'react';

const MessageForm = ({ owner }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappURL = `https://wa.me/${owner}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder={`Votre message à ${owner}`}
        value={message}
        onChange={handleMessageChange}
        required
      />
      <button type="submit">Envoyer par WhatsApp</button>
    </form>
  );
};

export default MessageForm;
