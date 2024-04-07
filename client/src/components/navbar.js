import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link className="nav-link" to="/">
              Home{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Multiplayer
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Campaign
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/soldier">
              Soldier
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/">
              Store
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/">
              More
            </Link>
          </li>
        </ul>
      </div>
      <img
        src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1b899e303b6e902c5e4_home__level-icon.png"
        alt="My Logo"
        className="Logo"
      />
      <Link className="navbar-brand mr-auto" to="/">
        <img
          src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038f71092c1304bda9086db_BF4__logo.png"
          alt=""
          className="Navbrand"
        />
      </Link>
    </nav>
  );
}

export default Navbar;
