import React from "react";

function Navi(){
    return(
    <nav className=" navbar navbar-expand-md nav-bg">
    <a class="navbar-brand" href="#">Oakar Phyo</a>
    {/* <!-- toggle bar and day-night --> */}
    <div className="toggle_box">
      {/* <!-- sun moon --> */}
      <div className="moon_sun">
        <i className="fa-regular fa-moon moon"></i>
        <i className="fa-regular fa-sun sun"></i>
      </div>
      {/* <!-- toggle button --> */}
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample01"
        aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <i className="navbar-toggler-icon"></i>
      </button>
    </div>

    <div className="navbar-collapse collapse" id="navbarsExample01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
          <a className="nav-link" href="#Header">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Skill">Skill</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Project">porfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Contact">Hire me</a>
        </li>
      </ul>
    </div>
  </nav>
    )
}

export default Navi;