import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Sample data - you can add real members here
const boardMembers = [
  {
    name: 'Prof. Janet Warui',
    role: 'Director',
    bio: 'Oversees school governance and strategic vision.',
    image: '/janet.png'
  },
  {
    name: 'Mr. David Otieno',
    role: 'Head Teacher',
    bio: 'Manages the schools day to activities and management.',
    image: '/depa.png'
  },
  {
    name: 'Mrs. Dee Mwenda',
    role: 'Head of pta',
    bio: 'Acts as the liaison between the school and parents.',
    image: '/mama.png'
  },
  {
    name: 'Dr. Mark Mavado',
    role: 'School Psychiatrist',
    bio: 'Manages the schools mental health for staff&students.',
    image: '/doc.png'
  },
  {
    name: 'H.E. John Lumbau',
    role: 'School Financier',
    bio: 'Provides the school with financial aid and support.',
    image: '/sponsor.png'
  },
  {
    name: 'Ms. Leah Kamau',
    role: 'Secretary',
    bio: 'Maintains records and communicates board decisions.',
    image: '/cos.png'
  }
];

const Board = () => {
  return (
    <div style={{ 
      fontFamily: "'Comfortaa', cursive",
      backgroundColor: '#f9f5f0',
      minHeight: '100vh',
      padding: '2rem 0'
    }}>
      <Container className="my-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center mb-5" style={{ color: '#6f4e37' }}>Meet Our Board</h2>
          
          <Row className="justify-content-center">
            {boardMembers.map((member, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-100 shadow-sm border-0" style={{ backgroundColor: 'white' }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Card.Img
                        variant="top"
                        src={member.image}
                        alt={member.name}
                        style={{ 
                          height: '300px', 
                          objectFit: 'cover',
                          borderBottom: '3px solid #6f4e37'
                        }}
                      />
                    </motion.div>
                    <Card.Body>
                      <Card.Title style={{ color: '#6f4e37' }}>{member.name}</Card.Title>
                      <Card.Subtitle className="mb-2" style={{ color: '#8b6b4b' }}>
                        {member.role}
                      </Card.Subtitle>
                      <Card.Text style={{ lineHeight: '1.6' }}>{member.bio}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Mission Statement Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 pt-4"
        >
          <Card className="border-0 shadow-sm" style={{ backgroundColor: '#6f4e37', color: 'white' }}>
            <Card.Body className="text-center">
              <h3 style={{ fontFamily: "'Comfortaa', cursive" }}>Our Board's Mission</h3>
              <p className="mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                "To provide visionary leadership and governance that ensures Snowview Complex Academy 
                delivers exceptional education in a nurturing environment, preparing students for 
                lifelong success and positive community impact."
              </p>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
};

export default Board;