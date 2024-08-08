import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Services() {
  return (
    <Container>
      <h1 className="text-center mb-5">Our Services</h1>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>AI Strategy Consulting</Card.Title>
              <Card.Text>
                We help businesses develop comprehensive AI strategies aligned with their goals and market position.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Machine Learning Development</Card.Title>
              <Card.Text>
                Our team designs and implements custom machine learning solutions to solve complex business problems.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>AI Integration Services</Card.Title>
              <Card.Text>
                We provide seamless integration of AI technologies into existing systems and workflows.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
