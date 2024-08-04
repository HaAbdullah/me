import React from 'react';
import './App.css';

import NavigationBar from './components/NavigationBar';
import StarBackground from './StarBackground';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectsSlider from './components/ProjectsSlider';
import ProjectsList from './components/ProjectsList';
import AboutMe from './components/AboutMe';
import Timeline from './components/Timeline';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

const App = () => {
  console.log("APP RUNNING");

  return (
    <div>
      <NavigationBar />
      <StarBackground />
      <div className="main-content">
        <Hero />
        <Skills />
        <ProjectsSlider />
        <ProjectsList />
        <AboutMe />
        <Timeline />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
};

export default App;
