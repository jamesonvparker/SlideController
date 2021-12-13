import React, { useEffect, useState, useContext } from "react";
import { SlideContext } from "../Contexts/SlideContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slide from "./Slide";

const SliderCarousel = ({items}) => {
  // const { slides } = useContext(SlideContext);

  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        swipable={true}
        emulateTouch={true}
      >
        {items.map((slide) => {
          return (
            <Slide
              id={slide.id}
              text={slide.text}
              bgColor={slide.bgColor}
              textColor={slide.textColor}
              key={slide.id}
            />
          );
        })}
      </Carousel>
    </>
  );
};

export default SliderCarousel;
