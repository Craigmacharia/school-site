import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaFlask, FaRunning, FaUserTie, FaUserGraduate, FaBook } from 'react-icons/fa';

const staffMembers = [
  {
    name: "Mrs. Janet",
    role: "Headteacher",
    image: "/janet.png",
    icon: <FaUserTie className="text-brown" size={24} />
  },
  {
    name: "Mr. David",
    role: "Grade 1 Class Teacher",
    image: "/depa.png",
    icon: <FaChalkboardTeacher className="text-brown" size={24} />
  },
  {
    name: "Mrs. Mwanyiga",
    role: "Mathematics Teacher",
    image: "/math.png",
    icon: <FaBook className="text-brown" size={24} />
  },
  {
    name: "Doc. Mark",
    role: "Science & Health Teacher",
    image: "/doc.png",
    icon: <FaFlask className="text-brown" size={24} />
  },
  {
    name: "Ms. Leah",
    role: "School Secretary",
    image: "/cos.png",
    icon: <FaUserGraduate className="text-brown" size={24} />
  },
  {
    name: "Mr. Mwangi",
    role: "Games & PE Coach",
    image: "/pe.png",
    icon: <FaRunning className="text-brown" size={24} />
  },
];

const Staff = () => {
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
          className="text-center mb-5"
        >
          <h2 style={{ color: '#6f4e37' }}>Meet Our Dedicated Team</h2>
          <p className="lead" style={{ color: '#8b6b4b' }}>
            At Snowview Complex Academy, our staff members are passionate about education, committed to every learner's success, and form the heart of our school community.
          </p>
        </motion.div>

        <Row className="g-4">
          {staffMembers.map((member, index) => (
            <Col md={4} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-100 shadow-sm" style={{ borderColor: '#6f4e37' }}>
                  <div style={{ 
                    height: '250px', 
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: 'rgba(255,255,255,0.8)',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {member.icon}
                    </div>
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title style={{ color: '#6f4e37' }}>{member.name}</Card.Title>
                    <Card.Text style={{ color: '#8b6b4b' }}>{member.role}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-5"
        >
          <p style={{ color: '#6f4e37' }} className="mb-4">
            Interested in joining our team? We're always looking for passionate educators.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: '#6f4e37',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '30px',
              fontFamily: "'Comfortaa', cursive",
              cursor: 'pointer'
            }}
            onClick={() => window.location.href = 'mailto:careers@snowview.edu'}
          >
            Career Opportunities
          </motion.button>
        </motion.div>
      </Container>
    </div>
  );
};

export default Staff;
