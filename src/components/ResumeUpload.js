import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function ResumeUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      console.log("Resume uploaded:", file.name);
    } else {
      alert("Please upload a resume file!");
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Upload Your Resume</h2>
      <p className="text-center">See how your skills stack up for current internship opportunities!</p>
      <Form onSubmit={handleSubmit} className="text-center">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
        <Button type="submit" variant="success">Analyze Skills</Button>
      </Form>
    </Container>
  );
}

export default ResumeUpload;