import React from "react";
import "./home.css";
import profileImg from "../../assets/propic.png";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container">
        <div className="home__grid">
          <div className="home__content">
            <h1 className="home__title">
              Hi, I'm <span className="home__name">Aditya</span>
            </h1>
            <h3 className="home__subtitle">Software Developer Engineer</h3>
            <p className="home__description">
              Pre-Final-year B.Tech student in Electronics and Communication Engineering at NIT Patna with a solid foundation in Data Structures, Algorithms, and full-stack web development using the MERN stack. Experienced in building scalable applications such as a doctor appointment system and a food delivery platform with secure authentication, responsive design, and real-time features. Solved over 500 problems on LeetCode with a contest rating of 1580+, and achieved top ranks in national-level exams and NPTEL courses. Completed virtual internships at Accenture and Deloitte, gaining exposure to agile development, Java, Spring Boot, and data analysis.
            </p>

            <div className="home__socials">
              <a
                href="https://www.linkedin.com/in/aditya-kumar-b10822256/"
                className="home__social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <i className="uil uil-linkedin-alt"></i>
              </a>
              <a
                href="github.com/imadityak05"
                className="home__social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <i className="uil uil-github-alt"></i>
              </a>
              <a
                href="mailto:imadityak0505@gmail.com"
                className="home__social-link"
                aria-label="Email"
                title="Email"
              >
                <i className="uil uil-envelope-alt"></i>
              </a>
            </div>

            <button className="button" aria-label="Contact Aditya">
              <a href="#contact"> Let's Connect</a>
              <i className="uil uil-message button__icon"></i>
            </button>
          </div>

          <div className="home__img-wrapper">
            <div className="home__img-shape">
              <img
                src={profileImg}
                alt="Profile of Aditya"
                className="home__img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
