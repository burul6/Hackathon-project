import React from "react";

import { useAuth } from "../../contexts/authContext";
import Header from "../Header/SecondHeader";

import "./Login.css";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = useAuth();
  
  return (
    <>
    <Header />
      <section className="login">
        <div className="login-container">
          <label className="auth-label">Email</label>

          <input
            className="auth-input"
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="error-msg">{emailError}</p>

          <label className="auth-label">Password</label>
          <input
            className="auth-input"
            type="password"
            autoFocus
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="error-msg">{passwordError}</p>

          <div className="btn-container">
            {hasAccount ? (
              <>
                <button className="auth-btn" onClick={handleLogin}>
                  Sign in
                </button>
                <p className="auth-text">
                  Don't have an account?
                  <span
                    className="auth-span"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button className="auth-btn" onClick={handleSignUp}>
                  Sign up
                </button>
                <p className="auth-text">
                  Have an account?
                  <span
                    className="auth-span"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign in
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
        <div className="left-part-images">
            <img id="chair" src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/fullwidth-slider-img-4.png" alt="" />
            <img id="waze" src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/fullwidth-slider-img-3.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Login;
