import React from 'react'
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap'

const eventData = [
  {
    title: 'Cultural Day',
    image: '/cultural.png',
    description: 'A celebration of diversity and tradition.',
    link: '/events/cultural-day'
  },
  {
    title: 'Science Fair',
    image: '/present.png',
    description: 'Innovation and discovery by our young.',
    link: '/events/science-fair'
  },
  {
    title: 'Sports Day',
    image: '/games.png',
    description: 'A day of athletic fun and school spirit.',
    link: '/events/sports-day'
  },
  {
    title: 'Music & Arts',
    image: '/cultural.png',
    description: 'Talents on display in music and visual arts.',
    link: '/events/music-arts'
  },
  {
    title: 'Environment Week',
    image: '/environ.png',
    description: 'Creating awareness and protecting our future.',
    link: '/events/environment-week'
  },
  {
    title: 'Prize Giving Day',
    image: '/prize.png',
    description: 'Recognizing hard work and excellence.',
    link: '/events/prize-giving'
  },
  {
    title: 'PTA',
    image: '/pta.png',
    description: 'Collaborating for every childs success.',
    link: '/events/parent-teacher-meeting'
  },
  {
    title: 'Nairobi Trip',
    image: '/trip.png',
    description: 'Learning beyond the classroom.',
    link: '/events/nairobi-museum-trip'
  }
]

const Events = () => {
  return (
    <Container className="my-5 py-4" style={{ 
      backgroundColor: '#f9f5f0',
      fontFamily: "'Comfortaa', cursive" 
    }}>
      <h2 className="text-center mb-4 py-3" style={{ 
        color: '#5d4037',
        borderBottom: '2px solid #8d6e63',
        fontFamily: "'Comfortaa', cursive",
        fontWeight: 700
      }}>
        School Events
      </h2>

      {/* Slideshow */}
      <Carousel className="mb-5 shadow-lg rounded">
        {eventData.slice(0, 3).map((event, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={event.image}
              alt={event.title}
              style={{ 
                maxHeight: '500px', 
                objectFit: 'cover',
                filter: 'brightness(0.9)'
              }}
            />
            <Carousel.Caption style={{
              background: 'rgba(93, 64, 55, 0.7)',
              padding: '20px',
              borderRadius: '5px',
              bottom: '40px',
              fontFamily: "'Comfortaa', cursive"
            }}>
              <h3 style={{ color: '#efebe9', fontWeight: '600' }}>{event.title}</h3>
              <p style={{ color: '#d7ccc8', fontWeight: '300' }}>{event.description}</p>
              <Button 
                href={event.link} 
                variant="outline-light"
                size="sm"
                style={{ fontFamily: "'Comfortaa', cursive" }}
              >
                Learn More
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Events Grid */}
      <Row className="g-4">
        {eventData.map((event, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm border-0 overflow-hidden" style={{
              transition: 'transform 0.3s',
              backgroundColor: '#efebe9',
              fontFamily: "'Comfortaa', cursive"
            }}>
              <Card.Img
                src={event.image}
                alt={event.title}
                style={{ 
                  height: '200px', 
                  objectFit: 'cover',
                  filter: 'sepia(20%)'
                }}
              />
              <Card.Body style={{ backgroundColor: '#efebe9' }}>
                <Card.Title style={{ 
                  color: '#5d4037',
                  fontWeight: '600',
                  fontSize: '1.1rem'
                }}>
                  {event.title}
                </Card.Title>
                <Card.Text style={{ 
                  color: '#795548',
                  fontSize: '0.9rem',
                  fontWeight: '300'
                }}>
                  {event.description}
                </Card.Text>
                <Button
                  href={event.link}
                  variant="outline-dark"
                  size="sm"
                  style={{
                    borderColor: '#8d6e63',
                    color: '#5d4037',
                    fontWeight: '500',
                    fontFamily: "'Comfortaa', cursive"
                  }}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Add Google Fonts link */}
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <style jsx global>{`
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-color: rgba(93, 64, 55, 0.5);
          border-radius: 50%;
          padding: 15px;
        }
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

export default Events