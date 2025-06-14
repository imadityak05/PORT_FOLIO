import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        {[
          {
            title: "Frontend",
            items: ["HTML", "CSS / Tailwind CSS", "JavaScript", "React.js", "TypeScript"],
          },
          {
            title: "Backend",
            items: ["Node.js", "Express.js", "MongoDB", "Firebase"],
          },
          {
            title: "Coursework",
            items: [
              "Data Structures",
              "Computer Networks",
              "OOPs",
              "Operating System",
              "Python",
              "Artificial Intelligence",
            ],
          },
          {
            title: "Programming Languages",
            items: ["C/C++", "Java", "Python", "JavaScript"],
          },
          {
            title: "Tools & Others",
            items: ["Git & GitHub", "VS Code", "Figma", "Netlify / Vercel", "Google Cloud"],
          },
        ].map((skillSet, index) => (
          <div className="skills__content" key={index}>
            <h3 className="skills__title">{skillSet.title}</h3>
            <ul className="skills__list">
              {skillSet.items.map((item, i) => (
                <li className="skills__item" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
