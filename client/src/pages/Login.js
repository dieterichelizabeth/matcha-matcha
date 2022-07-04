import React, { useState } from "react";

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
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
          <button className="form-submit-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
