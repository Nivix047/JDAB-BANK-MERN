import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="pb-4">
      <nav className="navbar navbar-expand-lg bg-light" id="navbar">
        <div className="container-fluid">
          {Auth.loggedIn() ? (
            <Link className="navbar-brand" id="logout" onClick={logout}>
              Logout
            </Link>
          ) : (
            <Link to="/login" className="navbar-brand" id="login">
              Login
            </Link>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {Auth.loggedIn() ? (
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
              ) : (
                <></>
              )}
              {Auth.loggedIn() ? (
                <li className="nav-item">
                  <Link to="/usage" className="nav-link">
                    Usage
                  </Link>
                </li>
              ) : (
                <></>
              )}
              {/* Extra tabs in case more pages are needed to scale up project */}
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact us
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" href="#">
                  Technical support
                </Link>
              </li> */}
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

// old codes
// <nav>
// 	<a href="/">Home</a>
// 	<Link to="/">Home</Link>

// 	<Link to="/about">About</Link>
// 	<Link to="/contact">Contact</Link>
// </nav>
