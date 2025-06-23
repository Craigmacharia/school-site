import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Page components
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import Board from './pages/Board';
import Downloads from './pages/Downloads';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <Router>
      <Navbar 
        expand="lg" 
        sticky="top"
        style={{ 
          backgroundColor: '#6f4e37',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="/h.jpg" // Replace with your logo
              alt="School Logo"
              style={{
                height: '40px',
                width: 'auto',
                marginRight: '10px',
                borderRadius: '4px'
              }}
            />
            <span style={{ 
              fontFamily: "'Comfortaa', cursive",
              fontWeight: '700',
              color: 'white'
            }}>
              Snowview Complex
            </span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="navbar-nav" style={{ borderColor: 'rgba(255,255,255,0.5)' }}>
            <span style={{ color: 'white' }}>☰</span>
          </Navbar.Toggle>
          
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto align-items-lg-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Nav.Link 
                  as={Link} 
                  to="/" 
                  className="text-white mx-2 px-3 py-2"
                  style={{ fontFamily: "'Comfortaa', cursive" }}
                >
                  Home
                </Nav.Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }}>
                <Nav.Link 
                  as={Link} 
                  to="/admissions" 
                  className="text-white mx-2 px-3 py-2"
                  style={{ fontFamily: "'Comfortaa', cursive" }}
                >
                  Admissions
                </Nav.Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }}>
                <Nav.Link 
                  as={Link} 
                  to="/board" 
                  className="text-white mx-2 px-3 py-2"
                  style={{ fontFamily: "'Comfortaa', cursive" }}
                >
                  Board
                </Nav.Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }}>
                <Nav.Link 
                  as={Link} 
                  to="/downloads" 
                  className="text-white mx-2 px-3 py-2"
                  style={{ fontFamily: "'Comfortaa', cursive" }}
                >
                  Downloads
                </Nav.Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }}>
                <Nav.Link 
                  as={Link} 
                  to="/gallery" 
                  className="text-white mx-2 px-3 py-2"
                  style={{ fontFamily: "'Comfortaa', cursive" }}
                >
                  Gallery
                </Nav.Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }}>
                <Nav.Link 
                  as={Link} 
                  to="/contact" 
                  className="text-white mx-2 px-3 py-2"
                  style={{ fontFamily: "'Comfortaa', cursive" }}
                >
                  Contact
                </Nav.Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  as={Link} 
                  to="/admissions" 
                  variant="outline-light" 
                  className="ms-lg-3 mt-2 mt-lg-0"
                  style={{ 
                    fontFamily: "'Comfortaa', cursive",
                    fontWeight: '600'
                  }}
                >
                  Apply Now
                </Button>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/board" element={<Board />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;