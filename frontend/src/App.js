import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SystemeD from './components/SystemeD';
import WorkoutRoutine from './components/WorkoutRoutine';
import FAQ from './components/FAQ';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';
import { 
  heroContent, 
  systemeDItems, 
  workoutRoutine, 
  faqItems, 
  disclaimer,
  articleMeta 
} from './data/mockData';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <Hero content={heroContent} meta={articleMeta} />
        
        <SystemeD items={systemeDItems} />
        
        <section id="workout">
          <WorkoutRoutine routine={workoutRoutine} />
        </section>
        
        <section id="faq" className="section faq-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Questions Fréquentes</h2>
              <p className="section-description">
                Tout ce que vous devez savoir pour commencer votre transformation
              </p>
            </div>
            <FAQ items={faqItems} />
          </div>
        </section>
        
        <section className="section disclaimer-section">
          <div className="container">
            <Disclaimer disclaimer={disclaimer} />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
