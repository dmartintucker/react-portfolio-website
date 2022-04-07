import React from "react";
import Logo from "../img/d-logo.svg";

export default function Navbar() {
  return (
    <nav>
      <img className="logo" src={Logo} />
      <ul className="navbar-links">
        <li>
          <p>My Why</p>
        </li>
        <li>
          <p>Case Studies</p>
        </li>
        <li>
          <p>My Projects</p>
        </li>
        <li>
          <button>Get In Touch</button>
        </li>
      </ul>
      <button className="toggle-btn">Toggle Me</button>
    </nav>
  );
}
