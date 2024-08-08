import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <h1 className="text-center mb-3">Empower Your Future with <span className="text-primary">Reactivity AI</span></h1>
      <h2 className="text-center mb-5 text-muted">Transforming Industries Through Cutting-Edge AI Solutions</h2>
      
      <p className="lead text-center mb-5">
        At Reactivity AI, we're not just predicting the future – we're shaping it. Our advanced AI solutions are 
        revolutionizing industries, unlocking hidden potentials, and driving unprecedented growth. Are you ready 
        to lead the AI revolution?
      </p>
      
      <Row className="h-100 mb-5">
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column">
              <Card.Title><span className="text-primary fw-bold">&gt;</span>Finance & Trading</Card.Title>
              <Card.Text className="flex-grow-1">
                Supercharge your financial strategies with AI-powered market making, predictive analytics, and risk management. 
                Stay ahead in the fast-paced world of finance.
              </Card.Text>
              <Button as={Link} to="/services/finance-trading" variant="outline-primary" className="mt-auto">
                Optimize Your Finances
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column">
              <Card.Title><span className="text-primary fw-bold">&gt;</span>Intelligence Analysis</Card.Title>
              <Card.Text className="flex-grow-1">
                Uncover critical insights with our AI-driven network analysis, influence mapping, and deep content analysis. 
                Transform data into actionable intelligence.
              </Card.Text>
              <Button as={Link} to="/services/intelligence-analysis" variant="outline-primary" className="mt-auto">
                Unlock Hidden Insights
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column">
              <Card.Title><span className="text-primary fw-bold">&gt;</span>Forensics</Card.Title>
              <Card.Text className="flex-grow-1">
                Revolutionize your investigations with AI-powered digital forensics, cryptocurrency tracking, and 
                advanced anomaly detection. Uncover the truth with unprecedented precision.
              </Card.Text>
              <Button as={Link} to="/services/forensics" variant="outline-primary" className="mt-auto">
                Enhance Your Investigations
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="mt-5">
        <Col className="text-center">
          <h3 className="mb-4">Ready to Transform Your Business with AI?</h3>
          <Button as={Link} to="/contact" variant="primary" size="lg">
            Start Your AI Journey Today
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
