import React from "react";
import { useNavigate } from "react-router-dom";

const PromoSlide = ({ title, subtitle, ctaText, ctaUrl }) => {
  const navigate = useNavigate();

  return (
    <div className="box promo-slide">
      <div className="columns is-mobile">
        <div className="column">
          <h1 className="title">{title || "Promo Title"}</h1>
          <h2 className="subtitle">{subtitle || "Promo subTitle"}</h2>
          <button
            className="button is-link is-rounded has-text-weight-bold is-medium"
            onClick={() => navigate(ctaUrl || "/")}
          >
            {ctaText || "Call To Action"}
          </button>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
};

export default PromoSlide;
