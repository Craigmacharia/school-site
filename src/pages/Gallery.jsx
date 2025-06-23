import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Added Button to imports
import { motion } from 'framer-motion';
import 'animate.css';

const images = [
  { src: '/k.jpg', caption: 'Our School Entrance', category: 'Campus', 
    description: 'The welcoming entrance to our beautiful school campus' },
  { src: '/h.jpg', caption: 'Junior School Playground', category: 'Facilities',
    description: 'Our safe and colorful playground for junior students' },
  { src: '/t.jpg', caption: 'Science Lab in Action', category: 'Academics',
    description: 'Students conducting experiments in our modern science lab' },
  { src: '/h.jpg', caption: 'Smart Classroom Setup', category: 'Facilities',
    description: 'Technology-enhanced learning environment for 21st century education' },
  { src: '/k.jpg', caption: 'Computer Lab', category: 'Facilities',
    description: 'State-of-the-art computer lab with modern equipment' },
  { src: '/h.jpg', caption: 'Student Library', category: 'Facilities',
    description: 'Well-stocked library to encourage reading and research' },
  { src: '/t.jpg', caption: 'Cultural Day Showcase', category: 'Events',
    description: 'Celebrating diversity through our annual cultural day' },
  { src: '/h.jpg', caption: 'Our Peaceful Compound', category: 'Campus',
    description: 'The serene environment that makes learning enjoyable' }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const categories = ['All', ...new Set(images.map(img => img.category))];
  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const handleScheduleVisit = () => {
    const message = encodeURIComponent("Hello, I'd like to schedule a school visit. Please provide available dates.");
    window.open(`https://wa.me/254755453975?text=${message}`, '_blank');
  };

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
          <h1 style={{ color: '#6f4e37' }}>School Gallery</h1>
          <p className="lead" style={{ color: '#8b6b4b' }}>
            A visual journey through our vibrant school community
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-5 text-center"
        >
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                style={{
                  backgroundColor: activeCategory === category ? '#6f4e37' : 'white',
                  color: activeCategory === category ? 'white' : '#6f4e37',
                  border: '1px solid #6f4e37',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontFamily: "'Comfortaa', cursive",
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <Row className="g-4">
          {filteredImages.map((img, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onTap={() => setHoveredIndex(hoveredIndex === index ? null : index)}
                className="position-relative"
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  height: '250px',
                  cursor: 'pointer'
                }}
              >
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  className="w-100 h-100"
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <motion.div 
                  className="position-absolute top-0 start-0 end-0 bottom-0 p-3 text-white d-flex flex-column justify-content-end"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    background: hoveredIndex === index ? 'rgba(111, 78, 55, 0.85)' : 'rgba(111, 78, 55, 0)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ y: 20 }}
                    animate={{ y: hoveredIndex === index ? 0 : 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h5 className="mb-2" style={{ fontFamily: "'Comfortaa', cursive" }}>{img.caption}</h5>
                    <small className="d-block mb-2">{img.category}</small>
                    <p className="small mb-3">{img.description}</p>
                    <Button 
                      variant="outline-light" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        const message = encodeURIComponent(`I'm interested in learning more about: ${img.caption}`);
                        window.open(`https://wa.me/254755453975?text=${message}`, '_blank');
                      }}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-5 pt-4"
        >
          <h3 style={{ color: '#6f4e37' }}>Want to see more?</h3>
          <p className="mb-4">Visit our campus to experience our environment firsthand</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScheduleVisit}
            style={{
              backgroundColor: '#6f4e37',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '30px',
              fontFamily: "'Comfortaa', cursive",
              cursor: 'pointer',
              fontSize: '1.1rem'
            }}
          >
            Schedule a Visit via WhatsApp
          </motion.button>
        </motion.div>
      </Container>
    </div>
  );
};

export default Gallery;