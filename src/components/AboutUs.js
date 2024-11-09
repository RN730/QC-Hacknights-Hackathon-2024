import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AboutUs() {
  return (
    <Container className="my-5 py-5">
      <h2 className="text-center text-primary mb-4">About Our Internship Readiness App</h2>
      
      {/* Introduction Section */}
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <p className="text-muted text-center">
            In today’s competitive job market, finding internships can be a daunting task, especially for college students who are just starting out. Many students struggle to understand what skills they need and how their current qualifications match up with the roles they aspire to.
          </p>
          <p className="text-muted text-center">
            Our app is here to bridge this gap, offering students a unique opportunity to see how their skills compare with those required for the latest internship opportunities. By analyzing your resume and matching it against current industry demands, we provide you with personalized insights to help you stand out from the crowd.
          </p>
        </Col>
      </Row>

       {/* Our Mission Section */}
       <Row className="justify-content-center mt-5">
        <Col md={8}>
          <h3 className="text-center text-primary">Our Mission</h3>
          <p className="text-center text-muted">
            We aim to empower students by providing them with valuable insights into their readiness for internships. By using our app, you’ll have a clearer understanding of the skills you need to develop, giving you a competitive edge in the job market.
          </p>
        </Col>
      </Row>

      {/* How It Works Section */}
      <h3 className="text-center text-secondary mb-3">How It Works</h3>
      <Row className="justify-content-center">
        
        {/* Step 1: Choose Your Desired Field */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-light">
            <Card.Body>
              <Card.Title className="text-success">1. Choose Your Desired Field</Card.Title>
              <Card.Text>
                Select the field you’re interested in. We’ll match your resume with keywords and skills relevant to this field. We recommend you focus on one. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        {/* Step 2: Upload Your Resume */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-light">
            <Card.Body>
              <Card.Title className="text-info">2. Upload Your Resume</Card.Title>
              <Card.Text>
                Upload your resume so we can analyze your current skills, experiences, and qualifications with our database. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        {/* Step 3: Get Personalized Feedback */}
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-light">
            <Card.Body>
              <Card.Title className="text-warning">3. Get Personalized Feedback</Card.Title>
              <Card.Text>
                Receive a detailed comparison of your skills with those needed in the industry. We’ll tell you what key areas to improve on.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  );
}

export default AboutUs;
