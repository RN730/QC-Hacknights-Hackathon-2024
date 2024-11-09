import React, { useState } from 'react';
import axios from 'axios';

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [missingSkills, setMissingSkills] = useState([]);

  // Handle file change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle file upload
  const handleFileUpload = async () => {
    if (!file) {
      alert('Please upload a file first');
      return;
    }

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle response with missing skills
      setMissingSkills(response.data.missingSkills);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  // Updated ResumeUpload with Bootstrap styling
return (
  <div className="container my-5">
    <h2 className="text-center mb-4">Upload Your Resume</h2>
    <div className="text-center">
      <input 
        type="file" 
        className="form-control mb-3" 
        onChange={handleFileChange} 
      />
      <button 
        className="btn btn-primary" 
        onClick={handleFileUpload}
      >
        Upload
      </button>
    </div>

    <h3 className="text-center mt-4">Missing Skills</h3>
    <ul className="list-group">
      {missingSkills.length > 0 ? (
        missingSkills.map((skill, index) => (
          <li key={index} className="list-group-item">{skill}</li>
        ))
      ) : (
        <p className="text-center">No skills missing. You’re all set!</p>
      )}
    </ul>
  </div>
);

}

export default ResumeUpload;
