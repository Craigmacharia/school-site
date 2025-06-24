import React, { useState } from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import { FaChalkboardTeacher, FaUserGraduate, FaUserTie, FaBullseye, FaEye, FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const stats = [
    { id: 1, value: 28, label: "Qualified Teachers", icon: <FaChalkboardTeacher /> },
    { id: 2, value: 420, label: "Enrolled Students", icon: <FaUserGraduate /> },
    { id: 3, value: 156, label: "Successful Graduates", icon: <FaUserTie /> }
  ]

  return (
    <Container className="my-5 py-4" style={{ 
      fontFamily: "'Comfortaa', cursive",
      maxWidth: '1200px'
    }}>
      {/* Google Fonts link */}
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      <motion.h2 
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          color: '#5d4037',
          fontWeight: '700',
          fontSize: '2.5rem',
          borderBottom: '3px solid #8d6e63',
          paddingBottom: '15px',
          display: 'inline-block'
        }}
      >
        About Snowview Complex Academy
      </motion.h2>

      {/* History Section */}
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(93, 64, 55, 0.2)'
            }}>
              <Image
                src="/out.png"
                alt="School compound"
                fluid
                style={{
                  width: '100%',
                  height: 'auto',
                  transition: 'transform 0.5s',
                  transform: hoveredCard === 1 ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(93, 64, 55, 0.8)',
                color: 'white',
                padding: '20px',
                transform: hoveredCard === 1 ? 'translateY(0)' : 'translateY(100%)',
                transition: 'transform 0.3s ease-out'
              }}>
                <h4>Our Humble Beginnings</h4>
                <p>Founded in 2005 with just 3 classrooms and 45 students</p>
              </div>
            </div>
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 style={{ color: '#5d4037', marginBottom: '20px' }}>Our History</h3>
            <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
              Snowview Complex Academy was established in 2005 by a group of passionate educators who envisioned a learning institution that would combine academic excellence with strong moral values. Starting with just three classrooms and 45 students, our school has grown steadily over the years, becoming one of the most respected primary schools in Nyeri County.
            </p>
            <p style={{ lineHeight: '1.8' }}>
              In 2012, we expanded our facilities to include a modern science lab and computer center. The year 2018 marked another milestone when we introduced our comprehensive talent development program. Today, we proudly serve over 400 students with a team of dedicated professionals committed to shaping future leaders.
            </p>
          </motion.div>
        </Col>
      </Row>

      {/* Gallery Section */}
      <Row className="mb-5 g-4">
        {[
          {
            id: 2,
            src: "/class1.png",
            alt: "Modern classrooms",
            caption: "Our modern, well-equipped classrooms provide the perfect learning environment",
            title: "Learning Spaces"
          },
          {
            id: 3,
            src: "/play.png",
            alt: "School playground",
            caption: "The playground where students develop social skills and physical health",
            title: "Play Area"
          },
          {
            id: 4,
            src: "/library.png",
            alt: "School library",
            caption: "Our resource-rich library fosters a love for reading and research",
            title: "Knowledge Hub"
          }
        ].map((item) => (
          <Col md={4} key={item.id}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px' }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fluid
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  border: '8px solid #f5f5f5',
                  transition: 'all 0.3s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(93, 64, 55, 0.85)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                opacity: hoveredCard === item.id ? 1 : 0,
                transition: 'opacity 0.3s ease',
                textAlign: 'center'
              }}>
                <h4 style={{ marginBottom: '15px' }}>{item.title}</h4>
                <p>{item.caption}</p>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Mission/Vision/Values Cards */}
      <Row className="text-center mb-5 g-4">
        {[
          {
            title: "Our Mission",
            content: "To provide holistic, values-based education that empowers every learner to excel and thrive in a dynamic world.",
            icon: <FaBullseye className="icon" />,
            color: "#8d6e63"
          },
          {
            title: "Our Vision",
            content: "To be leading center of excellence producing responsible, innovative learners with a strong foundation.",
            icon: <FaEye className="icon" />,
            color: "#5d4037"
          },
          {
            title: "Our Values",
            content: "Integrity. Teamwork. Discipline. Curiosity. Responsibility. Creativity. Respect.",
            icon: <FaHeart className="icon" />,
            color: "#6d4c41"
          }
        ].map((item, index) => (
          <Col md={4} key={index}>
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-100 shadow-sm" style={{ 
                border: 'none',
                borderRadius: '15px',
                backgroundColor: '#f5f5f5'
              }}>
                <Card.Body className="p-4">
                  <div style={{ 
                    fontSize: '2rem',
                    marginBottom: '15px',
                    color: item.color
                  }}>
                    {item.icon}
                  </div>
                  <Card.Title style={{ 
                    color: '#5d4037',
                    fontWeight: '600',
                    marginBottom: '15px'
                  }}>
                    {item.title}
                  </Card.Title>
                  <Card.Text style={{ 
                    color: '#795548',
                    fontWeight: '300'
                  }}>
                    {item.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-4 mb-4"
        style={{ 
          backgroundColor: '#f5f5f5',
          borderRadius: '15px',
          borderTop: '3px solid #8d6e63'
        }}
      >
        <h3 className="text-center mb-4" style={{ color: '#5d4037' }}>By The Numbers</h3>
        <Row className="g-4">
          {stats.map((stat) => (
            <Col md={4} key={stat.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-3"
              >
                <div style={{ 
                  fontSize: '2.5rem',
                  color: '#8d6e63',
                  marginBottom: '10px'
                }}>
                  {stat.icon}
                </div>
                <h2 style={{ 
                  color: '#5d4037',
                  fontWeight: '700',
                  marginBottom: '5px'
                }}>
                  {stat.value}+
                </h2>
                <p style={{ 
                  color: '#795548',
                  fontWeight: '400'
                }}>
                  {stat.label}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>

      <Row>
        <Col>
          <motion.p 
            className="text-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              fontStyle: 'italic',
              fontSize: '1.2rem',
              color: '#8d6e63',
              fontWeight: '500',
              padding: '20px',
              borderTop: '2px dashed #d7ccc8',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            
          </motion.p>
        </Col>
      </Row>

      <style jsx global>{`
        body {
          font-family: 'Comfortaa', cursive;
        }
        .icon {
          transition: transform 0.3s ease;
        }
        .icon:hover {
          transform: scale(1.1);
        }
      `}</style>
    </Container>
  )
}

export default About