import React from "react";
import Kriti from "../../assests/Kriti_Resume.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={Kriti} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
