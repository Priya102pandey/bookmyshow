import React, { useState } from "react";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [Sccessfull,setSccessfull]=useState("");

  function validateForm() {
    let isValid = true;

    // Check that name field is filled out
    if (name === "") {
      setNameError("Please enter your name");
      isValid = false;
    } else {
      setNameError("");
    }

    // Check that email field is filled out and in a valid format
    if (email === "") {
      setEmailError("Please enter your email");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Check that password field is filled out
    if (password === "") {
      setPasswordError("Please enter a password");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      // Call API to submit form data or submit form via AJAX
      setSccessfull("you singnup successfully")
    }
  }

  return (
    <div className="Main-Container">
      <div className="container">
        <div className="signUp-logo">
          {/* <img src={lockicon} className="lock-logo" alt="logo" /> */}
        </div>
        <div>
          <h4>Sign Up</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <span className="error-message">{nameError}</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <span className="error-message">{emailError}</span>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <span className="error-message">{passwordError}</span>
          </div>
          <span className="error-message">{Sccessfull}</span>
          <button type="submit" className="btn-login">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;