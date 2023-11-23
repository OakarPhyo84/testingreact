import React from "react";
import {socialinfo} from "../similar/allnotes"

function CreateSskills(sskill) {
    return(
        <div className="pro_circle col-6 col-md-3 col-lg-6">
        <svg x="0px" y="0px" viewBox="0 0 200 200">
            <circle className="circle-bar" cx="100" cy="100" r="80"></circle>
            <circle className={sskill.path} cx="100" cy="100" r="80"></circle>
        </svg>
        <div className="percent">{sskill.percent}</div>
        <div className="pro_text">{sskill.name}</div>
    </div>
    );
}

function Socialskill(){
    return(
        <div class="col-lg-6">
                    <h4>Social <span class="red">Skill</span> </h4>
                    <div class="pro_circle_box row">
                       {socialinfo.map(CreateSskills)}
                    </div>
                </div>
    );
}

export default Socialskill;