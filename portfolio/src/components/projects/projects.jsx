import React, { useState } from "react";
import "./projects.css";
import projectImg1 from "../../assets/project1.png";
import projectImg2 from "../../assets/project2.png";
import projectImg3 from "../../assets/project3.jpg";
import projectImg4 from "../../assets/project3.jpg";
import projectImg5 from "../../assets/project3.jpg";

// Updated project data with imported images
const projectData = [
  {
    id: 1,
    title: "Project One",
    desc: "Description for project one.",
    image: projectImg1,
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Project Two",
    desc: "Description for project two.",
    image: projectImg2,
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Project Three",
    desc: "Description for project three.",
    image: projectImg3,
    live: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Project Four",
    desc: "Description for project four.",
    image: projectImg4,
    live: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Project Five",
    desc: "Description for project five.",
    image: projectImg5,
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const length = projectData.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Some things I’ve built</span>

      <div className="carousel__container">
        <button className="button button--flex" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="project__card">
          <img
            src={projectData[current].image}
            alt={projectData[current].title}
            className="project__img"
          />
          <h3 className="project__title">{projectData[current].title}</h3>
          <p className="project__desc">{projectData[current].desc}</p>
          <div className="project__links">
            <a
              href={projectData[current].live}
              className="button button--flex"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            <a
              href={projectData[current].github}
              className="button button--flex"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <button className="button button--flex" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Projects;
