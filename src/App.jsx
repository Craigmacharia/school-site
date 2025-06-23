import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

// Page components (we'll create these files next)
import Home from './pages/Home'
import Admissions from './pages/Admissions'
import Board from './pages/Board'
import Downloads from './pages/Downloads'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">School Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/admissions">Admissions</Nav.Link>
              <Nav.Link as={Link} to="/board">Board</Nav.Link>
              <Nav.Link as={Link} to="/downloads">Downloads</Nav.Link>
              <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/board" element={<Board />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
