import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <h1 className="text-center mb-5">Welcome to Reactivity AI Consulting</h1>
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
    </Container>
  );
}

export default Home;
