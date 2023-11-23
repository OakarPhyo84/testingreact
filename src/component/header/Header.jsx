import React from "react";
import Navi from "./Navi"
import Herotext from "./Herotext"
import Heroimg from "./Heroimg";

function Header() {
   
    return (
        <header id="Header">
            {/* navigation */}
            <Navi />
            {/* contents */}
            <div id="head">
                {/* header left text */}
                <Herotext />
                {/* header right image */}
                <Heroimg />
            </div>
        </header>
    )
}

export default Header;