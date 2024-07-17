import React from "react";
import "./about.css";
import ME from "../../assests/Kriti_Kumari1.jpg";
import { FaAward } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" id="myPhoto" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Student</h5>
              <small>Lakshmi Narain College of Technology Excellence, Bhopal </small>
            </article>

            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Course</h5>
              <small>B.Tech</small><br></br>
              <small>(CSE-Data Science)</small>
            </article>

            <article className="about__card">
              <BsFillFileEarmarkCodeFill className="about__icon" />
              <h5>Projects</h5>
              <small>6 Completed</small>
            </article>
          </div>

          <p id="para">
            I am an aspiring Frontend Developer professional. I recently completed bachelor's degree from Lakshmi Narain College of Technology Excellence, Bhopal (2020-2024).
            I possess strong knowledge and practical experience in C++, Java, Data Structures and Algorithms, Object-Oriented Programming, HTML, CSS, JavaScript, React.js, Operating Systems, Networking, and Machine Learning.
            <br />
            I am actively seeking an entry-level position or internship in Frontend Development where I can leverage my skills and follow my passion for technology. 
            I am eager to contribute to a dynamic team and grow within the field.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
