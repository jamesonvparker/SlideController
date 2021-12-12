import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          Home
        </Link>

        <Link
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          to="/"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/about">
            About
          </Link>

          <Link className="navbar-item" to="/profile">
            Profile
          </Link>

          <Link className="navbar-item" to="/create">
            Create
          </Link>

          {/* <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link" to="/">More</Link>

            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/about">About</Link>
              <Link className="navbar-item" to="/">Jobs</Link>
              <Link className="navbar-item" to="/">Contact</Link>
              <hr className="navbar-divider" />
              <Link className="navbar-item" to="/">Report an issue</Link>
            </div>
          </div> */}
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-primary" to="/">
                <strong>Sign up</strong>
              </Link>
              <Link className="button is-light" to="/">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
