import React, { useContext, useEffect, useState, useRef } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import { SlideContext } from "../Contexts/SlideContext";
import { useParams } from "react-router-dom";

import { db } from "../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  getDoc
} from "firebase/firestore";

function SlideDetail() {
  const [slides, setSlides] = useState([]);
  const [slide, setSlide] = useState([]);
  const slidesCollectionRef = collection(db, "slides");
  const updateSlideInputRef = useRef();
  const [updateText, setUpdateText] = useState("");

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getSlide = async () => {
      const docRef = doc(db, "slides", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log(docSnap.data());
        setSlide({ ...docSnap.data(), id: id });
      } else {
        console.log("No such document");
      }
    };

    getSlide();
  }, []);

  const updateSlide = async (id) => {
    const slideDoc = doc(db, "slides", id);
    const newFields = { text: updateText };
    await updateDoc(slideDoc, newFields);
  };

  const handleUpdateInput = (event) => {
    setUpdateText(event.target.value);
  };
  // let data = slides.find((x) => x.id === id);

  // console.log(data);

  return (
    <section className="hero is-primary">
      <div className="hero-body">
        {/* <p className="title">Welcome to the Slide Detail page, {username}</p> */}
        <p className="subtitle">Detials for the Slide you clicked on:</p>
        <input
          placeholder="change text"
          ref={updateSlideInputRef}
          onChange={handleUpdateInput}
        />
        <button onClick={() => updateSlide(id)}>Update Text</button>
        <p>Slide ID: {slide.id}</p>
        <p>Slide Content: {slide.text}</p>
        <p>Slide Background Color: {slide.bgColor}</p>
        <p>Slide Text Color: {slide.textColor}</p>
      </div>
      <div className="container"></div>
    </section>
  );
}

export default SlideDetail;
