import React from "react";
import Notification from "../components/Notification";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NotificationSupport from "../components/NotificationSupport";
import "./nomatch.css";

const NoMatch = () => {
  return (
    <>
      <Notification />
      <Nav />
      <hr></hr>

      <div className="no-match-page">
        <div className="no-match-page__img-container">
          <img
            src={require("../assets/404-not-found.png")}
            alt="A teacup sitting on top of a saucer sitting on a leaf with the word 404 written."
          ></img>
        </div>
        <div className="no-match-page__text-container">
          <h2>Error 404: Page Not Found</h2>
          <p>
            We are unable to find the page requested. It may not exist, or has
            been deleted.
          </p>
          <a href="/">Visit the Homepage</a>
        </div>
      </div>

      <NotificationSupport />
      <Footer />
    </>
  );
};

export default NoMatch;
