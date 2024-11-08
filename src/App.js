import React from 'react';
import HeroSection from './components/HeroSection';
import ResumeUpload from './components/ResumeUpload';
import SkillsComparisonInfo from './components/SkillsComparisonInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ResumeUpload />
      <SkillsComparisonInfo />
      <Footer />
    </div>
  );
}

export default App;
