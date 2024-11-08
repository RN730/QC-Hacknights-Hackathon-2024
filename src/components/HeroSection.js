import React from 'react';
import { Container, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <div className="bg-success text-white text-center py-5">
      <Container>
        <h1 className="display-4">Find the Right Skills for You</h1>
        <p className="lead">
          Upload your resume to see if your skills match with the latest internship requirements!
        </p>
        <Button variant="light" size="lg" className="text-success font-weight-bold mt-3">
          Get Started
        </Button>
      </Container>
    </div>
  );
}

export default HeroSection;
