import React, { useEffect, useState } from "react";
import "./welcome.css";

const Welcome = () => {
  // Set the state for the Welcome Modal
  const [isOpen, toggleModal] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    toggleModal(false);
  };

  // On page load, get modal preference from Local Storage
  useEffect(() => {
    const preference = JSON.parse(
      window.localStorage.getItem("Matcha-Skincare-modal")
    );

    if (preference === null) {
      toggleModal(true);
    } else if (preference !== null) {
      toggleModal(preference);
    }
  }, []);

  // When the user closes the Model, save their preference to local storage
  useEffect(() => {
    window.localStorage.setItem(
      "Matcha-Skincare-modal",
      JSON.stringify(isOpen)
    );
  }, [isOpen]);

  return (
    <div
      className={isOpen === true ? "welcome-modal__container" : "display-none"}
    >
      <div className="welcome-modal">
        <img
          src={require("../../assets/welcome-modal.webp")}
          alt="A hand holding a Matcha Matcha cream product with leaves in the background."
          className="welcome-modal__img"
        ></img>

        <div className="welcome-modal_text-container">
          <button onClick={() => toggleModal(false)} className="modal-exit">
            X
          </button>
          <h2>Want to Shop New Formulas First?</h2>
          <p className="welcome-modal_main-txt">
            Something new is coming soon. Sign up for emails to be the first to
            know when our new product is available!
          </p>

          {/* Email List Signup Form */}
          <form className="modal__signup-form" onSubmit={handleFormSubmit}>
            <label htmlFor="email" className="display-none">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address (Required)"
              autoComplete="off"
              required
            />
            <label htmlFor="birthday" className="display-none">
              Your Birthday:
            </label>
            <input
              type="text"
              id="birthday"
              name="birthday"
              placeholder="Birthday (Optional)"
              autoComplete="off"
            />
            <input type="submit" className="submit" value="SIGN UP"></input>
            <button
              className="close-form-btn"
              onClick={() => toggleModal(false)}
            >
              NO THANKS
            </button>
          </form>

          <p className="modal_disclaimer">
            * By clicking Sign Up, you are agreeing to sign up for our email
            list and may recieve promotional emails.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
