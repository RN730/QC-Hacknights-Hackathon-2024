import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function EducationalResources() {
  return (
    <Container className="my-5 py-5">
      <h2 className="text-center mb-4 text-primary">Educational Resources to Boost Your Skills</h2>
      <Row>
        {/* Coursera Card */}
        <Col md={3} className="mb-4">
          <Card className="shadow-sm border-light rounded">
            <Card.Body>
            <Card.Title className="text-primary">Coursera</Card.Title>
              <Card.Text>
                Explore online courses and certifications from top universities and companies.
              </Card.Text>
              <Button variant="primary" href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer">
                Visit Coursera
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* The Forage Card */}
        <Col md={3} className="mb-4">
          <Card className="shadow-sm border-light rounded">
            <Card.Body>
              <Card.Title className="fw-bold text-success">The Forage</Card.Title>
              <Card.Text>
                Get hands-on experience through virtual internships with real-world companies.
              </Card.Text>
              <Button variant="success" href="https://theforage.com/" target="_blank" rel="noopener noreferrer">
                Visit The Forage
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* IBM SkillsBuild Card */}
        <Col md={3} className="mb-4">
          <Card className="shadow-sm border-light rounded">
            <Card.Body>
              <Card.Title className="fw-bold text-info">IBM SkillsBuild</Card.Title>
              <Card.Text>
                Gain free access to resources for skills in areas like AI, cloud, and data science.
              </Card.Text>
              <Button variant="info" href="https://skillsbuild.org/" target="_blank" rel="noopener noreferrer">
                Visit IBM SkillsBuild
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* AWS Training Card */}
        <Col md={3} className="mb-4">
          <Card className="shadow-sm border-light rounded">
            <Card.Body>
              <Card.Title className="fw-bold text-warning">AWS Training</Card.Title>
              <Card.Text>
                Learn cloud computing and AWS skills with free and paid training resources.
              </Card.Text>
              <Button variant="warning" href="https://aws.amazon.com/training/" target="_blank" rel="noopener noreferrer">
                Visit AWS Training
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EducationalResources;
