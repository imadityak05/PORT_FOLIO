import React, { useState } from "react";
import "./skills.css";
import { skillIcons, skillLevels, skillsData } from "../../data/skillIcons";

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const currentSkills = skillsData[activeTab] || skillsData.frontend;

  return (
    <section className="skills section" id="skills">
      <div className="skills__header">
        <h2 className="skills__title">Skills & Expertise</h2>
        <h3 className="skills__subtitle">Technical Proficiency & Expertise </h3>
      </div>

      <div className="skills__container">
        <div className="skills__tabs">
          {Object.entries(skillsData).map(([key, value]) => (
            <button
              key={key}
              className={`skills__tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {value.title}
              {activeTab === key && <span className="skills__tab-indicator"></span>}
            </button>
          ))}
        </div>

        <div className="skills__content">
          <div className="skills__card">
            <ul className="skills__list">
              {currentSkills.items.map((item, index) => (
                <li className="skills__item" key={index}>
                  <div className="skills__item-content">
                    <div className="skills__icon-wrapper" style={{ backgroundColor: `${skillIcons[item]?.color}15` }}>
                      <img 
                        src={skillIcons[item]?.icon} 
                        alt={item}
                        className="skills__icon"
                        style={{ 
                          width: '24px', 
                          height: '24px',
                          objectFit: 'contain',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                        }}
                        title={item}
                        loading="lazy"
                      />
                    </div>
                    <div className="skills__info">
                      <span className="skills__skill-name">{item}</span>
                      <div className="skills__progress-wrapper">
                        <div className="skills__progress-container">
                          <div 
                            className="skills__progress-bar" 
                            style={{ 
                              width: `${skillLevels[item] || 80}%`,
                              background: `linear-gradient(90deg, ${skillIcons[item]?.color || '#667eea'}, ${skillIcons[item]?.color || '#764ba2'})`
                            }}
                            aria-valuenow={skillLevels[item] || 80}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          />
                        </div>
                        <span className="skills__percentage">{skillLevels[item] || 80}%</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
