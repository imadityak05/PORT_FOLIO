import React from 'react';
import "./App.css";
import Header from "./components/header/Header";
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Education from './components/education/education';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default App;
