import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./iconn.png"
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(true);
  const changeToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div>
      <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container py-1">
          <NavLink className="d-flex navbar-brand text-uppercase" to="/">
           <img className="brand-img" src={logo} alt='Auth' />
           <h2>Auth </h2> 
          </NavLink>
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              toggleMenu
                ? "collapse navbar-collapse"
                : "collapse navbar-collapse show"
            }
            id="navbarSupportedContent"
          >
        
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {/* <li onClick={() => changeToggle()} className="nav-item">
                  <NavLink
                    as={NavLink}
                    activeClassName="my-active"
                    className="nav-link"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink
                    onClick={() => changeToggle()}
                    as={NavLink}
                    activeClassName="my-active"
                    className="nav-link"
                    to="Signup"
                  >
                    Signup
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={() => changeToggle()}
                    as={NavLink}
                    activeClassName="my-active"
                    className="nav-link"
                    to="Login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={() => changeToggle()}
                    as={NavLink}
                    activeClassName="my-active"
                    className="nav-link"
                    to="User"
                  >
                    Users
                  </NavLink>
                </li>
              </ul>
          
          </div>
        </div>
      </nav>
    </div>
  );
}
