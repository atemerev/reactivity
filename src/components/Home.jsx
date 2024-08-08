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
              <Card.Title>AI Strategy</Card.Title>
              <Card.Text className="flex-grow-1">
                We help businesses develop and implement effective AI strategies to stay ahead in the competitive market.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title>Machine Learning Solutions</Card.Title>
              <Card.Text className="flex-grow-1">
                Our expert team designs and develops custom machine learning solutions tailored to your specific needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <Card.Title>AI Integration</Card.Title>
              <Card.Text className="flex-grow-1">
                We assist in seamlessly integrating AI technologies into your existing systems and workflows.
              </Card.Text>
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
