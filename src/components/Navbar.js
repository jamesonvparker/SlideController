import React from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, auth } from "../firebase";
import { signOut } from "firebase/auth";

function Navbar() {
  const handleSignOut = async () => {
    localStorage.removeItem("name");
    localStorage.removeItem("profilePic");
    localStorage.removeItem("email");
    await signOut(auth);
  };

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
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {localStorage.getItem("name") !== null ? (
                <button onClick={handleSignOut}>SignOut</button>
              ) : (
                <Link
                  className="button is-light"
                  to="/"
                  onClick={signInWithGoogle}
                >
                  Sign In With Google
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
