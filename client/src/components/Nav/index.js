import React, { useState } from "react";
import Auth from "../../utils/auth";
import Cart from "../Cart";
import "./nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="nav__main">
        {/* Pages Links */}
        <div className="nav__main-desktop--container">
          <ul className="nav__main-desktop">
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/our-story">Our Story</a>
            </li>
            <li>
              <a href="/blog">Read Our Blog</a>
            </li>
          </ul>
        </div>
        <div className="nav__main-mobile">
          <button className="nav__open-btn">
            <span
              className="material-symbols-outlined"
              onClick={() => setIsOpen(true)}
            >
              menu
            </span>
          </button>
        </div>

        {/* User Links */}
        <div className="nav__main-user--links">
          <div className="dropdown">
            <button className="dropbtn">
              <span className="material-symbols-outlined">person</span>
            </button>
            <div id="myDropdown" className="dropdown-content ">
              {Auth.loggedIn() ? (
                <>
                  <a href="/orderHistory">Orders</a>
                  <a href="/" onClick={() => Auth.logout()}>
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <a href="/login">Login</a>
                  <a href="/signup">Signup</a>
                </>
              )}
            </div>
          </div>

          <Cart />
        </div>
      </nav>

      {/* Company Name or Logo */}
      <div className="logo--container">
        <div className="logo">
          <img
            src={require("../assets/logo.png")}
            alt="The company logo is four squares with dots in the middle."
          />
          <a href="/">
            <span className="color-1">MATCHA</span>{" "}
            <span className="color-2">MATCHA</span>
          </a>
        </div>
      </div>

      {/* Mobile NavBar (Full Page) */}
      <MobileNavSlider isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const MobileNavSlider = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={
        isOpen
          ? "nav__main-mobile--container open"
          : "nav__main-mobile--container"
      }
    >
      <div className="nav__main-mobile--close-btn-container">
        <button className="nav__main-mobile--close-btn">
          <span
            className="material-symbols-outlined"
            onClick={() => setIsOpen(false)}
          >
            close
          </span>
        </button>
      </div>

      <ul className="nav__main-mobile--links">
        <li>
          <a href="/shop">Shop All</a>
        </li>
        <li>
          <a href="/our-story">Our Story</a>
        </li>
        <li>
          <a href="/blog">Read Our blog</a>
        </li>
      </ul>

      <button className="nav__accoutn-btn">MY ACCOUNT</button>
    </div>
  );
};

export default Nav;
