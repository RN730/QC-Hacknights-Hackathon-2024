const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
const { Document } = require('docx');
const { Packer } = require('docx');
const cors = require('cors');
app.use(cors()); // Enable all CORS requests


const app = express();
const port = 5000;

// Define storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Set up multer middleware
const upload = multer({ storage: storage });

// Define a list of data science keywords
const dataScienceKeywords = [
  "python", "machine learning", "data analysis", "statistics", "deep learning",
  "data visualization", "tensorflow", "scikit-learn", "pandas", "numpy",
  "sql", "big data", "hadoop", "spark", "data mining", "modeling",
  "classification", "regression", "neural networks", "time series",
  "natural language processing", "reinforcement learning", "decision trees",
  "data preprocessing", "k-means clustering", "ensemble methods",
  "random forests", "predictive modeling", "data wrangling", "data cleaning"
];

// Helper function to parse resume (PDF)
const parsePDF = async (filePath) => {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdfParse(dataBuffer);
  return data.text;
};

// Helper function to parse resume (DOCX)
const parseDOCX = async (filePath) => {
  const data = fs.readFileSync(filePath);
  const doc = await Document.load(data);
  const text = doc.getBody().text();
  return text;
};

// Endpoint to handle resume upload and keyword matching
app.post('/upload', upload.single('resume'), async (req, res) => {
  const filePath = req.file.path;
  let resumeText = '';

  // Check file type and parse accordingly
  const fileExtension = path.extname(req.file.originalname).toLowerCase();
  if (fileExtension === '.pdf') {
    resumeText = await parsePDF(filePath);
  } else if (fileExtension === '.docx') {
    resumeText = await parseDOCX(filePath);
  } else {
    return res.status(400).send('Unsupported file format');
  }

  // Normalize the resume text
  resumeText = resumeText.toLowerCase();

  // Find matching keywords
  const matchedSkills = [];
  const missingSkills = [];

  dataScienceKeywords.forEach((skill) => {
    if (resumeText.includes(skill)) {
      matchedSkills.push(skill);
    } else {
      missingSkills.push(skill);
    }
  });

  // Return the results
  res.json({
    matchedSkills,
    missingSkills
  });
});

// Serve the uploaded files (for testing)
app.use('/uploads', express.static('uploads'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
