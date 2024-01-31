import React from "react";
import "./project.css";
import IMG1 from "../../assests/Portfolio.png";
// import NoteIMG from "../../assests/NoteApp.png";
import HostelImg from "../../assests/Hostel_Booking.png";
import todolist from "../../assests/to-do-list.png";
// import IMG2 from "../../assests/project2.png";
const Portfolio = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={HostelImg} alt="" />
          </div>
          <h3>HOSTELENGINE.COM - Hostel Booking Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ki2ki2/Hostel_Booking_Website" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://ki2ki2.github.io/Hostel_Booking_Website/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={todolist} alt="" />
          </div>
          <h3>TO-DO-LIST</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ki2ki2/to_do_list" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://to-do-list-green-seven.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>My Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ki2ki2/PersonalPortfolio-main" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://personal-portfolio-main-phi.vercel.app/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
