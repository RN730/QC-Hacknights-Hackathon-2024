import React from 'react';
import HeroSection from './components/HeroSection';
import ResumeUpload from './components/ResumeUpload';
import SkillsComparisonInfo from './components/SkillsComparisonInfo';
import Footer from './components/Footer';
import EducationalResources from './components/EducationalResources';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ResumeUpload />
      <SkillsComparisonInfo />
      <EducationalResources />
      <Footer />
    </div>
  );
}

export default App;
