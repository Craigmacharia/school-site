import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import 'animate.css';

// Background patterns for blog cards
const blogBackgrounds = [
  {
    id: 1,
    pattern: "linear-gradient(135deg, rgba(111, 78, 55, 0.1) 0%, rgba(111, 78, 55, 0.05) 100%), url('/dorms2.png')",
    overlay: "rgba(111, 78, 55, 0.7)"
  },
  {
    id: 2,
    pattern: "linear-gradient(135deg, rgba(111, 78, 55, 0.1) 0%, rgba(111, 78, 55, 0.05) 100%), url('/games.png')",
    overlay: "rgba(111, 78, 55, 0.7)"
  },
  {
    id: 3,
    pattern: "linear-gradient(135deg, rgba(111, 78, 55, 0.1) 0%, rgba(111, 78, 55, 0.05) 100%), url('/play.png')",
    overlay: "rgba(111, 78, 55, 0.7)"
  }
];

const images = [
  { src: '/out.png', caption: 'Our School Entrance', category: 'Campus', 
    description: 'The welcoming entrance to our beautiful school campus' },
  { src: '/play.png', caption: 'Junior School Playground', category: 'Facilities',
    description: 'Our safe and colorful playground for junior students' },
  { src: '/present.png', caption: 'Science Lab in Action', category: 'Academics',
    description: 'Students conducting experiments in our modern science lab' },
  { src: '/class1.png', caption: 'Smart Classroom Setup', category: 'Facilities',
    description: 'Technology-enhanced learning environment for 21st century education' },
  { src: '/comps.png', caption: 'Computer Lab', category: 'Facilities',
    description: 'State-of-the-art computer lab with modern equipment' },
  { src: '/library.png', caption: 'Student Library', category: 'Facilities',
    description: 'Well-stocked library to encourage reading and research' },
  { src: '/cultural.png', caption: 'Cultural Day Showcase', category: 'Events',
    description: 'Celebrating diversity through our annual cultural day' },
  { src: '/dorms2.png', caption: 'Our Sleeping Quaters', category: 'Dorms',
    description: 'The serene sleeping cubicles that makes resting easy' }
];

const blogs = [
  {
    id: 1,
    title: "The Importance of STEM Education in Early Years",
    excerpt: "Discover how our school is pioneering STEM education for young learners and why it's crucial for future success.",
    date: "May 15, 2023",
    author: "Dr. Jane Muthoni",
    category: "Academics",
    readTime: "4 min read",
    fullContent: `
      <h3>Why STEM Matters in Early Education</h3>
      <p>At our school, we believe that introducing STEM (Science, Technology, Engineering, and Mathematics) concepts in early childhood sets the foundation for lifelong learning and problem-solving skills. Our innovative program engages young minds through hands-on experiments and playful discovery.</p>
      
      <h3>Our Approach</h3>
      <p>We've developed a unique curriculum that blends:</p>
      <ul>
        <li>Interactive science experiments using everyday materials</li>
        <li>Basic coding concepts through storytelling and games</li>
        <li>Engineering challenges with building blocks and simple machines</li>
        <li>Math concepts integrated into art and music activities</li>
      </ul>
      
      <h3>Success Stories</h3>
      <p>Our students have demonstrated remarkable progress in critical thinking and creativity. Last year, our kindergarten class designed a rainwater collection system for our school garden, combining all four STEM disciplines naturally.</p>
      
      <div class="text-center my-4">
        <img src="/present.png" alt="Students working on STEM project" class="img-fluid rounded" style="max-height: 300px;" />
        <p class="text-muted mt-2">Our students engaged in a bridge-building challenge</p>
      </div>
      
      <h3>Parent Testimonials</h3>
      <blockquote class="blockquote">
        <p>"My daughter now sees science everywhere - she points out patterns in nature and asks how things work. This program has awakened her curiosity in ways I never expected."</p>
        <footer class="blockquote-footer">Mrs. Wanjiku, Grade 1 Parent</footer>
      </blockquote>
    `
  },
  {
    id: 2,
    title: "Creating a Culture of Reading: Our Library Transformation",
    excerpt: "See how we transformed our school library into a vibrant learning hub that students can't get enough of.",
    date: "April 2, 2023",
    author: "Mr. Peter Kamau",
    category: "Facilities",
    readTime: "3 min read",
    fullContent: `
      <h3>From Quiet Space to Learning Hub</h3>
      <p>Our library renovation project was about more than just new bookshelves - we reimagined the entire space as the heart of our school's learning community. The results have been transformative.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Comfortable reading nooks with natural lighting</li>
        <li>Interactive digital storytelling stations</li>
        <li>Student-curated book recommendation displays</li>
        <li>Multilingual section celebrating our diverse community</li>
        <li>Author visit corner with video recordings</li>
      </ul>
      
      <div class="text-center my-4">
        <img src="/lib.png" alt="Library before and after" class="img-fluid rounded" style="max-height: 300px;" />
        <p class="text-muted mt-2">The dramatic transformation of our reading space</p>
      </div>
      
      <h3>Impact on Reading Culture</h3>
      <p>Since the renovation:</p>
      <ul>
        <li>Book circulation has increased by 140%</li>
        <li>Student visits during free time have tripled</li>
        <li>We've launched 12 student-led book clubs</li>
      </ul>
      
      <blockquote class="blockquote">
        <p>"I used to think reading was boring, but now the library is my favorite place. There's always something new to discover!"</p>
        <footer class="blockquote-footer">David, Grade 4 Student</footer>
      </blockquote>
    `
  },
  {
    id: 3,
    title: "Outdoor Learning: Benefits Beyond Fresh Air",
    excerpt: "Exploring how our outdoor classrooms and nature-based activities enhance student engagement and wellbeing.",
    date: "March 10, 2023",
    author: "Ms. Sarah Wambui",
    category: "Curriculum",
    readTime: "5 min read",
    fullContent: `
      <h3>Reconnecting with Nature</h3>
      <p>In our increasingly digital world, we've made a conscious effort to bring learning outdoors. Our outdoor classrooms and nature-based curriculum have shown remarkable benefits for both academic performance and student wellbeing.</p>
      
      <h3>Our Outdoor Learning Spaces</h3>
      <ul>
        <li>Forest classroom with log seating and whiteboard trees</li>
        <li>Mathematics garden with measurement stations</li>
        <li>Weather observation station</li>
        <li>Outdoor art studio</li>
        <li>Edible school garden</li>
      </ul>
      
      <div class="text-center my-4">
        <img src="/outdrs.png" alt="Students learning outdoors" class="img-fluid rounded" style="max-height: 300px;" />
        <p class="text-muted mt-2">A science lesson in our forest classroom</p>
      </div>
      
      <h3>Measurable Benefits</h3>
      <p>After implementing our outdoor learning program:</p>
      <ul>
        <li>Students show 25% better focus after outdoor sessions</li>
        <li>Science test scores improved by 18%</li>
        <li>Behavioral incidents decreased by 30%</li>
        <li>Student stress levels measurably reduced</li>
      </ul>
      
      <blockquote class="blockquote">
        <p>"Teaching outdoors has revitalized my approach to education. The students are more engaged, ask better questions, and retain information longer."</p>
        <footer class="blockquote-footer">Mr. Omondi, Grade 3 Teacher</footer>
      </blockquote>
    `
  }
];

const videos = [
  {
    id: 1,
    title: "Virtual School Tour",
    description: "Take a guided tour of our facilities and learning spaces",
    embedUrl: "https://www.youtube.com/embed/example1",
    thumbnail: "/tour-thumbnail.jpg"
  },
  {
    id: 2,
    title: "Annual Cultural Day Highlights",
    description: "Relive the vibrant performances from our multicultural celebration",
    embedUrl: "https://www.youtube.com/embed/example2",
    thumbnail: "/cultural-thumbnail.jpg"
  },
  {
    id: 3,
    title: "Science Fair 2023",
    description: "Showcasing our students' innovative science projects",
    embedUrl: "https://www.youtube.com/embed/example3",
    thumbnail: "/science-thumbnail.jpg"
  }
];

const BlogDetail = ({ blog, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="blog-detail-container"
    >
      <Button 
  variant="outline-primary" 
  onClick={onBack}
  style={{ 
    borderColor: '#6f4e37', 
    color: '#6f4e37',
    backgroundColor: 'transparent',
    marginBottom: '2rem',
    fontFamily: "'Comfortaa', cursive",
    ':hover': {
      backgroundColor: '#6f4e37',
      color: 'white'
    }
  }}
>
  ← Back to Blogs
</Button>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="blog-header"
        style={{
          background: blogBackgrounds.find(bg => bg.id === blog.id)?.pattern || '#6f4e37',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '12px',
          padding: '3rem 2rem',
          position: 'relative',
          marginBottom: '2rem',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: blogBackgrounds.find(bg => bg.id === blog.id)?.overlay || 'rgba(111, 78, 55, 0.7)',
            zIndex: 1
          }}
        />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <span className="badge mb-3" style={{ backgroundColor: 'white', color: '#6f4e37' }}>
            {blog.category}
          </span>
          <h1 style={{ color: 'white' }}>{blog.title}</h1>
          <div className="d-flex align-items-center mt-3" style={{ color: 'rgba(255,255,255,0.9)' }}>
            <span className="me-3"><i className="bi bi-person-fill me-1"></i> {blog.author}</span>
            <span className="me-3"><i className="bi bi-calendar me-1"></i> {blog.date}</span>
            <span><i className="bi bi-clock me-1"></i> {blog.readTime}</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="blog-content"
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 4px 12px rgba(111, 78, 55, 0.1)'
        }}
        dangerouslySetInnerHTML={{ __html: blog.fullContent }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center mt-5"
      >
        <Button 
  variant="outline-primary" 
  onClick={onBack}
  style={{ 
    borderColor: '#6f4e37', 
    color: '#6f4e37',
    backgroundColor: 'transparent',
    marginBottom: '2rem',
    fontFamily: "'Comfortaa', cursive",
    ':hover': {
      backgroundColor: '#6f4e37',
      color: 'white'
    }
  }}
>
  ← Back to Blogs
</Button>
      </motion.div>
    </motion.div>
  );
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState('gallery');
  const [selectedBlog, setSelectedBlog] = React.useState(null);
  const navigate = useNavigate();

  const categories = ['All', ...new Set(images.map(img => img.category))];
  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const handleScheduleVisit = () => {
    const message = encodeURIComponent("Hello, I'd like to schedule a school visit. Please provide available dates.");
    window.open(`https://wa.me/254755453975?text=${message}`, '_blank');
  };

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBackToBlogs = () => {
    setSelectedBlog(null);
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
          
          {/* Navigation Tabs - Only show when not viewing a single blog */}
          {!selectedBlog && (
            <div className="d-flex justify-content-center mb-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('gallery')}
                style={{
                  backgroundColor: activeTab === 'gallery' ? '#6f4e37' : 'white',
                  color: activeTab === 'gallery' ? 'white' : '#6f4e37',
                  border: '1px solid #6f4e37',
                  padding: '8px 24px',
                  borderRadius: '20px 0 0 20px',
                  fontFamily: "'Comfortaa', cursive",
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                Gallery
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('blogs')}
                style={{
                  backgroundColor: activeTab === 'blogs' ? '#6f4e37' : 'white',
                  color: activeTab === 'blogs' ? 'white' : '#6f4e37',
                  border: '1px solid #6f4e37',
                  padding: '8px 24px',
                  borderRadius: '0',
                  fontFamily: "'Comfortaa', cursive",
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                Blogs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('videos')}
                style={{
                  backgroundColor: activeTab === 'videos' ? '#6f4e37' : 'white',
                  color: activeTab === 'videos' ? 'white' : '#6f4e37',
                  border: '1px solid #6f4e37',
                  padding: '8px 24px',
                  borderRadius: '0 20px 20px 0',
                  fontFamily: "'Comfortaa', cursive",
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                Videos
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Show blog detail if selected */}
        {selectedBlog ? (
          <BlogDetail blog={selectedBlog} onBack={handleBackToBlogs} />
        ) : (
          <>
            {activeTab === 'gallery' && (
              <>
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
              </>
            )}

            {activeTab === 'blogs' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-center mb-5" style={{ color: '#6f4e37' }}>Latest Blog Posts</h2>
                <Row className="g-4">
                  {blogs.map((blog) => {
                    const bg = blogBackgrounds.find(b => b.id === blog.id);
                    return (
                      <Col key={blog.id} md={4}>
                        <motion.div
                          whileHover={{ y: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Card 
                            className="h-100" 
                            style={{ 
                              borderColor: '#6f4e37',
                              overflow: 'hidden'
                            }}
                            onClick={() => handleBlogClick(blog)}
                          >
                            <div 
                              style={{
                                height: '200px',
                                background: bg?.pattern || '#6f4e37',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative'
                              }}
                            >
                              <div 
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  background: bg?.overlay || 'rgba(111, 78, 55, 0.7)'
                                }}
                              />
                              <div className="position-relative h-100 d-flex flex-column justify-content-end p-3">
                                <span className="badge mb-2" style={{ backgroundColor: 'white', color: '#6f4e37' }}>
                                  {blog.category}
                                </span>
                                <h5 style={{ color: 'white' }}>{blog.title}</h5>
                              </div>
                            </div>
                            <Card.Body>
                              <Card.Text>{blog.excerpt}</Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg-transparent">
                              <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">{blog.date}</small>
                                <small className="text-muted">{blog.readTime}</small>
                              </div>
                            </Card.Footer>
                          </Card>
                        </motion.div>
                      </Col>
                    );
                  })}
                </Row>
                <div className="text-center mt-4">
                  <Button 
                    variant="outline-primary" 
                    style={{ 
                      borderColor: '#6f4e37', 
                      color: 'white',
                      backgroundColor: '#6f4e37',
                      fontFamily: "'Comfortaa', cursive"
                    }}
                  >
                    View All Blog Posts
                  </Button>
                </div>
              </motion.div>
            )}

            {activeTab === 'videos' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-center mb-5" style={{ color: '#6f4e37' }}>Featured Videos</h2>
                <Row className="g-4">
                  {videos.map((video) => (
                    <Col key={video.id} md={4}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card className="h-100" style={{ borderColor: '#6f4e37' }}>
                          <div className="ratio ratio-16x9">
                            <iframe 
                              src={video.embedUrl} 
                              title={video.title}
                              allowFullScreen
                            ></iframe>
                          </div>
                          <Card.Body>
                            <Card.Title style={{ color: '#6f4e37' }}>{video.title}</Card.Title>
                            <Card.Text>{video.description}</Card.Text>
                          </Card.Body>
                        </Card>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
                <div className="text-center mt-4">
                  <Button 
                    variant="outline-primary" 
                    style={{ 
                      borderColor: '#6f4e37', 
                      color: 'white',
                      backgroundColor: '#6f4e37',
                      fontFamily: "'Comfortaa', cursive"
                    }}
                    onClick={() => window.open('https://www.youtube.com/ourschoolchannel', '_blank')}
                  >
                    Visit Our YouTube Channel
                  </Button>
                </div>
              </motion.div>
            )}
          </>
        )}

        {/* Call to Action - Only show when not viewing a single blog */}
        {!selectedBlog && (
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
              Schedule a Visit
            </motion.button>
          </motion.div>
        )}
      </Container>
    </div>
  );
};

export default Gallery;