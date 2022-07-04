import React, { useState } from "react";

const Signup = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Success:", formState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
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
    <div className="signup-form-container">
      <h1>Signup</h1>
      <form name="sign-up" onSubmit={handleFormSubmit}>
        {/* First Name Input */}
        <label htmlFor="fname">First name</label>
        <br />
        <input
          className="form-input-field"
          type="text"
          id="fname"
          name="fname"
          placeholder="Please enter your first name"
          onChange={handleChange}
        />
        <br />
        {/* Last Name Input */}
        <label htmlFor="lname">Last name</label>
        <br />
        <input
          className="form-input-field"
          type="text"
          id="lname"
          name="lname"
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
        <input type="checkbox" onClick={showPassword} /> Show Password <br />
        <button className="form-submit-button">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
