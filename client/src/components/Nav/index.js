import React, { useState } from "react";
import Auth from "../../utils/auth";
import "./style.css";
import Cart from "../Cart";

const Nav = () => {
  // Hamburger State
  const [hamburgerState, setHamburgerState] = useState(false);

  // Handle Hamburger clicks
  const handleHamburg = () => {
    if (hamburgerState === false) {
      setHamburgerState(true);
    } else {
      setHamburgerState(false);
    }
  };

  return (
    <nav>
      {/* Company Name or Logo */}
      <div className="logo">
        <a href="/">
          <p>Matcha Skincare</p>
        </a>
      </div>

      {/* Hamburger "button" */}
      <div
        className={hamburgerState ? "hamburger toggle" : "hamburger"}
        onClick={handleHamburg}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      {/* Nav Links */}
      <ul className={hamburgerState ? "nav-links open" : "nav-links"}>
        <li className={hamburgerState ? "fadeIn" : ""}>
          <a href="/catalog">Catalog</a>
        </li>
        {Auth.loggedIn() ? (
          <>
            <li className={hamburgerState ? "fadeIn" : ""}>
              <a href="/orderHistory">Orders</a>
            </li>
            <li className={hamburgerState ? "fadeIn" : ""}>
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </>
        ) : (
          <>
            <li className={hamburgerState ? "fadeIn" : ""}>
              <a href="/login">Login</a>
            </li>
            <li className={hamburgerState ? "fadeIn" : ""}>
              <a href="/signup">Signup</a>
            </li>
          </>
        )}
      </ul>

      <Cart />
    </nav>
  );
};

export default Nav;
