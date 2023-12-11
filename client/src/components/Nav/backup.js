import Auth from "../../utils/auth";
import Cart from "../Cart";
import Nav2 from "./index2";

const Nav = () => {
  return (
    <>
      <nav>
        {/* Company Name or Logo */}
        <div className="logo">
          <img src={require("../assets/logo.png")} alt="a giant M and S" />
          <a href="/">Matcha Skincare</a>
        </div>

        {/* User Links */}
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
      </nav>

      <Nav2 />
    </>
  );
};

export default Nav;
