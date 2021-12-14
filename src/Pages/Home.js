import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import { ListingContext } from "../Contexts/ListingContext";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import ImageHero from "../components/ImageHero";
import ListingScroller from "../components/scrollers/ListingScroller";
import PromoScroller from "../components/scrollers/PromoScroller";
import PillScroller from "../components/scrollers/PillScroller";

function Home() {
  const { showProfile, setUsername, setShowProfile, username } = useContext(
    LoginContext
  );
  const { listings, setListings } = useContext(ListingContext);

  // const [listings, setListings] = useState([]);

  // const listingsCollectionRef = collection(db, "listings");

  // useEffect(() => {
  //   const getListings = async () => {
  //     const data = await getDocs(listingsCollectionRef);
  //     setListings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getListings();
  // }, []);

  useEffect(() => {
    setListings(listings);
    console.log("listings updated to", listings);
  }, []);

  return (
    <section className="section is-paddingless">
      <h1 className="title">Hi {username}</h1>
      <h2 className="subtitle">Select an offer to claim</h2>
      <div>
        {/* <PillScroller /> */}
        <ImageHero
          imgSrc={"placeholder"}
          title={"Home Page"}
          subtitle={"Directory"}
          fontColor={"#ffffff"}
        />
        {/* <SliderCarousel items={slides} /> */}

        <PromoScroller />
        {/* Add Items with a general filter to the first listing. So, no filter for this first one */}
        <ListingScroller
          listings={listings}
          label={"All Listings"}
          filter={false}
        />
        {/* <ListingScroller listings={listings} label={"Automotive"} /> */}
        <ListingScroller listings={listings} label={"Health"} />
        <ListingScroller listings={listings} label={"Creative"} />
      </div>
    </section>
  );
}

export default Home;
