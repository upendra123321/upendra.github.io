import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there 👋, I am
          <br />
          <span className="info-name">Upendra</span>.
          <br />
          Nice to meet you!!
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png").default}
            className="picture"
          />
        </div>
      </div>
      <div className="about-bottom"></div>
      <SocialContact />
    </div>
  );
}

export default About;
