import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <h1 className="text-center mb-5">Welcome to Reactivity AI Consulting</h1>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>AI Strategy</Card.Title>
              <Card.Text>
                We help businesses develop and implement effective AI strategies to stay ahead in the competitive market.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Machine Learning Solutions</Card.Title>
              <Card.Text>
                Our expert team designs and develops custom machine learning solutions tailored to your specific needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>AI Integration</Card.Title>
              <Card.Text>
                We assist in seamlessly integrating AI technologies into your existing systems and workflows.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
