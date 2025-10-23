import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
       <img src="/assets/images/profile.jpg" alt="Julia Petrova" className="profile-photo" />
      <h2>Junior Front-End Developer</h2>
      <p>I build responsive websites with HTML, CSS, and JavaScript.</p>
      <a href="#projects" className="cta">View My Work</a>
    </section>
  );
};

export default Hero;
