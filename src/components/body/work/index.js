import React from "react";

import WorkCard from "./work-card";
import "./work.css";

import { WorkData } from "../../data/work";
import Seperator from "../../common/social-contact/seperator";
function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Seperator/>
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;