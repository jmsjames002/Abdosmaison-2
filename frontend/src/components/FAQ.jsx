import React, { useState, useEffect } from 'react'; // Ajout de useEffect
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem = ({ id, question, answer, isOpen, onToggle }) => {
  return (
    <div className="accordion-item" id={id} style={{ scrollMarginTop: '100px' }}>
      <button
        className="accordion-header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="accordion-question">{question}</span>
        {isOpen ? <ChevronUp className="accordion-icon" /> : <ChevronDown className="accordion-icon" />}
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // Ce bloc ouvre l'accordéon si l'URL contient #privacy ou #legal
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const index = items.findIndex(item => item.id === hash);
        if (index !== -1) setOpenIndex(index);
      }
    };

    handleHashChange(); // Vérifie au chargement
    window.addEventListener('hashchange', handleHashChange); // Écoute les clics
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [items]);

  return (
    <div className="faq-container">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
