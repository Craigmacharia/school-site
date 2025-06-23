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
      <hr></hr>



      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/254755453975"
        className="btn btn-success shadow"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          padding: '15px 18px',
          fontSize: '1.5rem',
          zIndex: 1000,
          backgroundColor: '#25D366'
        }}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="bi bi-whatsapp"></i>
      </motion.a>
    </div>
  );
};

export default Admissions;