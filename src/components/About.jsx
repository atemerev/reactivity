import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <h1 className="text-center mb-5">About Reactivity AI Consulting</h1>
      <Row>
        <Col>
          <p>
            Reactivity AI Consulting is a leading artificial intelligence consulting firm dedicated to helping businesses harness the power of AI and machine learning. Our team of expert consultants brings years of experience in AI strategy, development, and integration.
          </p>
          <p>
            We believe that AI has the potential to transform businesses across all industries. Our mission is to make AI accessible and beneficial for companies of all sizes, from startups to large enterprises.
          </p>
          <p>
            At Reactivity AI Consulting, we pride ourselves on our ability to translate complex AI concepts into practical, actionable strategies that drive real business value. We work closely with our clients to understand their unique challenges and opportunities, and develop tailored solutions that meet their specific needs.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
