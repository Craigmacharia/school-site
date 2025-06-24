import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'

const EnvironmentWeek = () => {
  return (
    <Container className="my-5 py-4" style={{ 
      backgroundColor: '#f9f5f0',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(93, 64, 55, 0.1)'
    }}>
      <h2 className="text-center mb-4 py-3" style={{ 
        color: '#5d4037',
        borderBottom: '2px solid #8d6e63',
        fontFamily: "'Comfortaa', cursive",
        fontWeight: 'bold',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        Environment Week
      </h2>

      <Row className="mb-4 align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <Image
            src="/environ.png"
            alt="Science Fair"
            fluid
            rounded
            className="shadow-lg"
            style={{
              border: '5px solid #efebe9',
              filter: 'sepia(10%) brightness(0.97)',
              transition: 'transform 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </Col>
        <Col md={6}>
          <div style={{
            backgroundColor: '#efebe9',
            padding: '25px',
            borderRadius: '5px',
            borderLeft: '4px solid #6d4c41',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.05)'
          }}>
            <p style={{ 
              color: '#5d4037', 
              lineHeight: '1.8', 
              marginBottom: '20px',
              fontFamily: "'Comfortaa', cursive"
            }}>
              Our Annual Environment Week is a celebration of awareness, sustainability, and active participation. Students from all grades engage in projects, activities, and campaigns, showcasing a wide range of ideas — from conservation efforts to recycling initiatives and eco-friendly innovations.
            </p>
            <p style={{ 
              color: '#5d4037', 
              lineHeight: '1.8', 
              marginBottom: '20px',
              fontFamily: "'Comfortaa', cursive"
            }}>
              The event promotes environmental awareness and a spirit of responsibility. Teachers and guest judges explore each project, asking insightful questions and recognizing outstanding initiatives. It’s an occasion that truly makes learning engaging, collaborative, and inspiring for everyone involved.
            </p>
            <p style={{ 
              color: '#5d4037', 
              lineHeight: '1.8',
              fontFamily: "'Comfortaa', cursive"
            }}>
              Families are invited to participate, providing them with a window into the environmental passion and commitment of our students. Environment Week is more than a series of activities — it’s a foundation for future conservationists, scientists, and advocates for our planet.
            </p>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <Button 
              href="/events" 
              variant="outline-dark"
              style={{
                borderColor: '#8d6e63',
                color: '#5d4037',
                fontWeight: '500',
                fontFamily: "'Comfortaa', cursive"
              }}
            >
              ← Back to Events
            </Button>
            
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <div style={{
            backgroundColor: '#5d4037',
            padding: '20px',
            borderRadius: '5px',
            textAlign: 'center',
            boxShadow: '0 4px 8px rgba(93, 64, 55, 0.2)'
          }}>
            <p className="mb-0" style={{ 
              color: '#efebe9',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              fontFamily: "'Comfortaa', cursive"
            }}>
              "Where curiosity meets innovation — powered by young minds."
            </p>
          </div>
        </Col>
      </Row>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;700&display=swap');
        
        body {
          background-color: #f5f0e8;
          font-family: 'Comfortaa', cursive;
        }
        .btn-outline-dark:hover {
          background-color: #5d4037;
          color: white !important;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Comfortaa', cursive;
        }
      `}</style>
    </Container>
  )
}

export default EnvironmentWeek