import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-hero">
      <div className="hero-image-wrapper">
        <img
          src="/images/projects-hero.png"
          alt="Projects Banner"
          className="hero-image"
        />
        <h4 className="hero-text">
          “A day without learning is a day wasted.”<br></br> — Albert Einstein
        </h4>
      </div>
      <div>
        <h2>Curious &amp; Capable</h2>
        <p>
          I'm currently exploring long-term roles within front-end development
          opportunities but would consider freelance collaborations or other
          suitable roles based on my skills.<br></br>
          Thank you for taking the time to look through my work. <br></br>I
          would love to hear from you, please get in touch!
        </p>
      </div>
    </section>
  );
};

export default Contact;
