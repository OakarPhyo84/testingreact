import React from "react";
import Techskill from "./tech";
// import Socialskill from "./social"
import Titlebox from "../similar/title_box"
import Socialskill from "./Socialskill";

function Skill() {
    return (
        <section id="Skill" class="container">
           <Titlebox />
            <div class="row">
                {/* technical */}
               <Techskill />
                {/* social pro */}
                <Socialskill />
            </div>

        </section>
    )
}

export default Skill;