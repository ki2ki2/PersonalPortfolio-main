import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assests/Kriti_Kumari3.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kriti Kumari</h1>
        <h5 className="text-light">Frontend Developer Enthusiast</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
