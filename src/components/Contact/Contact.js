import React from "react";
import "./ContactCSS.css";

const Contact = () => {
  return (
    <>
      <div id="Contact" className="footer">
        <div className="footer-content">
          <div className="footer-ribbon">
            <div className="ribbon-top">JACKSON FRANKLIN</div>
            <div className="ribbon-bottom">A FULL-STACK DEVELOPER</div>
          </div>

          <div className="footer-icons">
            <p className="footer-find-text">You can find me here✌</p>
            <div className="icon-links">
              <a
                href="https://www.linkedin.com/in/jackson-franklin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin footer-icon"></i>
              </a>
              <a
                href="https://github.com/SuperDev-cyber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github footer-icon"></i>
              </a>
              <a href="mailto:jackson.franklin@example.com">
                <i className="fa-solid fa-envelope footer-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-border">
          <p className="footer-text">
            2024 ❤️ © Designed and built by Jackson Franklin.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
