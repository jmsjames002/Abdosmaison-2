import React from 'react';
import { Dumbbell } from 'lucide-react';

const Header = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="network-header">
      <div className="nav-wrapper">
        <a href="/" className="network-logo">
          <Dumbbell size={24} style={{ marginRight: '8px' }} />
          AbdosMaison
        </a>
        
        <nav className="network-nav">
          <a
            href="#systeme-d"
            className="network-nav-link"
            onClick={(e) => scrollToSection(e, 'systeme-d')}>

            Système D
          </a>
          <a
            href="#workout"
            className="network-nav-link"
            onClick={(e) => scrollToSection(e, 'workout')}>

            Programme
          </a>
          <a
            href="#faq"
            className="network-nav-link"
            onClick={(e) => scrollToSection(e, 'faq')}>

            FAQ
          </a>
        </nav>
      </div>
    </header>);

};

export default Header;