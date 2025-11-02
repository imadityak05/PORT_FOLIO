import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import "./projects.css";
import projectImg1 from "../../assets/project1.png";
import projectImg2 from "../../assets/project2.png";
import projectImg3 from "../../assets/project3.png";
import projectImg4 from "../../assets/project4.png"
import projectImg5 from "../../assets/project5.png";

// Custom hook for checking mobile view
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const projectData = [
  
  {
    id: 1,
    title: 'Car Rental website',
    desc: 'A full-stack car rental platform built with the MERN stack, enabling users to browse, book, and manage car rentals with secure authentication and real-time availability.',
    image: projectImg1,
    live: '#',
    github: 'https://github.com/imadityak05/car-rental',
    tags: ['React', 'MongoDB', 'Express.js','Node.js', 'Material-UI' ,'stripe'],
  },
  {
    id: 2,
    title: "Bihar Toursism ",
    desc: "A visually rich, responsive frontend for promoting Bihar’s heritage and attractions, built with React.js and modern UI design principles.",
    image: projectImg2,
    live: "https://bihar-tour2-ly1dn1yd8-aditya-kumars-projects-8c1aac44.vercel.app/",
    github: "https://github.com/imadityak05/bihar-tour",
    tags: ['React' ,'Framer Motion', 'CSS3', 'Responsive Design'],
  },
   
  {
    id: 3,
    title: 'Portfolio Website',
    desc: 'A modern, responsive portfolio website to showcase projects and skills effectively.',
    image: projectImg3,
    live: 'https://car-rental-server-virid.vercel.app/',
    github: 'https://github.com/imadityak05/PORT_FOLIO',
    tags: ['React', 'Framer Motion', 'CSS3', 'Responsive Design'],
  },
  {
    id: 4,
    title: 'Gemini Clone',
    desc: 'A responsive AI chatbot UI inspired by Google Gemini, built with React.js and styled for a sleek, minimal experience.',
    image: projectImg4,
    live: 'https://google-gemini-clone-omega.vercel.app/',
    github: 'https://github.com/imadityak05/gemini',
    tags: ['React', 'API', 'Context API', 'CSS Modules'],
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    desc: 'Real-time weather information with 5-day forecast and location-based weather data.',
    image: projectImg5,
    live: '#',
    github: '#',
    tags: ['JavaScript', 'OpenWeather API', 'CSS Grid', 'Local Storage'],
  },
];

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance projects on mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const timer = setInterval(() => {
      nextProject();
    }, 5000);

    return () => clearInterval(timer);
  }, [isMobile]);

  const renderProject = (project) => (
    <motion.div 
      key={project.id}
      className={`project__card ${hoveredId === project.id ? 'hovered' : ''}`}
      onMouseEnter={() => setHoveredId(project.id)}
      onMouseLeave={() => setHoveredId(null)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project__image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project__img"
        />
        <div className="project__overlay">
          <div className="project__links">
            <a
              href={project.github}
              className="project__link"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub />
            </a>
            <a
              href={project.live}
              className="project__link"
              target="_blank"
              rel="noreferrer"
              aria-label="Live Demo"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
      <div className="project__content">
        <h3 className="project__title">{project.title}</h3>
        <p className="project__desc">{project.desc}</p>
        <div className="project__tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="projects section" id="projects">
      <motion.div 
        className="projects__header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section__title">My Projects</h2>
        <p className="section__subtitle">Here are some of my recent works</p>
      </motion.div>

      <div className="projects__wrapper">
        {isMobile ? (
          <div className="projects__carousel">
            <button 
              className="carousel-button prev" 
              onClick={prevProject}
              aria-label="Previous project"
            >
              <FiChevronLeft />
            </button>
            
            <div className="projects__grid">
              <AnimatePresence mode="wait">
                {renderProject(projectData[currentIndex])}
              </AnimatePresence>
            </div>
            
            <button 
              className="carousel-button next" 
              onClick={nextProject}
              aria-label="Next project"
            >
              <FiChevronRight />
            </button>
            
            <div className="carousel-dots">
              {projectData.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <motion.div 
            className="projects__grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {projectData.map(renderProject)}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
