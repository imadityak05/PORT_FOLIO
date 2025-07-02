import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container">
        <div className="footer__socials">
          <a
            href="https://www.instagram.com/imaadityak._/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://twitter.com/im_adityasaha"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <i className="uil uil-twitter-alt"></i>
          </a>
        </div>

        <p className="footer__copy">
          © 2025 | Made with <span className="footer__heart">❤️</span> by <span className="footer__name">Aditya</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
