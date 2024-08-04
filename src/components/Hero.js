// Hero.js

import React from 'react';
import './Hero.css';

import ProfilePicture from '../resources/ProfilePicture.jpeg'; // Adjust the path accordingly

const Hero = () => {
    const emailLink = 'mailto:abdullah.hasanjee@gmail.com';
  return (
    <section id="hero" className="hero-section">
    <div className="hero-container">
      <img src={ProfilePicture} alt="AAAAAAAAAAAAA" className="hero-image" />
      <p className="title">Hi! I’m Abdullah</p>
      <div className="description">
        <p>I’m a software developer and computer science student from Toronto, Canada. </p>
        <p>I’m captivated by expansive software systems, creating programs and finding</p>
        <p>solutions to solve real-world problems</p>
      </div>
      <div className="button-container">
      <a href={emailLink} className="say-hi-button" target="_blank" rel="noopener noreferrer">
          <svg className = "mail" xmlns="http://www.w3.org/2000/svg" width="34" height="28" viewBox="0 0 34 28" fill="none">
            <path d="M33.8752 3.41684C33.8752 1.54483 32.3853 0.0131836 30.5643 0.0131836H4.07719C2.2562 0.0131836 0.766296 1.54483 0.766296 3.41684V23.8388C0.766296 25.7108 2.2562 27.2424 4.07719 27.2424H30.5643C32.3853 27.2424 33.8752 25.7108 33.8752 23.8388V3.41684ZM30.5643 3.41684L17.3208 11.926L4.07719 3.41684H30.5643ZM30.5643 23.8388H4.07719V6.8205L17.3208 15.3296L30.5643 6.8205V23.8388Z" fill="currentColor"/>
          </svg>
          
          Say Hi!
        </a>
      </div>
    </div>
    </section>
  );
};

export default Hero;
