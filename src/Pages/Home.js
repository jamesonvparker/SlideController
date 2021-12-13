import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../Contexts/LoginContext";
import SliderCarousel from "../components/SliderCarousel";
import { SlideContext } from "../Contexts/SlideContext";
import ImageHero from "../components/ImageHero";
import Card from "../components/Card";
import { Carousel, Arrow } from "@trendyol-js/react-carousel";
import CategoryPill from "../components/CategoryPill";
import LeftArrow from "../components/LeftArrow";
import RightArrow from "../components/RightArrow";
import PromoSlide from "../components/PromoSlide";
import ListingScroller from "../components/scrollers/ListingScroller";
import PromoScroller from "../components/scrollers/PromoScroller";
import PillScroller from "../components/scrollers/PillScroller";

function Home() {
  const { showProfile, setUsername, setShowProfile, username } = useContext(
    LoginContext
  );
  const { slides } = useContext(SlideContext);

  return (
    <section className="section is-paddingless">
      <h1 className="title">Hi {username}</h1>
      <h2 className="subtitle">Select an offer to claim</h2>
      <div className="">
        <PillScroller />
        <ImageHero
          imgSrc={"placeholder"}
          title={"Title"}
          subtitle={"Subtitle"}
        />
        {/* <SliderCarousel items={slides} /> */}

        <PromoScroller />
        <ListingScroller />
        <ListingScroller />
        <ListingScroller />
        <ListingScroller />
      </div>
    </section>
  );
}

export default Home;
