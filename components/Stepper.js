// components/Stepper.js
import React from 'react';
import styles from '../styles/Stepper.module.css';

const Stepper = ({ currentStep }) => {
  const steps = ['Start First Project', 'Project Details', 'Create Project'];

  return (
    <div className={styles.stepper}>
      {steps.map((step, index) => (
        <div key={index} className={styles.step}>
          <div
            className={`${styles.dot} ${index <= currentStep ? styles.active : ''}`}
          ></div>
          <p
            className={`${styles.label} ${index <= currentStep ? styles.activeLabel : ''}`}
          >
            {step}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
