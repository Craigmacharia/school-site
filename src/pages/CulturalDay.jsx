import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'

const CulturalDay = () => {
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
        fontWeight: '700',
        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
      }}>
        Cultural Day Celebration
      </h2>

      <Row className="mb-4 align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <Image
            src="/cultural.png"
            alt="Cultural Day"
            fluid
            rounded
            className="shadow-lg"
            style={{
              border: '5px solid #efebe9',
              filter: 'sepia(15%) brightness(0.95)',
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
            borderLeft: '4px solid #8d6e63',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.05)'
          }}>
            <p style={{ 
              color: '#5d4037', 
              lineHeight: '1.8',
              marginBottom: '20px',
              fontFamily: "'Comfortaa', cursive",
              fontWeight: '400'
            }}>
              At Snowview Complex Academy, Cultural Day is one of our most anticipated and vibrant annual events. The entire school comes alive with color, tradition, and excitement as students and staff dress in diverse cultural attire representing Kenya's rich heritage.
            </p>
            <p style={{ 
              color: '#5d4037', 
              lineHeight: '1.8',
              marginBottom: '20px',
              fontFamily: "'Comfortaa', cursive",
              fontWeight: '400'
            }}>
              From traditional music and dance performances to food festivals and storytelling sessions, the day fosters appreciation, inclusivity, and national pride. Each class presents unique skits and songs rooted in different communities, ensuring every tribe and region is celebrated.
            </p>
            <p style={{ 
              color: '#5d4037', 
              lineHeight: '1.8',
              fontFamily: "'Comfortaa', cursive",
              fontWeight: '400'
            }}>
              Beyond the performances, the event promotes unity, encourages students to embrace diversity, and deepens their understanding of Kenya's multicultural society. Parents, guests, and alumni often attend, turning the day into a joyous community affair.
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
              fontFamily: "'Comfortaa', cursive",
              fontWeight: '500'
            }}>
              "Unity in diversity — a core value we proudly live out."
            </p>
          </div>
        </Col>
      </Row>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;700&display=swap');
        
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

export default CulturalDay