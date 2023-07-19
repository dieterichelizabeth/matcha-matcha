import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Notification from "../components/Notification";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NotificationSupport from "../components/NotificationSupport";
import "./signup.css";

const Signup = () => {
  const [addUser, { error }] = useMutation(ADD_USER);

  // Form State
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // On form submit, attempt to create a new user
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUserResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      const token = newUserResponse.data.addUser.token;
      // Login the new user
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  // https://www.w3schools.com/howto/howto_js_toggle_password.asp
  function showPassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div>
      <Notification />
      <Nav />
      <hr></hr>

      <div className="signup-page">
        <div className="signup-form-container">
          <h1>Create Your Account</h1>

          <form name="sign-up" onSubmit={handleFormSubmit}>
            {/* First Name Input */}
            <label htmlFor="firstName" className="display-none">
              First name
            </label>
            <br />
            <input
              className="form-input-field"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Please enter your first name"
              required
              onChange={handleChange}
            />
            <br />
            {/* Last Name Input */}
            <label htmlFor="lastName" className="display-none">
              Last name
            </label>
            <br />
            <input
              className="form-input-field"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Please enter your last name"
              required
              onChange={handleChange}
            />
            <br />
            {/* Email Input */}
            <label htmlFor="email" className="display-none">
              Email
            </label>
            <br />
            <input
              className="form-input-field"
              type="text"
              id="email"
              name="email"
              placeholder="Please enter your email address"
              required
              onChange={handleChange}
            />
            <br />
            <label htmlFor="password" className="display-none">
              Password
            </label>
            <br />
            {/* Password Input */}
            <input
              className="form-input-field"
              type="password"
              id="password"
              name="password"
              placeholder="Please create a password"
              required
              onChange={handleChange}
            />
            <br />
            {/* Show Password Toggle */}
            <input
              type="checkbox"
              onClick={showPassword}
              id="showPassword"
              name="showPassword"
              className="password-show"
            />
            <label htmlFor="showPassword">Show Password</label>
            <br />
            <button className="form-submit-button">Create Account</button>
          </form>
          {error ? (
            <div>
              <p className="error-text">
                Something went wrong with creating your account. Please try
                again.
              </p>
            </div>
          ) : null}
          <p className="form-disclaimer">
            Already have an account?{" "}
            <span>
              <a href="/login" className="signup-link">
                Log In Here
              </a>
            </span>
          </p>
          <p className="form-disclaimer">
            I agree that my use of this website will be in compliance with the
            Terms & Conditions.
          </p>
        </div>
      </div>

      <NotificationSupport />
      <Footer />
    </div>
  );
};

export default Signup;
