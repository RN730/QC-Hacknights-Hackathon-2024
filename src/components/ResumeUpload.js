import React, { useState } from 'react';

function ResumeUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      console.log("Resume uploaded:", file.name);
      // Here, you would typically handle the file upload to the server
    } else {
      alert("Please upload a resume file!");
    }
  };

  return (
    <section className="resume-upload">
      <h2>Upload Your Resume</h2>
      <p>See how your skills stack up for current internship opportunities!</p>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
        <button type="submit">Analyze Skills</button>
      </form>
    </section>
  );
}

export default ResumeUpload;


