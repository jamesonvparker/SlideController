import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

function About() {
  const { showProfile, setUsername, setShowProfile, username } = useContext(
    LoginContext
  );
  return (
    <section class="section">
      <h1 class="title">Welcome to the About page, {username}</h1>
      <h2 class="subtitle">
        A simple container to divide your page into <strong>sections</strong>,
        like the one you're currently reading.
      </h2>
    </section>
  );
}

export default About;
