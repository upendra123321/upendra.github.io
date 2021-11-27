import React from "react";
import About from "./about";
import "./body.css";
import Contact from "./contact/Index";
import Projects from "./projects";
import Skills from "./skills";
import Work from "./work";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Work />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default Body;
