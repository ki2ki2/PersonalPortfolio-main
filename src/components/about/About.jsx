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
              <small>3 Completed</small>
            </article>
          </div>

          <p id="para">
            I am looking for an Entry-level position in the field of Software
            Development. Currently pursuing bachelor's degree from Lakshmi Narain College of Technology Excellence, Bhopal. And I have a good knowledge of C++,
            Data Structures and Algorithms, OPPs, Operating System, Networking, HTML, CSS, JavaScript, React.js, Node.js and Machine Learning.
            Looking for an Internship opportunity or a Full-time opportunity as
            a Software Developer to follow my passion and that is Solving
            Problems.
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
