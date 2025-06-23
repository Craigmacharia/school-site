import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const whatsappMessage = `Hello, my name is ${name}.\nEmail: ${email}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/254755453975?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div style={{ 
      fontFamily: "'Comfortaa', cursive",
      backgroundColor: '#f9f5f0',
      minHeight: '100vh',
      padding: '2rem 0'
    }}>
      <Container className="my-5">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h1 style={{ color: '#6f4e37' }}>Contact Us</h1>
          <p className="lead" style={{ color: '#8b6b4b' }}>
            We'd love to hear from you
          </p>
        </motion.div>

        <Row className="g-4 mb-5">
          {/* Contact Info */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: 'white' }}>
                <Card.Body>
                  <Card.Title style={{ color: '#6f4e37' }}>Reach Out to Us</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex align-items-center py-3">
                      <div style={{ color: '#6f4e37', marginRight: '15px' }}>
                        <FaMapMarkerAlt size={20} />
                      </div>
                      <div>
                        <strong>Address:</strong> Snowview Complex Academy, Nyeri
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center py-3">
                      <div style={{ color: '#6f4e37', marginRight: '15px' }}>
                        <FaPhone size={18} />
                      </div>
                      <div>
                        <strong>Phone:</strong>{' '}
                        <a 
                          href="https://wa.me/254755453975" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: '#6f4e37' }}
                        >
                          +254 755 453975 (WhatsApp)
                        </a>
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center py-3">
                      <div style={{ color: '#6f4e37', marginRight: '15px' }}>
                        <FaEnvelope size={18} />
                      </div>
                      <div>
                        <strong>Email:</strong>{' '}
                        <a 
                          href="mailto:cmacharia482@gmail.com" 
                          style={{ color: '#6f4e37' }}
                        >
                          cmacharia482@gmail.com
                        </a>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* WhatsApp Form */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: 'white' }}>
                <Card.Body>
                  <h4 style={{ color: '#6f4e37' }}>Send Us a Message</h4>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ 
                          borderColor: '#d1c7b7',
                          fontFamily: "'Comfortaa', cursive"
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ 
                          borderColor: '#d1c7b7',
                          fontFamily: "'Comfortaa', cursive"
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Your Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={4}
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ 
                          borderColor: '#d1c7b7',
                          fontFamily: "'Comfortaa', cursive"
                        }}
                      />
                    </Form.Group>

                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        variant="primary" 
                        type="submit"
                        style={{ 
                          backgroundColor: '#25D366',
                          borderColor: '#25D366',
                          fontFamily: "'Comfortaa', cursive"
                        }}
                      >
                        <FaWhatsapp className="me-2" />
                        Send via WhatsApp
                      </Button>
                    </motion.div>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-5"
        >
          <h3 className="text-center mb-4" style={{ color: '#6f4e37' }}>Our Location</h3>
          <div className="ratio ratio-16x9 rounded shadow">
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818690258619!2d36.95852591475315!3d-0.4226707352329474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182899e418e0d317%3A0x1234567890abcdef!2sNyeri!5e0!3m2!1sen!2ske!4v1616161616161"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Contact;
