import React from "react";
import "./about.css";
import aboutImg from "../../assets/about.jpg";
const About = () => {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <h2 className="section__title" id="about-title">About Me</h2>
      <span className="section__subtitle" id="about-intro">Introduction</span>

      <div className="about__container container grid">
        <img
          src={aboutImg}
          alt="Portrait of Aditya"
          className="about__img"
          loading="lazy"
        />

        <div className="about__data">
          <p className="about__description">
            Final-year B.Tech student at NIT Patna with a strong grasp of DSA, CS fundamentals, and MERN stack development. I’ve built and deployed full-stack projects with real-time features and responsive design. 500+ LeetCode problems solved and actively improving through coding contests and hands-on experience.
          </p>

          <div className="about__info" aria-label="Experience highlights">
            <div>
              <span className="about__info-title">0-1</span>
              <span className="about__info-name">
                Years <br />
                experience
              </span>
            </div>
            <div>
              <span className="about__info-title">5+</span>
              <span className="about__info-name">
                Completed <br />
                projects
              </span>
            </div>
            <div>
              <span className="about__info-title">2+</span>
              <span className="about__info-name">
                Companies <br />
                worked
              </span>
            </div>
          </div>

          <a
  href="/resume.pdf"
  download
  className="button button--flex"
  aria-label="Download CV"
>
  Download CV{" "}
  <i className="uil uil-message button__icon" aria-hidden="true"></i>
</a>

        </div>
      </div>
    </section>
  );
};

export default About;
