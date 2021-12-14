import React, { useState, useEffect, useContext } from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import LeftArrow from "../../components/LeftArrow";
import RightArrow from "../../components/RightArrow";
import { ListingContext } from "../../Contexts/ListingContext";
import Card from "../../components/Card";

const ListingScroller = ({ label, filter = true }) => {
  const { listings } = useContext(ListingContext);
  // const [data, setData] = useState(listings);

  const items = filter
    ? listings.filter((listing) => listing.category === label)
    : listings;

  return (
    <div>
      <h1 className="title carousel-label ml-4 mt-4">{label}</h1>

      <Carousel
        show={3}
        slide={2}
        swiping={true}
        leftArrow={<LeftArrow />}
        rightArrow={<RightArrow />}
        responsive={true}
      >
        {items.map((item) => {
          console.log("item rendered", item);
          return <Card key={item.id} listing={item} />;
        })}
      </Carousel>
    </div>
  );
};

export default ListingScroller;
