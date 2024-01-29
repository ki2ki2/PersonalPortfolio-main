import React from "react";
import "./project.css";
import IMG1 from "../../assests/Portfolio.png";
// import NoteIMG from "../../assests/NoteApp.png";
import HostelImg from "../../assests/Hostel_Booking.png";
// import FilmIMG from "../../assests/FilmFliker.png";
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

        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={FilmIMG} alt="" />
          </div>
          <h3>FilmFliker - Movie Catalog Web-App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ManishK4514/FilmFliker" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://filmfliker.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}

        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={NoteIMG} alt="" />
          </div>
          <h3>NoteApp - Note Taking Web-App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ManishK4514/NoteApp" className="btn" target="_blank">
              Github
            </a>
            <a
              href="http://noteapp4514.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}

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
              href="https://ki2ki2.github.io/PersonalPortfolio-main/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Disney + Hotstar Clone - Movie Catalog</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ManishK4514/DisneyPlusClone.github.io"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://disneyplus4514.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
