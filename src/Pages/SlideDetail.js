import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import { SlideContext } from "../Contexts/SlideContext";
import { useParams } from "react-router-dom";

function SlideDetail() {
  const { username } = useContext(LoginContext);
  const { slides } = useContext(SlideContext);
  const { id } = useParams();

  let data = slides.find((x) => x.id === id);

  console.log(data);

  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <p className="title">Welcome to the Slide Detail page, {username}</p>
        <p className="subtitle">Detials for the Slide you clicked on:</p>
        <p>Slide ID: {data.id}</p>
        <p>Slide Content: {data.sliderContent}</p>
        <p>Slide Background Color: {data.sliderBackground}</p>
        <p>Slide Text Color: {data.sliderTextColor}</p>
      </div>
      <div className="container"></div>
    </section>
  );
}

export default SlideDetail;
