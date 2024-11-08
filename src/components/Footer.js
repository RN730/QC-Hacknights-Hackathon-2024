import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <Container className="text-center">
        <p>&copy; 2024 Internship Matcher. All rights reserved.</p>
        <a href="#terms" className="text-light mx-2">Terms</a>
        <a href="#privacy" className="text-light mx-2">Privacy Policy</a>
      </Container>
    </footer>
  );
}

export default Footer;
