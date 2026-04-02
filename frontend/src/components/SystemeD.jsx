import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SystemeD = ({ items }) => {
  return (
    <section id="systeme-d" className="section systemed-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Le Guide du Système D : Remplacez les machines par vos objets du quotidien</h2>
          <p className="section-description">
            Pas besoin d'investir dans du matériel coûteux. Voici comment transformer votre maison en salle de sport avec ce que vous avez déjà.
          </p>
        </div>
        
        <div className="systemed-grid">
          {items.map((item) => (
            <div key={item.id} className="systemed-card">
              <div className="systemed-card-image">
                <img 
                  src={item.image}
                  alt={item.household}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                </div>
              
              <div className="systemed-card-content">
                <div className="systemed-replacement">
                  <div className="replacement-item">
                    <h3 className="household-item">{item.household}</h3>
                  </div>
                  <div className="replacement-arrow">→</div>
                  <div className="replacement-item">
                    <span className="gym-equipment">{item.replacement}</span>
                  </div>
                </div>
                
                <div className="systemed-tips">
                  <CheckCircle2 size={20} className="tip-icon" />
                  <p>{item.tips}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="safety-notice">
          <div className="notice-content">
            <h4>⚠️ Sécurité avant tout</h4>
            <p>Assurez-vous toujours de la stabilité de vos objets avant utilisation. Commencez avec des charges légères et augmentez progressivement.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemeD;
