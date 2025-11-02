import React from "react";
import "./home.css";
import ProfileImg from "../../assets/propic.jpg";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container">
        <div className="home__grid">
          <div className="home__content">
            <h1 className="home__title">
              Hi, I'm <span className="home__name">Aditya Kumar</span>
            </h1>
            <h3 className="home__subtitle">Software Developer Engineer</h3>
            <p className="home__description">
              Final-year B.Tech student in Electronics and Communication Engineering at Prestigious Institute National Institute of Technology Patna with a solid foundation in Data Structures and Algorithms, and Web development using the MERN stack. Experienced in building scalable applications such as a Car Rental Application and a AI Blog Application  with secure authentication, responsive design, and real-time features. Solved over 700 problems on LeetCode with a contest rating of 1600+ among 20 contests, and achieved top ranks in national-level exams and NPTEL courses ,also Participated in hackathons. Completed virtual internships  at BlueStock gaining exposure to MERN stack Web Development.
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
                src={ProfileImg}
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
