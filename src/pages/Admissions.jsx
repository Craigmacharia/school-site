import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'animate.css';

const Admissions = () => {
  const [formData, setFormData] = useState({
    student_name: '',
    guardian_name: '',
    class: '',
    grades: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`New Admission Application - ${formData.student_name}`);
    const body = encodeURIComponent(`
Student Name: ${formData.student_name}
Guardian Name: ${formData.guardian_name}
Class Applying For: ${formData.class}
Grade History / Notes: ${formData.grades}
    `);

    const mailtoLink = `mailto:cmacharia482@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div style={{ 
      fontFamily: "'Comfortaa', cursive",
      backgroundColor: '#f9f5f0',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <div 
        className="text-white py-5 text-center"
        style={{ 
          backgroundColor: '#6f4e37',
          background: 'linear-gradient(135deg, #6f4e37 0%, #8b6b4b 100%)'
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-4 animate__animated animate__fadeIn">Admissions</h1>
            <p className="lead animate__animated animate__fadeIn animate__delay-1s">Begin your journey with Snowview Complex Academy</p>
          </motion.div>
        </Container>
      </div>

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-sm" style={{ backgroundColor: 'white' }}>
                <Card.Body>
                  <h2 className="mb-4 text-center" style={{ color: '#6f4e37' }}>Admissions Form</h2>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-4"
                    >
                      <div style={{ fontSize: '4rem', color: '#6f4e37' }}>✓</div>
                      <h3 className="mt-3" style={{ color: '#6f4e37' }}>Thank You!</h3>
                      <p>Your application has been submitted successfully.</p>
                      <p>We will contact you shortly with more information.</p>
                    </motion.div>
                  ) : (
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-4">
                        <Form.Label style={{ color: '#6f4e37', fontWeight: '500' }}>Student Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="student_name"
                          value={formData.student_name}
                          onChange={handleChange}
                          placeholder="Enter student's full name"
                          required
                          style={{ 
                            borderColor: '#d1c7b7',
                            fontFamily: "'Comfortaa', cursive"
                          }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label style={{ color: '#6f4e37', fontWeight: '500' }}>Guardian Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="guardian_name"
                          value={formData.guardian_name}
                          onChange={handleChange}
                          placeholder="Enter guardian's full name"
                          required
                          style={{ 
                            borderColor: '#d1c7b7',
                            fontFamily: "'Comfortaa', cursive"
                          }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label style={{ color: '#6f4e37', fontWeight: '500' }}>Class Applying For</Form.Label>
                        <Form.Control
                          type="text"
                          name="class"
                          value={formData.class}
                          onChange={handleChange}
                          placeholder="e.g., Grade 4, Class 8"
                          required
                          style={{ 
                            borderColor: '#d1c7b7',
                            fontFamily: "'Comfortaa', cursive"
                          }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label style={{ color: '#6f4e37', fontWeight: '500' }}>Grade History / Notes</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="grades"
                          value={formData.grades}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Include previous school details or performance"
                          style={{ 
                            borderColor: '#d1c7b7',
                            fontFamily: "'Comfortaa', cursive"
                          }}
                        />
                      </Form.Group>

                      <div className="text-center">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button 
                            variant="primary" 
                            type="submit"
                            style={{ 
                              backgroundColor: '#6f4e37',
                              borderColor: '#6f4e37',
                              fontFamily: "'Comfortaa', cursive",
                              padding: '10px 30px',
                              fontSize: '1.1rem'
                            }}
                          >
                            Submit Application
                          </Button>
                        </motion.div>
                      </div>
                    </Form>
                  )}
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Additional Information Section */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-0 shadow-sm" style={{ backgroundColor: 'white' }}>
                <Card.Body>
                  <h3 className="mb-3 text-center" style={{ color: '#6f4e37' }}>Admission Process</h3>
                  <div style={{ lineHeight: '1.8' }}>
                    <p>1. Complete and submit the application form</p>
                    <p>2. Our admissions team will contact you within 2 business days</p>
                    <p>3. Schedule a school tour and interview (if required)</p>
                    <p>4. Submit required documents (birth certificate, previous school reports)</p>
                    <p>5. Receive admission decision and enrollment package</p>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <footer 
        className="py-5 mt-5"
        style={{ 
          backgroundColor: '#4a3520',
          color: 'white',
          borderTop: '3px solid #6f4e37'
        }}
      >
        <Container>
          <Row className="g-4">
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
                      <a href="/contact" className="text-white text-decoration-none hover-underline">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>

            <Col lg={4}>
              <h5 className="mb-3" style={{ fontWeight: '600', color: '#d1c7b7' }}>Connect With Us</h5>
              <div className="d-flex gap-2 mb-3">
                {['facebook', 'twitter', 'instagram', 'youtube'].map((platform) => (
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
              <a 
                href="https://wa.me/254755453975" 
                className="btn btn-success mt-3"
                style={{ fontFamily: "'Comfortaa', cursive" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp me-2"></i> Chat on WhatsApp
              </a>
            </Col>
          </Row>

          <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          
          <Row>
            <Col className="text-center">
              <p className="small mb-2">
                &copy; {new Date().getFullYear()} Snowview Complex Academy. All rights reserved.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="#" className="text-white-50 text-decoration-none small">Privacy Policy</a>
                <a href="#" className="text-white-50 text-decoration-none small">Terms of Service</a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Admissions;