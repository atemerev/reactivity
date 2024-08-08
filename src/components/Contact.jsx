import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'service_swpdi7h',
      'template_8gyrun9',
      {
        from_name: name,
        from_email: email,
        message: message
      },
      'tpMRtOajr-c3TjZhI'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    }, (err) => {
      console.log('FAILED...', err);
      setStatus('error');
    });
  };

  return (
    <Container>
      <h1 className="text-center mb-5">Contact Us</h1>
      {status === 'success' && (
        <Alert variant="success">Your message has been sent successfully!</Alert>
      )}
      {status === 'error' && (
        <Alert variant="danger">There was an error sending your message. Please try again.</Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Enter your message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn-primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
