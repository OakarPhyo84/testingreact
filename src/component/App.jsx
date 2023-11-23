import React from 'react';
import Header from "./header/Header";
import Aboutme from './aboutMe/Aboutme';
import Skill from "./mySkill/Skill"
import Project from "./myProject/Project"
import Contact from "./myContact/Contact";
import Footer from "./footer/Footer"

function App(){
    return(
        <div>
            <Header />
            <Aboutme />
            <Skill />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;