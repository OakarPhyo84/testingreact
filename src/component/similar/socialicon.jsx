import React from "react";
import socialicon from "./allnotes";

function createSocial(social) {
  return (
        <a href={social.link}><i className={social.icon}></i></a>
  );
}

function Social(){
    return(
        <div>
            {socialicon.map(createSocial)}
        </div>
    )
}

export default Social;