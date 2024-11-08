import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function JobFieldSelection() {
  const [selectedField, setSelectedField] = useState('');

  const handleFieldChange = (e) => {
    setSelectedField(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedField) {
      alert(`You selected: ${selectedField}. We'll personalize your results accordingly!`);
    } else {
      alert('Please select a job field before proceeding.');
    }
  };

  return (
    <Container className="my-5 py-5">
      <h2 className="text-center text-primary mb-4">Choose Your Job Field</h2>
      <p className="text-center text-muted mb-4">
        We need your chosen field to better personalize your results and match your skills with relevant opportunities.
      </p>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="jobFieldSelect" className="mb-3">
              <Form.Label>Choose a field of interest:</Form.Label>
              <Form.Select value={selectedField} onChange={handleFieldChange}>
                <option value="">Select a field...</option>
                <option value="Data Science">Data Science</option>
                <option value="Web Development">Web Development</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Engineering">Engineering</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default JobFieldSelection;
