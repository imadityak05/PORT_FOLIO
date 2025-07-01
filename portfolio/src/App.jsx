import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/theme/ThemeToggle';
import "./App.css";
import Header from "./components/header/Header";
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Education from './components/education/education';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <ThemeToggle />
        <main>
          <Home />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
