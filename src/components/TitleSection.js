import React from 'react';
import './TitleSection.css';

const TitleSection = () => {
  return (
    <section className="title-section">
      <div className="hexagon-container">
        <div className="hexagon">
          <div className="hexagon-face"></div>
          <div className="hexagon-face"></div>
          <div className="hexagon-face"></div>
          <div className="hexagon-face"></div>
          <div className="hexagon-face"></div>
          <div className="hexagon-face"></div>
        </div>
      </div>
      <h1 className="app-title">Skills Match</h1>
      <p className="app-motto">Personalized Skills Just For You</p>
    </section>
  );
};

export default TitleSection;
