import React from 'react';
import { Clock, Repeat, Lightbulb } from 'lucide-react';

const WorkoutRoutine = ({ routine }) => {
  return (
    <section className="section workout-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{routine.title}</h2>
          <div className="workout-meta">
            <span className="workout-meta-item">
              <Clock size={18} />
              Durée : {routine.duration}
            </span>
            <span className="workout-meta-item">
              <Repeat size={18} />
              Fréquence : {routine.frequency}
            </span>
          </div>
        </div>
        
        <div className="workout-tip-card">
          <Lightbulb size={24} className="tip-icon" />
          <p className="tip-text">
            <strong>Astuce Pro :</strong> {routine.tip}
          </p>
        </div>
        
        <div className="exercises-grid">
          {routine.exercises.map((exercise, index) => (
            <div key={exercise.id} className="exercise-card">
              <div className="exercise-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="exercise-image-wrapper">
                <img 
                  src={exercise.image} 
                  alt={exercise.name}
                  className="exercise-image"
                />
              </div>
              
              <div className="exercise-content">
                <h3 className="exercise-name">{exercise.name}</h3>
                
                <div className="exercise-specs">
                  <span className="spec-badge duration">{exercise.duration}</span>
                  <span className="spec-badge rest">Repos : {exercise.rest}</span>
                </div>
                
                <p className="exercise-description">{exercise.description}</p>
                
                <div className="exercise-tips">
                  <strong>💡 Conseil :</strong> {exercise.tips}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="workout-footer">
          <p className="workout-note">
            <strong>Note importante :</strong> Échauffez-vous pendant 5 minutes avant de commencer (jumping jacks, montées de genoux, rotations du tronc). Terminez par 5 minutes d'étirements pour favoriser la récupération.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkoutRoutine;
