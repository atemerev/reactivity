import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import FinanceTrading from './components/services/FinanceTrading';
import IntelligenceAnalysis from './components/services/IntelligenceAnalysis';
import Medicine from './components/services/Medicine';
import Forensics from './components/services/Forensics';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Container className="flex-grow-1 mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/finance-trading" element={<FinanceTrading />} />
            <Route path="/services/intelligence-analysis" element={<IntelligenceAnalysis />} />
            <Route path="/services/medicine" element={<Medicine />} />
            <Route path="/services/forensics" element={<Forensics />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
