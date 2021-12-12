import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slide from "./Slide";

const SliderCarousel = ({ items }) => {
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
            <>
              <Slide
                id={slide.id}
                text={slide.sliderContent}
                bgColor={slide.sliderBackground}
                textColor={slide.sliderTextColor}
                key={slide.id}
              />
            </>
          );
        })}
      </Carousel>
    </>
  );
};

export default SliderCarousel;
