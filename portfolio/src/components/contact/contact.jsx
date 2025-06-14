import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Let’s get in touch</span>

      <div className="contact__container container grid">
        <div className="contact__image-box">
          {/* Image placeholder */}
          <img src="https://perfectrubbertape.com/wp-content/uploads/2023/11/13184987_5127314-1536x1024.jpg" alt="" />
          <div className="contact__image-placeholder">
            
          </div>
        </div>

        <form className="contact__form">
          <div className="contact__form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="contact__input"
            />
          </div>
          <div className="contact__form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="contact__input"
            />
          </div>
          <div className="contact__form-group">
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="contact__input"
            ></textarea>
          </div>
          <button type="submit" className="button button--flex">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
