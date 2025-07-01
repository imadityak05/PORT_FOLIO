import React from "react";
import "./contact.css";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter,
  FaPaperPlane
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="section__header">
        <h2 className="section__title">Get In Touch</h2>
        <span className="section__subtitle">Let's work together</span>
      </div>

      <div className="contact__container container">
        <div className="contact__info">
          <div className="contact__card" data-aos="fade-up">
            <div className="contact__card-icon">
              <FaEnvelope className="contact__icon" />
            </div>
            <h3 className="contact__card-title">Email</h3>
            <span className="contact__card-data">imadityak0505@gmail.com</span>
            <a href="mailto:imadityak0505@gmail.com" className="contact__button">
              <span>Write me</span>
              <FaPaperPlane className="button__icon" />
            </a>
          </div>

          <div className="contact__card" data-aos="fade-up" data-aos-delay="200">
            <div className="contact__card-icon">
              <FaPhoneAlt className="contact__icon" />
            </div>
            <h3 className="contact__card-title">Phone</h3>
            <span className="contact__card-data">+91 7258916818</span>
            <a href="tel:+917258916818" className="contact__button">
              <span>Call me</span>
              <FaPhoneAlt className="button__icon" />
            </a>
          </div>


        </div>
      </div>

      <div className="contact__social" data-aos="fade-up" data-aos-delay="300">
        <a 
          href="https://www.linkedin.com/in/aditya-kumar-b10822256" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact__social-link"
          aria-label="LinkedIn"
          data-tooltip="Connect on LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/imadityak05" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact__social-link"
          aria-label="GitHub"
          data-tooltip="View my GitHub"
        >
          <FaGithub />
        </a>
        <a 
          href="https://x.com/im_adityasaha" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact__social-link"
          aria-label="X"
          data-tooltip="Follow me on X"
        >
          <FaTwitter />
        </a>
      </div>
    </section>
  );
};

export default Contact;
