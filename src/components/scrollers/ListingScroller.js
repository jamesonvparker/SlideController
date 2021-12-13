import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import LeftArrow from "../../components/LeftArrow";
import RightArrow from "../../components/RightArrow";
import Card from "../../components/Card";

const ListingScroller = () => {
  return (
    <>
      <h1 className="title carousel-label ml-4 mt-4">Listing Section Label</h1>

      <Carousel
        show={3}
        slide={2}
        swiping={true}
        leftArrow={<LeftArrow />}
        rightArrow={<RightArrow />}
        responsive={true}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </>
  );
};

export default ListingScroller;
