import React from "react";
import Titlebox from "../similar/title_box"
import Projectbox from "./projectBox";

function Project(){
    return(
<section id="Project">
<Titlebox />
    <div className="project_box">
      {/* ** filter ** */}
      <ul className="project_filter">
        <li className="list project_filter_active" data-filter="all">All</li>
        <li className="list " data-filter="app_design">App Design</li>
        <li className="list" data-filter="web_design">Web Design</li>
      </ul>
      {/* projects container */}
      <Projectbox />
    </div>
  </section>
    );
}

export default Project;