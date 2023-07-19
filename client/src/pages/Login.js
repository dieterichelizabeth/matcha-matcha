import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import Notification from "../components/Notification";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NotificationSupport from "../components/NotificationSupport";
import "./signup.css";

const Login = () => {
  const [login, { error }] = useMutation(LOGIN);

  // Form State
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // On form submit, attempt to login the user
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const loginUser = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = loginUser.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  function showPassword() {
    var x = document.getElementById("password");
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

      <div className="login-page">
        <div className="login-form-container">
          <div className="login-form">
            <h1>Login</h1>

            <form name="sign-up" onSubmit={handleFormSubmit}>
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
              <button className="form-submit-button">Login</button>
            </form>

            {error ? (
              <div>
                <p className="error-text">
                  Incorrect Login Email or Password. Please try again.
                </p>
              </div>
            ) : null}
          </div>

          <p className="form-disclaimer">
            New to our site?{" "}
            <span>
              <a href="/signup" className="signup-link">
                Sign Up Here
              </a>
            </span>
          </p>
        </div>
      </div>

      <NotificationSupport />
      <Footer />
    </div>
  );
};

export default Login;
