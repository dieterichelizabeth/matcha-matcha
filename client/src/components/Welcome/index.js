import React, { useEffect, useState } from "react";

const Welcome = () => {
  // Set the state for the Welcome Modal
  const [isOpen, toggleModal] = useState(true);

  // On page load, get modal preference from Local Storage
  useEffect(() => {
    const preference = JSON.parse(
      window.localStorage.getItem("Matcha-Skincare-modal")
    );

    if (preference !== null) {
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
    <div className={isOpen === true ? "welcome-modal" : "display-none"}>
      <button onClick={() => toggleModal(false)}>X</button>
      <h2>Welcome 👋</h2>
      <p>
        This shop is a mock ecommerce site built as a personal project. This
        site does not sell the “products” listed.
      </p>
      <p>All “product” images come from Unsplash.</p>
      <p>
        This site utilizes a test API key for the mock payment platform.{" "}
        <b>DO NOT ENTER SENSITIVE PERSONAL INFORMATION IN THIS SITE.</b> (Credit
        Card numbers, Email, Passwords, and Usernames) Your input will not be
        secure.
      </p>
    </div>
  );
};

export default Welcome;
