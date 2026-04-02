import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem = ({ id, question, answer, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <button
        className="accordion-header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="accordion-question">{question}</span>
        {isOpen ? (
          <ChevronUp className="accordion-icon" />
        ) : (
          <ChevronDown className="accordion-icon" />
        )}
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          id={item.id} // Transmission de l'ID (ex: "privacy") au composant enfant
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
