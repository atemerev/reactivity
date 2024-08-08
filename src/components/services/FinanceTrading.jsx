import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FinanceTrading() {
  return (
    <Container>
      <h1 className="text-center mb-5">Revolutionize Your Finance & Trading with AI</h1>
      <p className="lead text-center mb-5">
        Harness the power of cutting-edge AI to transform your financial operations, optimize trading strategies, 
        and stay ahead in the ever-evolving world of finance.
      </p>
      <p>
        Our AI solutions for finance and trading leverage state-of-the-art technologies to provide 
        advanced capabilities across various areas of financial markets. Empower your business with:
      </p>
      <ul>
        <li><strong>Advanced Automated Market Making:</strong> Optimize liquidity provision and reduce spreads</li>
        <li><strong>High-Fidelity Exchange Simulations:</strong> Test strategies in realistic market conditions</li>
        <li><strong>Stochastic Market Modeling:</strong> Gain deeper insights into market dynamics</li>
        <li><strong>Strategy Optimizations:</strong> Refine your trading approaches for maximum efficiency</li>
        <li><strong>TWAP/VWAP Liquidations:</strong> Execute large orders with minimal market impact</li>
      </ul>
      <p>
        We employ cutting-edge AI-native techniques to keep you at the forefront of financial technology:
      </p>
      <ul>
        <li><strong>Time Series Transformer Models:</strong> Uncover complex patterns in market data for predictive insights</li>
        <li><strong>Quantum Machine Learning:</strong> Solve discrete optimization problems in finance with unprecedented speed</li>
      </ul>
      <p>
        Our team of experts combines deep knowledge in both finance and artificial intelligence to deliver 
        sophisticated, tailored solutions. We're not just keeping pace with the market – we're helping you lead it.
      </p>
      <p className="mb-5">
        Ready to revolutionize your financial operations? Let's harness the power of AI to give your business 
        the competitive edge it needs in today's fast-paced financial markets.
      </p>
      <div className="text-center">
        <Button as={Link} to="/contact" variant="primary" size="lg">
          Start Your Financial AI Journey
        </Button>
      </div>
    </Container>
  );
}

export default FinanceTrading;
