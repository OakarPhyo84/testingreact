import React from "react";
import Maildetail from "./maildetail"

function Mailbox(){
    return(
        <div className="contact_email col-12 col-md-6">
        <p>I'am always open discussing product.</p>
        <p className="title">design work or patherships.</p>
        {/* Mail form */}
        <Maildetail />
      </div>
    )
}

export default Mailbox;