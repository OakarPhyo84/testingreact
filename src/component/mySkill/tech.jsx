import React from "react";
import {techinfo} from "../similar/allnotes";

function CreateTskills(tskill){
return(
    <div class="skill_bar col-6 col-md-6">
    <i class={tskill.name}></i><span class="course"> HTML</span>
    <div class={tskill.type}>
        <span></span>
    </div>
    <span class="mobile_course">{tskill.hold}</span>
</div>
);
}

function Techskill(){
    return(
        <div class="col-lg-6">
        <h4>Technical <span class="red">Skill</span></h4>
        <div class="skill_box row">
           {techinfo.map(CreateTskills)}
        </div>
    </div>
    );
}

export default Techskill;