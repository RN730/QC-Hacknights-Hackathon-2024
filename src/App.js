import React from 'react';
import HeroSection from './components/HeroSection';
import JobFieldSelection from './components/JobFieldSelection';
import ResumeUpload from './components/ResumeUpload';
import SkillsComparisonInfo from './components/SkillsComparisonInfo';
import Footer from './components/Footer';
import EducationalResources from './components/EducationalResources';
import AboutUs from './components/AboutUs';
import TitleSection from './components/TitleSection';
import './App.css';


function App() {
  return (
    <div className="App">
      <TitleSection /> 
      <HeroSection />
      <AboutUs />
     
      
      <ResumeUpload />
      <EducationalResources />
      <Footer />
    </div>
  );
}

export default App;
