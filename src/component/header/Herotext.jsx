import React from "react";
import Social from "../similar/socialicon";

function Herotext(){
    return(
        <div className="main-text">
        <h2>Hello,I'm</h2>
        <h1>Oakar <span className="red">Phyo</span></h1>
        <h2>I'm a <span className="animate_h"></span></h2>
        <p>I'm a Frontend Developer who specializes in creating and implementing
          the visual elements of websites,including layout, design, and user interface</p>

          {/* Social icon */}
          <Social />
         
        <a className="cv_btn" href="#">Download CV <i></i></a>
      </div>
    )
}

export default Herotext;