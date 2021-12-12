import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../Contexts/LoginContext";

function Profile() {
  let navigate = useNavigate();
  // let { username } = useParams();

  const { username } = useContext(LoginContext);

  return (
    <section className="section">
      <h1 className="title">
        {username
          ? `This is ${username?.toUpperCase()}'s Profile`
          : "Please Login"}
      </h1>
      <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>,
        like the one you're currently reading.
      </h2>
      {localStorage.getItem("name")}
      {localStorage.getItem("email")}

      <img src={localStorage.getItem("profilePic")} />
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Change to about page
      </button>
    </section>
  );
}

export default Profile;
