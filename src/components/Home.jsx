import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <h1 className="text-center mb-5">Welcome to <span className="text-primary">Reactivity AI</span> Consulting</h1>
      <Row className="h-100">
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Finance/Trading</Card.Title>
              <Card.Text className="flex-grow-1">
                Leverage AI for data-driven financial decisions, optimized trading strategies, and effective risk management.
              </Card.Text>
              <Button as={Link} to="/services/finance-trading" variant="primary" className="mt-auto">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Intelligence Analysis</Card.Title>
              <Card.Text className="flex-grow-1">
                Process and analyze large volumes of data to extract meaningful insights and actionable intelligence.
              </Card.Text>
              <Button as={Link} to="/services/intelligence-analysis" variant="primary" className="mt-auto">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Medicine</Card.Title>
              <Card.Text className="flex-grow-1">
                Improve patient care with AI-powered medical image analysis, predictive diagnostics, and personalized treatment plans.
              </Card.Text>
              <Button as={Link} to="/services/medicine" variant="primary" className="mt-auto">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <Button as={Link} to="/contact" variant="primary" size="lg">
            Contact Us
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
