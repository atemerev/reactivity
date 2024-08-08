import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Medicine() {
  return (
    <Container>
      <h1 className="text-center mb-5">Revolutionizing Medicine with AI</h1>
      <p className="lead text-center mb-5">
        Harness the power of cutting-edge AI to transform medical research, enhance patient care, and accelerate breakthroughs in healthcare.
      </p>
      <p>
        At Reactivity, we leverage state-of-the-art AI technologies to provide unparalleled capabilities in medical research and healthcare. Our services include:
      </p>
      <ul>
        <li><strong>Epidemiological Simulations:</strong> Model disease spread and intervention strategies with unprecedented accuracy</li>
        <li><strong>Omics Research:</strong> Analyze complex biological data across genomics, proteomics, metabolomics, and more</li>
        <li><strong>Drug Interactions and Synergy Modeling:</strong> Predict and optimize drug combinations for enhanced therapeutic effects</li>
        <li><strong>Translational Medicine:</strong> Bridge the gap between laboratory discoveries and clinical applications</li>
        <li><strong>Personalized Medicine:</strong> Tailor treatments to individual patient profiles for optimal outcomes</li>
        <li><strong>Network Modeling:</strong> Comprehensively map and analyze various biological networks:</li>
        <ul>
          <li>Genomic Networks</li>
          <li>Immune Networks</li>
          <li>Drug Interaction Networks</li>
          <li>Metabolic Networks</li>
        </ul>
      </ul>
      <p>
        Our AI-driven approach enables us to process and analyze massive volumes of medical and biological data, identifying patterns, relationships, and insights that would be impossible to detect through traditional methods. We combine machine learning, network analysis, and advanced data visualization techniques to provide you with actionable intelligence in the medical field.
      </p>
      <p>
        Whether you're conducting groundbreaking research, developing new drugs, or working to improve patient outcomes, our AI-powered medical services provide the deep insights you need to make informed decisions and drive innovation in healthcare.
      </p>
      <p className="mb-5">
        Ready to harness the power of AI for your medical research and healthcare needs? Let's revolutionize medicine together.
      </p>
      <div className="text-center">
        <Button as={Link} to="/contact" variant="primary" size="lg">
          Start Your Medical AI Journey
        </Button>
      </div>
    </Container>
  );
}

export default Medicine;
