import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaBook, FaGraduationCap, FaChartLine, FaTrophy, FaAward, FaMedal } from 'react-icons/fa'

const Academics = () => {
  return (
    <Container className="my-5 py-4" style={{ 
      fontFamily: "'Comfortaa', cursive",
      maxWidth: '1200px'
    }}>
      {/* Google Fonts link */}
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      <h2 className="text-center mb-4" style={{
        color: '#5d4037',
        fontWeight: '700',
        fontSize: '2.5rem',
        borderBottom: '3px solid #8d6e63',
        paddingBottom: '15px',
        display: 'inline-block'
      }}>
        Academic Excellence
      </h2>
      
      <p className="text-center mb-5 mx-auto" style={{
        fontSize: '1.1rem',
        maxWidth: '800px',
        color: '#5d4037',
        fontWeight: '400'
      }}>
        At Snowview Complex Academy, we are committed to providing a strong academic foundation that empowers our learners for success. Our approach combines rigorous curriculum delivery with creativity, critical thinking, and personal growth.
      </p>

      <Row className="g-4 mb-4">
        {[
          {
            title: "Curriculum",
            content: "We follow the Kenyan CBC curriculum, structured to nurture competencies in literacy, numeracy, life skills, digital literacy, and environmental awareness from early years through upper primary.",
            icon: <FaBook size={36} color="#8d6e63" />
          },
          {
            title: "Subjects Offered",
            content: "Our learners study English, Kiswahili, Mathematics, Science, Social Studies, CRE, Agriculture, Computer Studies, and more. We also offer co-curricular enrichment like Art, Music, and French.",
            icon: <FaGraduationCap size={36} color="#8d6e63" />
          },
          {
            title: "Assessment & Support",
            content: "Regular assessments guide our teaching. We support each learner's unique pace with personalized feedback, remedial lessons, mentorship, and parent-teacher collaboration for continuous progress.",
            icon: <FaChartLine size={36} color="#8d6e63" />
          }
        ].map((item, index) => (
          <Col key={index} md={4}>
            <Card className="h-100 shadow-sm border-0" style={{
              borderRadius: '15px',
              transition: 'transform 0.3s',
              backgroundColor: '#f5f5f5'
            }}>
              <Card.Body className="p-4 text-center">
                <div style={{
                  marginBottom: '15px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {item.icon}
                </div>
                <Card.Title style={{
                  color: '#5d4037',
                  fontWeight: '600',
                  fontSize: '1.5rem',
                  marginBottom: '15px'
                }}>
                  {item.title}
                </Card.Title>
                <Card.Text style={{
                  color: '#795548',
                  fontWeight: '300',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}>
                  {item.content}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Awards Section */}
      <div className="mt-5 pt-4">
        <h3 className="text-center mb-4" style={{
          color: '#5d4037',
          fontWeight: '600',
          fontSize: '2rem',
          borderBottom: '2px solid #8d6e63',
          paddingBottom: '10px',
          display: 'inline-block'
        }}>
          Our Achievements
        </h3>
        
        <Row className="g-4 mt-3">
          {[
            {
              title: "Top Performing School",
              description: "Consistently ranked among top schools in the county for academic performance",
              icon: <FaTrophy size={28} color="#d4af37" />
            },
            {
              title: "Academic Excellence Awards",
              description: "Multiple awards in national science and mathematics competitions",
              icon: <FaAward size={28} color="#d4af37" />
            },
            {
              title: "100% Transition",
              description: "Perfect transition rate to secondary education for the past 5 years",
              icon: <FaMedal size={28} color="#d4af37" />
            }
          ].map((award, index) => (
            <Col key={index} md={4}>
              <div className="d-flex align-items-start p-3" style={{
                backgroundColor: '#fff8e1',
                borderRadius: '10px',
                height: '100%'
              }}>
                <div style={{ marginRight: '15px' }}>
                  {award.icon}
                </div>
                <div>
                  <h5 style={{
                    color: '#5d4037',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>{award.title}</h5>
                  <p style={{
                    color: '#795548',
                    fontWeight: '300',
                    marginBottom: '0'
                  }}>{award.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <Row>
        <Col>
          <p className="text-center mt-5" style={{
            fontStyle: 'italic',
            fontSize: '1.2rem',
            color: '#8d6e63',
            fontWeight: '500',
            padding: '20px',
            borderTop: '2px dashed #d7ccc8',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            
          </p>
        </Col>
      </Row>

      <style jsx global>{`
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        body {
          font-family: 'Comfortaa', cursive;
        }
      `}</style>
    </Container>
  )
}

export default Academics