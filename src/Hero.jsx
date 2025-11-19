import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
        alt="Portrait of a woman on a bright background"
        className="profile-photo"
        loading="lazy"
      />
      <h1>Creative Developer</h1>
      <p>
        {" "}
        A creative and detail-driven developer with a passion
        for clean design and user-friendly experiences. Currently building
        responsive layouts using HTML, CSS, and JavaScript, while learning to
        craft modern interfaces with React. Passionate about working with
        creative concepts that improve user experience and reflects brand
        values. Constantly growing through hands-on projects and real-world
        challenges, with a focus on expanding both technical and creative skills
        — and sharpening problem-solving abilities — with each new challenge.
      </p>
      <a
        href="https://github.com/julitska"
        className="cta"
        target="_blank"
        rel="noopener noreferrer">
        All My Work on GitHub
      </a>
    </section>
  );
};

export default Hero;
