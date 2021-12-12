import React, { useState, useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

function Login() {
  const {
    showProfile,
    setUsername,
    setShowProfile,
    username,
    setShowHome
  } = useContext(LoginContext);

  return (
    <>
      <input
        type="text"
        placeholder="Username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input type="text" placeholder="Password..." />
      <button
        onClick={() => {
          setShowProfile(true);
          setShowHome(true);
        }}
      >
        Login
      </button>

      {showProfile && <h1>{username}</h1>}
    </>
  );
}

export default Login;
