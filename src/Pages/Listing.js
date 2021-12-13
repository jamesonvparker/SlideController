import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import SliderCarousel from "../components/SliderCarousel";
import { SlideContext } from "../Contexts/SlideContext";
import ImageHero from "../components/ImageHero";
import { useParams } from "react-router-dom";

import { db } from "../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  getDoc
} from "firebase/firestore";

function Listing() {
  const [listing, setListing] = useState([]);
  const { showProfile, setUsername, setShowProfile, username } = useContext(
    LoginContext
  );
  const { slides } = useContext(SlideContext);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const getListing = async () => {
      const docRef = doc(db, "listings", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log(docSnap.data());
        setListing({ ...docSnap.data(), id: id });
      } else {
        console.log("No such document");
      }
    };

    getListing();
  }, []);

  return (
    <section className="section is-paddingless">
      <h1 className="title">Hi {username}</h1>
      <h2 className="subtitle">This is a Listing for ID: {listing.name}</h2>
      <ImageHero imgSrc={"placeholder"} listing={listing} />
      <SliderCarousel items={slides} />

      <h1 className="title ">Deal of the day</h1>
      {/* <SliderCarousel items={slides} />
      <SliderCarousel items={slides} /> */}
    </section>
  );
}

export default Listing;
