import React from "react";
import "./about.css";
import { FaGithub, FaLinkedin, FaHackerrank, FaCode } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiCodingninjas } from "react-icons/si";

const About = () => {
  const codingProfiles = [
    {
      name: "LeetCode",
      icon: <SiLeetcode className="profile-icon" />,
      url: "https://leetcode.com/u/imaditya__/"
    },
    {
      name: "GeeksforGeeks",
      icon: <SiGeeksforgeeks className="profile-icon" />,
      url: "https://www.geeksforgeeks.org/user/imadityw8iv/"
    },
    {
      name: "CodingNinja",
      icon: <SiCodingninjas className="profile-icon" />,
      url: "https://www.naukri.com/code360/profile/noob_s_here"
    },
    {
      name: "CodeChef",
      icon: <SiCodechef className="profile-icon" />,
      url: "https://www.codechef.com/users/yourusername"
    },
    {
      name: "GitHub",
      icon: <FaGithub className="profile-icon" />,
      url: "https://github.com/imadityak05"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="profile-icon" />,
      url: "https://www.linkedin.com/in/aditya-kumar-b10822256"
    },
    {
      name: "takeUforward",
      icon: <FaCode className="profile-icon" />,
      url: "https://takeuforward.org/profile/@Aditya"
    }
  ];

  return (
    <section className="about section" id="about">
      <div className="section__header">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">Introduction</span>
      </div>

      <div className="about__container">
        <div className="about__grid">
          <div className="coding-profiles">
            <h3 className="profiles-title">Coding & Social Profiles</h3>
            <div className="profiles-grid">
              {codingProfiles.map((profile, index) => (
                <a 
                  key={index} 
                  href={profile.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="profile-link"
                  aria-label={`Visit my ${profile.name} profile`}
                >
                  {profile.icon}
                  <span>{profile.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="about__data">
            <p className="about__description">
              Final-year B.Tech student at NIT Patna with a strong grasp of DSA, CS fundamentals, and MERN stack development. I've built and deployed full-stack projects with real-time features and responsive design. 500+ LeetCode problems solved and actively improving through coding contests and hands-on experience.
            </p>

            <div className="about__info">
              <div className="about__info-item">
                <span className="about__info-title">Fresher</span>
                <span className="about__info-name">Years experience</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-title">5+</span>
                <span className="about__info-name">Completed projects</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-title">0</span>
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
