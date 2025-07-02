import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav">
        <Link to="home" smooth={true} duration={500} className="nav__logo">
          Aditya
        </Link>

        <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav__link"
                onClick={closeMenu}
                activeClass="active"
                spy={true}
                offset={-70}
              >
                Home
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav__link"
                onClick={closeMenu}
                activeClass="active"
                spy={true}
                offset={-70}
              >
                About
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="education"
                smooth={true}
                duration={500}
                className="nav__link"
                onClick={closeMenu}
                activeClass="active"
                spy={true}
                offset={-70}
              >
                Education
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="nav__link"
                onClick={closeMenu}
                activeClass="active"
                spy={true}
                offset={-70}
              >
                Skills
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="nav__link"
                onClick={closeMenu}
                activeClass="active"
                spy={true}
                offset={-70}
              >
                Projects
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav__link nav__link-button"
                onClick={closeMenu}
                activeClass="active"
                spy={true}
                offset={-70}
              >
                Contact Me
              </Link>
            </li>
          </ul>

          <button className="nav__close" onClick={toggleMenu} aria-label="Close menu">
            <FaTimes />
          </button>
        </div>

        <button 
          className="nav__toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
