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
              <Card.Title><span className="text-primary fw-bold">&gt;</span>Finance/Trading</Card.Title>
              <Card.Text className="flex-grow-1">
                Transform your financial operations with AI-powered market making, strategy optimization, and cutting-edge predictive insights.
              </Card.Text>
              <Button as={Link} to="/services/finance-trading" variant="outline-primary" className="mt-auto">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title><span className="text-primary fw-bold">&gt;</span>Intelligence Analysis</Card.Title>
              <Card.Text className="flex-grow-1">
                Uncover hidden patterns and gain strategic insights with our AI-driven network analysis, influence mapping, and deep content analysis.
              </Card.Text>
              <Button as={Link} to="/services/intelligence-analysis" variant="outline-primary" className="mt-auto">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title><span className="text-primary fw-bold">&gt;</span>Forensics</Card.Title>
              <Card.Text className="flex-grow-1">
                Revolutionize your investigations with AI-powered digital forensics, cryptocurrency tracking, and advanced anomaly detection.
              </Card.Text>
              <Button as={Link} to="/services/forensics" variant="outline-primary" className="mt-auto">
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
