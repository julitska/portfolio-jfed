import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact-hero">
        <div className="hero-image-wrapper">
          <img
            src="/images/projects-hero.png"
            alt="Projects Banner"
            className="hero-image"
          />
          <div className="grid-container">
            <div className="content-wrap">
              <h4 className="hero-text">
                “A day without learning is a day wasted.”
                <br /> — Albert Einstein
              </h4>
            </div>
          </div>
        </div>

        <div>
          <h2>Curious &amp; Capable</h2>
          <p>
            I'm currently exploring long-term roles within front-end development
            opportunities but would consider freelance collaborations or other
            suitable roles based on my skills.
            <br />
            Thank you for taking the time to look through my work. <br />I would
            love to hear from you, please get in touch!
          </p>
        </div>
      </section>

      <section className="contact-links">
        <div className="contact-icons">
          <a
            href="https://github.com/julitska"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:#"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/julia-p-04517b17b/"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
