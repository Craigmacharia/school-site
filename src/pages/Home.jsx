import React from 'react';
import { Container, Row, Col, Button, Card, Carousel, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaRunning, FaChalkboardTeacher, FaWhatsapp } from 'react-icons/fa';
import 'animate.css';

const Home = () => {
  // Feature tiles data with minimalist icons
  const features = [
    {
      title: "Academic Excellence",
      description: "Consistent top performance in exams",
      icon: <FaGraduationCap size={32} />
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art classrooms and laboratories",
      icon: <FaSchool size={32} />
    },
    {
      title: "Sports & Arts",
      description: "Comprehensive extracurricular programs and sports",
      icon: <FaRunning size={32} />
    },
    {
      title: "Qualified Staff",
      description: "Dedicated and experienced teaching faculty",
      icon: <FaChalkboardTeacher size={32} />
    }
  ];

  return (
    <div style={{ 
      position: 'relative', 
      fontFamily: "'Comfortaa', cursive",
      backgroundColor: '#f9f5f0'
    }}>
      {/* Hero Section with Image */}
      <div 
        className="text-white py-5"
        style={{ 
          background: 'linear-gradient(rgba(111, 78, 55, 0.7), rgba(139, 107, 75, 0.7)), url(/out.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-4 animate__animated animate__fadeIn" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Welcome to Snowview Complex Academy
            </h1>
            <p className="lead animate__animated animate__fadeIn animate__delay-1s" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
              Where excellence meets opportunity
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline-light" 
                size="lg" 
                className="mt-3 animate__animated animate__fadeIn animate__delay-1s"
                style={{ 
                  fontFamily: "'Comfortaa', cursive",
                  fontWeight: '600',
                  letterSpacing: '1px'
                }}
              >
                Explore Our Programs
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* About Section */}
      <Container className="my-5 py-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-center mb-4" style={{ color: '#6f4e37' }}>About Our School</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'center' }}>
                Snowview Complex Academy is a leading institution committed to academic excellence and holistic development. 
                Our vibrant community fosters creativity, discipline, and leadership in a supportive environment.
                We offer modern facilities, passionate teachers, and a well-rounded curriculum tailored for future success.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Features Section */}
      <Container className="my-5 py-4">
        <h2 className="text-center mb-5" style={{ color: '#6f4e37' }}>Why Choose Us</h2>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={3} sm={6} key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 15px 30px rgba(111, 78, 55, 0.15)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className="h-100 text-center border-0 shadow-sm" 
                    style={{ 
                      backgroundColor: 'white',
                      cursor: 'pointer',
                      borderRadius: '12px',
                      overflow: 'hidden'
                    }}
                  >
                    <Card.Body className="p-4">
                      <motion.div
                        whileHover={{ color: '#6f4e37' }}
                        style={{ 
                          color: '#8b6b4b',
                          marginBottom: '1.5rem'
                        }}
                      >
                        {feature.icon}
                      </motion.div>
                      <h5 style={{ color: '#6f4e37', marginBottom: '1rem' }}>{feature.title}</h5>
                      <p style={{ color: '#555', fontSize: '0.95rem' }}>{feature.description}</p>
                      <motion.div
                        initial={{ width: 0 }}
                        whileHover={{ width: '40%' }}
                        style={{
                          height: '3px',
                          backgroundColor: '#6f4e37',
                          margin: '1.5rem auto 0',
                          transition: 'width 0.4s ease'
                        }}
                      />
                    </Card.Body>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Image Carousel */}
      <Container className="my-5 py-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center mb-4" style={{ color: '#6f4e37' }}>Our Learning Environment</h2>
          <Carousel fade indicators={false} className="shadow-lg rounded overflow-hidden">
            <Carousel.Item>
              <div className="ratio ratio-16x9">
                <img 
                  className="d-block w-100" 
                  src="/pupils.png" 
                  alt="Students in classroom" 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <Carousel.Caption className="bg-brown bg-opacity-50 p-2 rounded">
                <h5>Interactive Learning</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="ratio ratio-16x9">
                <img 
                  className="d-block w-100" 
                  src="/out.png" 
                  alt="Science lab" 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <Carousel.Caption className="bg-brown bg-opacity-50 p-2 rounded">
                <h5>Modern Laboratories</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="ratio ratio-16x9">
                <img 
                  className="d-block w-100" 
                  src="/t.jpg" 
                  alt="Sports field" 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <Carousel.Caption className="bg-brown bg-opacity-50 p-2 rounded">
                <h5>Comprehensive Facilities</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </motion.div>
      </Container>

      {/* Call to Action */}
      <div 
        className="py-5 text-center text-white"
        style={{ 
          background: 'linear-gradient(135deg, #6f4e37 0%, #8b6b4b 100%)'
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4">Ready to Join Our Community?</h2>
            <div className="d-flex justify-content-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline-light" 
                  size="lg"
                  style={{ 
                    fontFamily: "'Comfortaa', cursive",
                    fontWeight: '600'
                  }}
                >
                  Apply Now
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="light" 
                  size="lg"
                  style={{ 
                    fontFamily: "'Comfortaa', cursive",
                    color: '#6f4e37',
                    fontWeight: '600'
                  }}
                >
                  Schedule a Visit
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Footer */}
      <footer 
        className="py-5"
        style={{ 
          backgroundColor: '#4a3520',
          color: 'white',
          borderTop: '3px solid #6f4e37'
        }}
      >
        <Container>
          <Row className="g-4">
            {/* School Info Column */}
            <Col lg={4} className="mb-4">
              <div className="d-flex flex-column h-100">
                <div className="d-flex align-items-center mb-3">
                  <img 
                    src="/h.jpg" 
                    alt="School Logo" 
                    style={{ 
                      height: '60px', 
                      width: 'auto',
                      marginRight: '15px',
                      borderRadius: '8px'
                    }}
                  />
                  <h5 style={{ fontWeight: '600', margin: 0 }}>Snowview Complex Academy</h5>
                </div>
                
                <div className="mb-4">
                  <p style={{ lineHeight: '1.6' }}>
                    A premier educational institution committed to academic excellence and holistic development.
                  </p>
                </div>
                
                <div className="contact-info">
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-geo-alt-fill me-2" style={{ color: '#d1c7b7' }}></i>
                    <span>P.O. Box 12345, Nairobi, Kenya</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-telephone-fill me-2" style={{ color: '#d1c7b7' }}></i>
                    <a href="tel:+254755453975" className="text-white text-decoration-none">+254 755 453 975</a>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-envelope-fill me-2" style={{ color: '#d1c7b7' }}></i>
                    <a href="mailto:admissions@snowview.edu" className="text-white text-decoration-none">admissions@snowview.edu</a>
                  </div>
                </div>
              </div>
            </Col>

            {/* Quick Links Column */}
            <Col lg={4} className="mb-4">
              <h5 className="mb-3" style={{ fontWeight: '600', color: '#d1c7b7' }}>Quick Links</h5>
              <Row>
                <Col sm={6}>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="/" className="text-white text-decoration-none hover-underline">
                        Home
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="/about" className="text-white text-decoration-none hover-underline">
                        About Us
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="/admissions" className="text-white text-decoration-none hover-underline">
                        Admissions
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="/academics" className="text-white text-decoration-none hover-underline">
                        Academics
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col sm={6}>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <a href="/downloads" className="text-white text-decoration-none hover-underline">
                        Downloads
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="/gallery" className="text-white text-decoration-none hover-underline">
                        Gallery
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="/news" className="text-white text-decoration-none hover-underline">
                        News & Events
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="/contact" className="text-white text-decoration-none hover-underline">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>

            {/* Social & Newsletter Column */}
            <Col lg={4}>
              <h5 className="mb-3" style={{ fontWeight: '600', color: '#d1c7b7' }}>Stay Connected</h5>
              
              {/* Social Media */}
              <div className="mb-4">
                <div className="d-flex gap-2 mb-3">
                  {['facebook', 'twitter', 'instagram', 'youtube', 'linkedin'].map((platform) => (
                    <a 
                      key={platform}
                      href="#" 
                      className="social-icon d-flex align-items-center justify-content-center"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <i className={`bi bi-${platform}`}></i>
                    </a>
                  ))}
                </div>
                
                {/* WhatsApp CTA */}
                <div 
                  className="d-flex align-items-center p-3 rounded" 
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '8px'
                  }}
                >
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: '#25D366'
                    }}
                  >
                    <i className="bi bi-whatsapp text-white fs-5"></i>
                  </div>
                  <div>
                    <p className="mb-1 small">Need immediate assistance?</p>
                    <a 
                      href="https://wa.me/254755453975" 
                      className="text-white text-decoration-none fw-bold"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="newsletter">
                <h6 className="mb-2" style={{ color: '#d1c7b7' }}>Subscribe to our newsletter</h6>
                <Form className="d-flex">
                  <Form.Control 
                    type="email" 
                    placeholder="Your email" 
                    className="rounded-0 border-0"
                    style={{ 
                      fontFamily: "'Comfortaa', cursive",
                      backgroundColor: 'rgba(255,255,255,0.9)'
                    }}
                  />
                  <Button 
                    variant="primary" 
                    className="rounded-0"
                    style={{ 
                      fontFamily: "'Comfortaa', cursive",
                      backgroundColor: '#6f4e37',
                      borderColor: '#6f4e37'
                    }}
                  >
                    Subscribe
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>

          {/* Copyright */}
          <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          <Row>
            <Col className="text-center">
              <p className="small mb-2">
                &copy; {new Date().getFullYear()} Snowview Complex Academy. All rights reserved.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="#" className="text-white-50 text-decoration-none small hover-underline">Privacy Policy</a>
                <a href="#" className="text-white-50 text-decoration-none small hover-underline">Terms of Service</a>
                <a href="#" className="text-white-50 text-decoration-none small hover-underline">Sitemap</a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/254755453975"
        className="btn btn-success shadow d-flex align-items-center justify-content-center"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          zIndex: 1000,
          backgroundColor: '#25D366',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        whileHover={{ scale: 1.1, boxShadow: '0 6px 16px rgba(0,0,0,0.3)' }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp size={24} />
      </motion.a>
    </div>
  );
};

export default Home;