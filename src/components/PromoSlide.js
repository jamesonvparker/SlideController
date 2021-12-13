import React from "react";

const PromoSlide = () => {
  return (
    <div className="box promo-slide">
      <div className="colummns is-mobile">
        <div className="column">
          <h1 className="title">Promo Title</h1>
          <h2 className="subtitle">Promo subTitle</h2>
          <button class="button is-link is-rounded has-text-weight-bold is-medium">
            Call To Action
          </button>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
};

export default PromoSlide;
