import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import SliderCarousel from "../components/SliderCarousel";
import { SlideContext } from "../Contexts/SlideContext";
import ImageHero from "../components/ImageHero";

function Home() {
  const { showProfile, setUsername, setShowProfile, username } = useContext(
    LoginContext
  );
  const { slides } = useContext(SlideContext);

  return (
    <section className="section is-paddingless">
      <h1 className="title">Hi {username}</h1>
      <h2 className="subtitle">Select an offer to claim</h2>
      <ImageHero imgSrc={"placeholder"} />
      <SliderCarousel items={slides} />

      <h1 className="title ">Deal of the day</h1>
      {/* <SliderCarousel items={slides} />
      <SliderCarousel items={slides} /> */}
    </section>
  );
}

export default Home;
