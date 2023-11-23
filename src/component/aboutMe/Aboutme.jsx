import React from "react"
import Titlebox from "../similar/title_box"
import Aboutmep from "./aboutme_p.jsx";

function Aboutme(){
    return(
        // About Me 
  <section id="About">
    {/* tile */}
    <Titlebox />
    <div className=" container">
      <div className="row">
        {/* about me first row */}
        <div className="myimage col-sm-6"> <img
            src="https://pbs.twimg.com/profile_images/1480006962850918402/4jV711-A_400x400.jpg" alt="" /></div>
        {/* 1st row left my self */}
        <div className="myself_content  col-sm-6">
          <ul className="myself_list">
            <li>
              <h5 className="myself">Name</h5>
              <span>Oakar Phyo</span>
            </li>
            <li>
              <h5 className="myself">Birthday</h5>
              <span>21.Oct.2001</span>
            </li>
            <li>
              <h5 className="myself">Education</h5>
              <span>Graduate(B.S.C-Geol)</span>
            </li>
          </ul>
        </div>

        {/* about me second row */}
       <Aboutmep />
      </div>
    </div>
    <div className="more_myself"> <a className="more_btn" href="#Header">More about</a></div>
  </section>
    )
}

export default Aboutme;