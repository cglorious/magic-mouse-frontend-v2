import React from "react";
import "../styles/style.css";

const NavBar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/resorts">Resorts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/parks">Parks</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/lands">Lands</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/attractions">Attractions</a>
              </li>
            </ul>
          </div>
          <div id="points">
            Points: 0
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
