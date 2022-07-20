import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
  // Access and use data from the Redux store state.
  const store = useSelector((state) => state);
  console.log(store);

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
    <div className="login-form-container">
      <div className="login-form">
        <h1>Login</h1>
        <form name="sign-up" onSubmit={handleFormSubmit}>
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
            id="password"
            name="password"
            placeholder="Please create a password"
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="checkbox"
            id="showPassword"
            onClick={showPassword}
          />{" "}
          Show Password <br />
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
    </div>
  );
};

export default Login;
