import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slide from "./Slide";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const SliderCarousel = ({ items }) => {
  const [slides, setSlides] = useState([]);
  const slidesCollectionRef = collection(db, "slides");

  useEffect(() => {
    const getSlides = async () => {
      const data = await getDocs(slidesCollectionRef);
      setSlides(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getSlides();
  }, []);

  return (
    <>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        swipable={true}
        // emulateTouch={true}
      >
        {slides.map((slide) => {
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
