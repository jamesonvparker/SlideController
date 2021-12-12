import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import SliderCarousel from "../components/SliderCarousel";
import { SlideContext } from "../Contexts/SlideContext";

function Home() {
  const { showProfile, setUsername, setShowProfile, username } = useContext(
    LoginContext
  );
  const { slides } = useContext(SlideContext);
  return (
    <section className="section">
      <h1 class="title">Hi {username}</h1>
      <h2 class="subtitle">Select an offer to claim</h2>
      <SliderCarousel items={slides} />

      <h2>Store near you</h2>
    </section>
  );
}

export default Home;
