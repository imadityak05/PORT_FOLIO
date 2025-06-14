import React from "react";
import "./education.css";

const Education = () => {
  return (
    <section className="education section" id="education">
      <h2 className="section__title">Education</h2>
      <span className="section__subtitle">My academic background</span>

      <div className="education__container container">
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
              <strong>CGPA:</strong> 7.2
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
