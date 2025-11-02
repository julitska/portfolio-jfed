import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href="https://github.com/julitska"
          target="_blank"
          rel="noopener noreferrer">
          GitHub
        </a>
        <a href="mailto:jpr.int@hotmail.com">Email</a>
        <a
          href="https://www.linkedin.com/in/julia-p-04517b17b/"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Julia Petrova. Portfolio built with
        React.
      </p>
    </footer>
  );
};

export default Footer;
