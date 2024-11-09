const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

// Initialize Express app
const app = express();
app.use(cors()); // Enable CORS to allow cross-origin requests from your frontend

// Set up storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save the file in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file to avoid conflicts
  },
});

// Initialize multer upload instance
const upload = multer({ storage });

// Middleware to serve static files from the 'uploads' folder
app.use('/uploads', express.static('uploads'));

// Route to handle file uploads
app.post('/upload', upload.single('resume'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // Log the uploaded file for debugging
  console.log('File uploaded:', req.file);

  // Here, we would process the file (parse and extract skills from the resume).
  // For now, let's use a mock example of missing skills for Data Science.
  
  // Predefined list of skills required for Data Science
  const requiredSkills = [
    'Python', 'R', 'SQL', 'Machine Learning', 'Deep Learning', 'Data Analysis',
    'Data Visualization', 'TensorFlow', 'Keras', 'Natural Language Processing',
    'Statistics', 'Big Data', 'Data Mining', 'Data Engineering', 'SQL Server',
    'AWS', 'Hadoop', 'Tableau', 'Power BI', 'Predictive Modeling', 'Data Wrangling',
    'Business Intelligence', 'Excel', 'Git', 'Docker', 'Cloud Computing', 'Pandas',
    'Matplotlib', 'Seaborn', 'PyTorch'
  ];

  // Here you would analyze the uploaded resume and match it against the requiredSkills.
  // For simplicity, we’ll just return a mock result indicating missing skills.
  const missingSkills = requiredSkills.filter(skill => {
    // Here you could check the resume (req.file) for these skills
    // For now, we're just simulating that the user has only some skills.
    // Example check: if the resume doesn't contain the skill, it gets added to the missing list.
    return Math.random() < 0.5; // Randomly "missing" skills
  });

  // Return the missing skills as a response
  return res.json({ missingSkills });
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
