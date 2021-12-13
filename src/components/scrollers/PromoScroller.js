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
      <PromoSlide
        title={"Visit JP's"}
        subtitle={"We have limited time offers"}
        ctaText={"Visit Store"}
        ctaUrl={"/listing/2QFCfcO2q8avjGjjx4rh"}
      />
      <PromoSlide />
      <PromoSlide />
      <PromoSlide />
    </Carousel>
  );
};

export default PromoScroller;
