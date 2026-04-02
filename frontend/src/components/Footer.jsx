import React from 'react';
import { Mail, FileText, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">À propos</h4>
            <p className="footer-text">
              L'équipe fit, au travers de son programme abdosmaison, vous aide à transformer votre domicile en salle de sport personnelle. 
              Des conseils pratiques pour rester en forme sans abonnement coûteux.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Liens légaux</h4>
            <ul className="footer-links">
              <li>
                <a href="#privacy" className="footer-link">
                  <Shield size={16} />
                  Politique de Confidentialité
                </a>
              </li>
              <li>
                <a href="#legal" className="footer-link">
                  <FileText size={16} />
                  Mentions Légales
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="footer-copyright text-xs text-slate-500">
            © {new Date().getFullYear()} AbdosMaison. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;
