import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import LeftArrow from "../../components/LeftArrow";
import RightArrow from "../../components/RightArrow";
import PromoSlide from "../../components/PromoSlide";

const PromoScroller = () => {
  return (
    <Carousel
      show={2}
      slide={2}
      swiping={true}
      leftArrow={<LeftArrow />}
      rightArrow={<RightArrow />}
      infinite={false}
      responsive={true}
    >
      <PromoSlide />
      <PromoSlide />
      <PromoSlide />
      <PromoSlide />
      <PromoSlide />
      <PromoSlide />
    </Carousel>
  );
};

export default PromoScroller;
