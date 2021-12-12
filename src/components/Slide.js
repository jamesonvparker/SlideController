import "../styles.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Slide({ text, bgColor, textColor, id }) {
  const sliderTextRef = useRef();
  const sliderBox = useRef();

  console.log("id", id);

  return (
    <Link to={"/slide/" + id} key={id}>
      <div
        className="box slider-box is-flex m-3"
        style={{ backgroundColor: bgColor }}
        ref={sliderBox}
      >
        <div
          className="slider-box-text"
          style={{ color: textColor }}
          ref={sliderTextRef}
        >
          {text}
        </div>
      </div>
    </Link>
  );
}
