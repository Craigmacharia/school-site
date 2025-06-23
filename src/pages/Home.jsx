import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaRunning, FaChalkboardTeacher, FaWhatsapp } from 'react-icons/fa';
import { IoLibraryOutline, IoCalendarOutline } from 'react-icons/io5';
import { BsBook, BsLaptop } from 'react-icons/bs';
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
      description: "State-of-the-art classrooms and laboratories for research",
      icon: <FaSchool size={32} />
    },
    {
      title: "Sports & Arts",
      description: "Comprehensive extracurricular programs included for excelence",
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
              <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
                <h5>Interactive Classroom Learning</h5>
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
              <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
                <h5>Modern Science Laboratories</h5>
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
              <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
                <h5>Comprehensive Sports Facilities</h5>
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
          color: 'white'
        }}
      >
        <Container>
          <Row>
            <Col lg={4} className="mb-4">
              <h5 className="mb-3">Snowview Complex Academy</h5>
              <p className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                P.O. Box 12345, Nairobi, Kenya
              </p>
              <p className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                +254 755 453 975
              </p>
              <p className="mb-0">
                <i className="bi bi-envelope me-2"></i>
                admissions@snowview.edu
              </p>
            </Col>
            <Col lg={4} className="mb-4">
              <h5 className="mb-3">Quick Links</h5>
              <div className="d-flex flex-column">
                <a href="admissions" className="text-white mb-2">Admissions</a>
                <a href="downloads" className="text-white mb-2">Downloads</a>
                <a href="gallery" className="text-white mb-2">Gallery</a>
                <a href="contact" className="text-white">Contact Us</a>
              </div>
            </Col>
            </Row>
            <Col lg={4}>
              <h5 className="mb-3">Connect With Us</h5>
              <div className="d-flex gap-3 mb-3">
                <a href="#" className="text-white fs-4"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white fs-4"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-white fs-4"><i className="bi bi-instagram"></i></a>
                <a href="https://wa.me/254755453975" className="text-white fs-4"><i className="bi bi-whatsapp"></i></a>
              </div>
              </Col>
          <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          <div className="text-center small">
            &copy; {new Date().getFullYear()} Snowview Complex Academy. All rights reserved.
          </div>
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
          backgroundColor: '#25D366'
        }}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp size={24} />
      </motion.a>
    </div>
  );
};

export default Home;