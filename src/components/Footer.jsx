import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <p className="text-center mb-0">
          &copy; 2023 Reactivity AI Consulting. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
