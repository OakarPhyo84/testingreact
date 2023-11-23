import React from "react";
// same floder
import Mailbox from "./mailBox";
import Phcontact from "./phcontact"
// outside floder
import Titlebox from "../similar/title_box";
import Social from "../similar/socialicon";

function Contact(){
    return(
        <section id="Contact" className="container">
    <Titlebox />
    {/* Contact Box */}
    <div className="contact_box row">
      {/* contact ph info */}
      <div className="contact_ph col-md-6">
        <h4 className="second">Let's Work Together</h4>
        {/*left Phone */}
        <Phcontact />
        {/* Social icon */}
        <Social />
      </div>
      {/* contact email info */}
      <Mailbox />
    </div>
  </section>
    );
}

export default Contact;