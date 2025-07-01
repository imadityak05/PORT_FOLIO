import React from "react";
import "./education.css";

const Education = () => {
  const calculateProgress = () => {
    const startDate = new Date('2022-01-01');
    const endDate = new Date('2026-12-31');
    const now = new Date();
    
    const totalDuration = endDate - startDate;
    const timePassed = now - startDate;
    
    return Math.min((timePassed / totalDuration) * 100, 100);
  };

  return (
    <section className="education section" id="education">
      <div className="section__header">
        <h2 className="section__title">Education</h2>
        <span className="section__subtitle">My academic background</span>
      </div>

      <div className="education__container">
        <div className="education__timeline">
          <div className="education__card">
            <span
              className="education__icon"
              role="img"
              aria-label="Graduation cap"
            >
              🎓
            </span>
            <h3 className="education__institution">
              National Institute of Technology, Patna
            </h3>
            <p className="education__degree">
              B.Tech – Electronics & Communication Engineering
            </p>
            <p className="education__year">2022 – 2026</p>
            <p className="education__cgpa">
              <strong>CGPA:</strong> 7.3
            </p>
            <div className="education__progress">
              <div 
                className="education__progress-bar" 
                style={{ width: `${calculateProgress()}%` }}
                aria-label="Degree completion progress"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
