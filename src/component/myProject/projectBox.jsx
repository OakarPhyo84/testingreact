import React from "react";
  import {projectinfo} from "../similar/allnotes"

function Createprojects(project){
return(
    <a href="" className={project.name}>
          <div className="img_bg">
            <img src={project.source}
              alt="work" />
            <div className="img_bg_text">
              <p>None for Now</p>
            </div>
          </div>
        </a>
);
}

function Projectbox(){
    return(
        <div class="project_container">
            {projectinfo.map(Createprojects)}
      </div>
    );
}

export default Projectbox;