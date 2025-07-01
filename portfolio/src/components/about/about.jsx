import React from "react";
import "./about.css";
import aboutImg from "../../assets/about.jpg";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="section__header">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">Introduction</span>
      </div>

      <div className="about__container">
        <div className="about__grid">
          <img
            src={aboutImg}
            alt="Portrait of Aditya"
            className="about__img"
            loading="lazy"
          />

          <div className="about__data">
            <p className="about__description">
              Final-year B.Tech student at NIT Patna with a strong grasp of DSA, CS fundamentals, and MERN stack development. I've built and deployed full-stack projects with real-time features and responsive design. 500+ LeetCode problems solved and actively improving through coding contests and hands-on experience.
            </p>

            <div className="about__info">
              <div className="about__info-item">
                <span className="about__info-title">0-1</span>
                <span className="about__info-name">Years experience</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-title">10+</span>
                <span className="about__info-name">Completed projects</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-title">2+</span>
                <span className="about__info-name">Companies worked</span>
              </div>
            </div>

            <a href="/resume.pdf" download="my_resume.pdf" className="button" aria-label="Download CV">
              Download CV
              <i className="uil uil-download button__icon" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
