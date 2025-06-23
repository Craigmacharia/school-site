import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaFilePdf, FaDownload } from 'react-icons/fa';

const downloads = [
  {
    title: 'Junior School Application Form',
    file: '/downloads/junior_application.pdf',
    description: 'Form for students applying to Junior School (Grades 1-6)',
    icon: <FaFilePdf size={24} />
  },
  {
    title: 'Senior School Application Form',
    file: '/downloads/senior_application.pdf',
    description: 'Form for students applying to Senior School (Grades 7-12)',
    icon: <FaFilePdf size={24} />
  },
  {
    title: 'Fee Structure (All Classes)Form',
    file: '/downloads/fee_structure.pdf',
    description: 'Detailed breakdown of tuition and related costs for all grades',
    icon: <FaFilePdf size={24} />
  },
  {
    title: 'School Leaflet',
    file: '/downloads/school_leaflet.pdf',
    description: 'Comprehensive overview of our mission, programs, and facilities',
    icon: <FaFilePdf size={24} />
  },
  {
    title: 'Academic Calendar',
    file: '/downloads/academic_calendar.pdf',
    description: 'Important dates and events for the current academic year',
    icon: <FaFilePdf size={24} />
  },
  {
    title: 'School Uniform Policy',
    file: '/downloads/uniform_policy.pdf',
    description: 'Guidelines on approved school uniforms and dress code',
    icon: <FaFilePdf size={24} />
  }
];

const Downloads = () => {
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
          <h1 style={{ color: '#6f4e37' }}>Download Center</h1>
          <p className="lead" style={{ color: '#8b6b4b' }}>
            Access important school documents and forms
          </p>
        </motion.div>

        {/* Downloads Grid */}
        <Row className="g-4">
          {downloads.map((doc, index) => (
            <Col key={index} xs={12} sm={6} lg={4}>
              <motion.div
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-100 shadow-sm border-0" style={{ backgroundColor: 'white' }}>
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <div style={{ color: '#6f4e37', marginRight: '15px' }}>
                        {doc.icon}
                      </div>
                      <Card.Title style={{ color: '#6f4e37', marginBottom: 0 }}>
                        {doc.title}
                      </Card.Title>
                    </div>
                    <Card.Text style={{ flex: 1 }}>
                      {doc.description}
                    </Card.Text>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline-primary"
                        href={doc.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        style={{ 
                          fontFamily: "'Comfortaa', cursive",
                          borderColor: '#6f4e37',
                          color: 'white',
                          backgroundColor: '#6f4e37',
                          alignSelf: 'flex-start'
                        }}
                      >
                        <FaDownload className="me-2" />
                        Download
                      </Button>
                    </motion.div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 pt-4"
        >
          <Card className="border-0" style={{ backgroundColor: 'rgba(111, 78, 55, 0.1)' }}>
            <Card.Body>
              <h4 style={{ color: '#6f4e37' }}>Need Help?</h4>
              <p style={{ lineHeight: '1.8' }}>
                If you're having trouble accessing any documents or need alternative formats,
                please contact our administration office at{' '}
                <a href="mailto:info@snowview.edu" style={{ color: '#6f4e37' }}>
                  info@snowview.edu
                </a>{' '}
                or call +254 755 453 975.
              </p>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
};

export default Downloads;