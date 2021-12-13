import React from "react";
// import Listing from "../Pages/Listing";

function ImageHero({ listing, title, subtitle, fontColor }) {
  // console.log(listing);
  return (
    <section
      className="hero is-medium is-link landing-image"
      style={{
        backgroundImage: `url(${listing?.headerImgUrl})`,
        color: listing?.headerFontColor || fontColor
      }}
    >
      <div className="hero-body">
        <p className="title is-1">{listing?.name || title}</p>
        <p className="subtitle is-2">{listing?.address || subtitle}</p>
      </div>
    </section>
  );
}

export default ImageHero;
