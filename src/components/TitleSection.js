import React from 'react';
import { Container } from 'react-bootstrap';
import './TitleSection.css'; 

function TitleSection() {
  return (
    <div className="title-section">
      <Container className="text-center py-5">
        <h1 className="app-title">Skills Match</h1>
        <p className="app-motto">Personalized Skills just for you</p>
      </Container>
    </div>
  );
}

export default TitleSection;
