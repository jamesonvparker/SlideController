import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import LeftArrow from "../../components/LeftArrow";
import RightArrow from "../../components/RightArrow";
import CategoryPill from "../../components/CategoryPill";

const PillScroller = () => {
  return (
    <Carousel
      show={9}
      slide={2}
      swiping={true}
      leftArrow={<LeftArrow />}
      rightArrow={<RightArrow />}
      responsive={true}
    >
      <CategoryPill value={"Groceries"} />
      <CategoryPill />
      <CategoryPill />
      <CategoryPill />
      <CategoryPill />
      <CategoryPill />
      <CategoryPill />
      <CategoryPill />
      <CategoryPill />
      <CategoryPill />
      <CategoryPill />
      <CategoryPill />
    </Carousel>
  );
};

export default PillScroller;
