import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Disclaimer = ({ disclaimer }) => {
  return (
    <div className="disclaimer-container">
      <div className="disclaimer-icon">
        <AlertTriangle size={32} />
      </div>
      <div className="disclaimer-content">
        <h3 className="disclaimer-title">{disclaimer.title}</h3>
        <p className="disclaimer-text">{disclaimer.content}</p>
      </div>
    </div>
  );
};

export default Disclaimer;
