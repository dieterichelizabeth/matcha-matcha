import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Footer from "../components/Footer";

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
      <div className="signup-page">
        <div className="signup-form-container">
          <h1>Signup</h1>
          <p className="login-welcome">Welcome! Create a new account</p>
          <form name="sign-up" onSubmit={handleFormSubmit}>
            {/* First Name Input */}
            <label htmlFor="firstName">First name</label>
            <br />
            <input
              className="form-input-field"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Please enter your first name"
              onChange={handleChange}
            />
            <br />
            {/* Last Name Input */}
            <label htmlFor="lastName">Last name</label>
            <br />
            <input
              className="form-input-field"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Please enter your last name"
              onChange={handleChange}
            />
            <br />
            {/* Email Input */}
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="form-input-field"
              type="text"
              id="email"
              name="email"
              placeholder="Please enter your email address"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            {/* Password Input */}
            <input
              className="form-input-field"
              type="password"
              id="myInput"
              name="password"
              placeholder="Please create a password"
              onChange={handleChange}
            />{" "}
            <br />
            <input type="checkbox" onClick={showPassword} /> Show Password{" "}
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
