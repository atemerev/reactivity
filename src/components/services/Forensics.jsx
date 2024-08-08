import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Forensics() {
  return (
    <Container>
      <h1 className="text-center mb-5">Advanced AI-Powered Forensics</h1>
      <p className="lead text-center mb-5">
        Unlock hidden evidence and patterns with our cutting-edge AI solutions for comprehensive forensic analysis.
      </p>
      <p>
        At Reactivity, we leverage state-of-the-art AI technologies to provide unparalleled forensic capabilities. Our services include:
      </p>
      <ul>
        <li><strong>Digital Forensics:</strong> Analyze digital devices and recover hidden or deleted data</li>
        <li><strong>Mobile Forensics:</strong> Extract and analyze data from smartphones and other mobile devices</li>
        <li><strong>Content Extraction:</strong> Efficiently process and analyze large volumes of digital content</li>
        <li><strong>Breach Mitigation:</strong> Identify vulnerabilities and develop strategies to prevent future breaches</li>
        <li><strong>Network Forensics:</strong> Investigate network traffic and identify suspicious activities</li>
        <li><strong>Cryptocurrency Tracking:</strong> Trace and analyze cryptocurrency transactions and wallets</li>
        <li><strong>Collaboration Network Analysis:</strong> Uncover hidden connections and patterns in communication networks</li>
        <li><strong>Supply Chain Anomaly Detection:</strong> Identify irregularities and potential risks in supply chains</li>
      </ul>
      <p>
        Our AI-driven approach enables us to process and analyze massive volumes of data, identifying patterns, anomalies, and evidence that would be impossible to detect through traditional methods. We combine machine learning, natural language processing, and advanced data visualization techniques to provide you with actionable forensic insights.
      </p>
      <p>
        Whether you're conducting a criminal investigation, performing due diligence, or securing your digital assets, our AI-powered forensic services provide the deep insights you need to make informed decisions and take appropriate action.
      </p>
      <p className="mb-5">
        Ready to harness the power of AI for your forensic needs? Let's uncover the truth together.
      </p>
      <div className="text-center">
        <Button as={Link} to="/contact" variant="primary" size="lg">
          Start Your Forensic Analysis Journey
        </Button>
      </div>
    </Container>
  );
}

export default Forensics;
