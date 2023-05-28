import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import ReceivedMessages from "./ReceivedMessages";

const Navbar = (props) => {
  //control login
  const { user, isAuth } = props.auth;
  //control logout
  const { logout, loadFresh } = props;

  //setting that the navbar scrolls down with the user
  useEffect(() => {
    if (!loadFresh) {
      return;
    }
    //the scrolling navbar's script
    const script = document.createElement("script");
    script.src = `${process.env.PUBLIC_URL}/js/fresh.js`;
    script.async = true;
    document.body.appendChild(script);
  }, [loadFresh]);

  return (
    <nav
      id={props.id || ""}
      className="navbar is-fresh is-transparent no-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <div className="title">Servicario</div>
          </Link>
          <a className="navbar-item is-hidden-desktop is-hidden-tablet">
            <div
              id="menu-icon-wrapper"
              className="menu-icon-wrapper"
              style={{ visibility: "visible" }}
            >
              <svg width="1000px" height="1000px">
                <path
                  className="path1"
                  d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
                ></path>
                <path className="path2" d="M 300 500 L 700 500"></path>
                <path
                  className="path3"
                  d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
                ></path>
              </svg>
              <button
                id="menu-icon-trigger"
                className="menu-icon-trigger"
              ></button>
            </div>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar-menu" className="navbar-menu is-static">
          <div className="navbar-start">
            <a className="navbar-item is-hidden-mobile">
              <div
                id="menu-icon-wrapper"
                className="menu-icon-wrapper"
                style={{ visibility: "visible" }}
              >
                <svg width="1000px" height="1000px">
                  <path
                    className="path1"
                    d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
                  ></path>
                  <path className="path2" d="M 300 500 L 700 500"></path>
                  <path
                    className="path3"
                    d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
                  ></path>
                </svg>
                <button
                  id="menu-icon-trigger"
                  className="menu-icon-trigger"
                ></button>
              </div>
            </a>
          </div>

          <div className="navbar-end">
            {user && (
              <div className="navbar-item is-secondary user-welcome">
                {`Hi ${user.fullName}`}
              </div>
            )}

            <Link to="/" className="navbar-item is-secondary">
              Home
            </Link>
            <Link to="/services" className="navbar-item is-secondary">
              Services
            </Link>
            <Link to="/faq" className="navbar-item is-secondary">
              FAQ
            </Link>

            {isAuth && (
              <React.Fragment>
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-link">Dropdown</Link>

                  <div className="navbar-dropdown">
                    <Link to="/services/new" className="navbar-item">
                      Create Service
                    </Link>
                    <Link to="/services/me" className="navbar-item">
                      Your Services
                    </Link>
                    <Link to="/offers/sent" className="navbar-item">
                      Sent offers
                    </Link>
                    <Link to="/offers/received" className="navbar-item">
                      Received offers
                    </Link>
                    <Link to="/collaborations/me" className="navbar-item">
                      Collaborations
                    </Link>
                  </div>
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Messages</a>
                  <div className="navbar-dropdown">
                    {console.log("user nesnesi : ", user)}
                    {user.messages && <ReceivedMessages />}
                  </div>
                </div>
              </React.Fragment>
            )}
            {!isAuth && (
              <>
                <Link
                  to="/login"
                  className="navbar-item is-secondary modal-trigger"
                  data-modal="auth-modal"
                >
                  Log in
                </Link>
                <Link to="/register" className="navbar-item">
                  <span className="button signup-button rounded secondary-btn raised">
                    Register
                  </span>
                </Link>
              </>
            )}
            {isAuth && (
              <div onClick={logout} className="navbar-item">
                <span className="button signup-button is-danger rounded raised">
                  Log out
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
