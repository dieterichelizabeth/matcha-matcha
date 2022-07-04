import React, { useState } from "react";
import "./style.css";

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
        <li className={hamburgerState ? "fadeIn" : ""}>
          <a href="/login">Login</a>
        </li>
        <li className={hamburgerState ? "fadeIn" : ""}>
          <a href="/signup">Signup</a>
        </li>
      </ul>

      <div className="shopping-cart">
        <a href="/cart">
          <span className="material-symbols-outlined">shopping_bag</span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
