import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light text-dark py-4 mt-5">
      <Container>
        <p className="text-center mb-0">
          &copy; 2024 Reactivity Sàrl, Geneva, Switzerland. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
