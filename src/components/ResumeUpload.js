import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Card, Alert } from 'react-bootstrap';

function ResumeUpload() {
  const [selectedField, setSelectedField] = useState('');
  const [file, setFile] = useState(null);
  const [missingSkills, setMissingSkills] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');
  const [error, setError] = useState('');

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle field selection
  const handleFieldChange = (e) => {
    setSelectedField(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !selectedField) {
      setError("Please select a field and upload a resume.");
      return;
    }

    setError('');
    const formData = new FormData();
    formData.append('resume', file);
    formData.append('field', selectedField);

    setUploadStatus('Uploading...');

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMissingSkills(response.data.missingSkills);
      setUploadStatus('Upload successful!');
    } catch (error) {
      console.error('Error uploading the file:', error);
      setUploadStatus('Failed to upload the file.');
    }
  };

  return (
    <div className="resume-upload container py-5">
      <h2 className="text-center mb-4">Upload Your Resume</h2>

      <Card className="shadow-lg border-light">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {/* Field Selection */}
            <Form.Group className="mb-3">
              <Form.Label>Select Desired Field</Form.Label>
              <Form.Control
                as="select"
                value={selectedField}
                onChange={handleFieldChange}
                required
              >
                <option value="">Select Field</option>
                <option value="Data Science">Data Science</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Marketing">Marketing</option>
                {/* Add more fields as necessary */}
              </Form.Control>
            </Form.Group>

            {/* Resume Upload */}
            <Form.Group className="mb-3">
              <Form.Label>Upload Resume (PDF or DOCX)</Form.Label>
              <Form.Control
                type="file"
                onChange={handleFileChange}
                accept=".pdf, .docx"
                required
              />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="success" type="submit" block>
              Upload Resume
            </Button>
          </Form>

          {uploadStatus && (
            <div className="mt-3">
              <Alert variant={uploadStatus.includes('failed') ? 'danger' : 'success'}>
                {uploadStatus}
              </Alert>
            </div>
          )}

          {/* Error message */}
          {error && <Alert variant="danger">{error}</Alert>}
        </Card.Body>
      </Card>

      {/* Display missing skills */}
      {missingSkills.length > 0 && (
        <div className="mt-4">
          <h3 className="text-center">Missing Skills</h3>
          <ul className="list-group">
            {missingSkills.map((skill, index) => (
              <li key={index} className="list-group-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;
