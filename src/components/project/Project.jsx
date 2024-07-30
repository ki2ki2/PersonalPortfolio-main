import React from "react";
import "./project.css";
import HostelImg from "../../assests/Hostel_Booking.png";
import Yoga from "../../assests/YogaPose.png";
import Snake from "../../assests/SnakeGame.jpg";
import Rock from "../../assests/RockPaper.png";
import TicTac from "../../assests/TicTacToe.png"
import todolist from "../../assests/to-do-list.png";
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
            <img src={Yoga} alt="" />
          </div>
          <h3>Yoga-Pose</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ki2ki2/Yogpose-main" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://ki2ki2.github.io/Yogpose-main/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Snake} alt="" />
          </div>
          <h3>Snake-Game</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ki2ki2/snake-game-js-main" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://ki2ki2.github.io/snake-game-js-main/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Rock} alt="" />
          </div>
          <h3>Rock-Paper-Scissors</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ki2ki2/Rock-Paper-Scissors-Game" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://ki2ki2.github.io/Rock-Paper-Scissors-Game/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={TicTac} alt="" />
          </div>
          <h3>Tic-Tac-Toe</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/ki2ki2/Tic-Tac-Toe-Game" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://ki2ki2.github.io/Tic-Tac-Toe-Game/" className="btn btn-primary" target="_blank">
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

        
      </div>
    </section>
  );
};

export default Portfolio;
