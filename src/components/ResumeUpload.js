import React, { useState } from 'react';
import axios from 'axios';

function ResumeUpload() {
  const [selectedField, setSelectedField] = useState('');
  const [file, setFile] = useState(null);
  const [missingSkills, setMissingSkills] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle field selection
  const handleFieldChange = (e) => {
    setSelectedField(e.target.value);
  };

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !selectedField) {
      alert("Please select a field and upload a resume.");
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);
    formData.append('field', selectedField); // Optionally pass the field as well if needed

    setUploadStatus('Uploading...');

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Get missing skills from response
      setMissingSkills(response.data.missingSkills);
      setUploadStatus('Upload successful!');
    } catch (error) {
      console.error('Error uploading the file:', error);
      setUploadStatus('Failed to upload the file.');
    }
  };

  return (
    <div className="resume-upload">
      <h2>Upload Your Resume</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="field">Select Desired Field:</label>
          <select id="field" value={selectedField} onChange={handleFieldChange} required>
            <option value="">Select Field</option>
            <option value="Data Science">Data Science</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Marketing">Marketing</option>
            {/* Add more fields as necessary */}
          </select>
        </div>

        <div>
          <label htmlFor="resume">Upload Resume:</label>
          <input type="file" id="resume" onChange={handleFileChange} required />
        </div>

        <button type="submit">Upload Resume</button>
      </form>

      {uploadStatus && <p>{uploadStatus}</p>}

      {missingSkills.length > 0 && (
        <div>
          <h3>Missing Skills:</h3>
          <ul>
            {missingSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;
