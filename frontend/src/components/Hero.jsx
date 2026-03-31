import React from 'react';
import { Clock, User, Calendar } from 'lucide-react';

const Hero = ({ content, meta }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content-wrapper">
          <div className="hero-text">
            <div className="article-meta">
              <span className="meta-item">
                <User size={16} />
                {meta.author}
              </span>
              <span className="meta-separator">•</span>
              <span className="meta-item">
                <Calendar size={16} />
                {new Date(meta.publishDate).toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="meta-separator">•</span>
              <span className="meta-item">
                <Clock size={16} />
                {meta.readTime} de lecture
              </span>
            </div>
            
            <h1 className="hero-title">{content.title}</h1>
            
            <div className="hero-problem">
              <p className="hero-subtitle">{content.subtitle}</p>
            </div>
            
            <p className="hero-description">{content.description}</p>
            
            <div className="hero-cta">
              <a href="#systeme-d" className="btn-primary">
                Découvrir le guide complet
              </a>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <img 
              src={content.image} 
              alt={content.imageAlt}
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
