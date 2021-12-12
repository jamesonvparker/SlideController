import "../styles.css";
import { useState, useEffect, useRef, useContext } from "react";
import SliderCarousel from "../components/SliderCarousel";
import { SlideContext } from "../Contexts/SlideContext";

export default function Create() {
  // const [sliderBoxText, setSliderBoxText] = useState("");
  // const [sliderBoxTextColor, setSliderBoxTextColor] = useState("#000000");
  // const [sliderBg, setSliderBg] = useState("#ffffff");
  // const sliderTextRef = useRef();
  // const sliderBox = useRef();
  // const textColorPicker = useRef();
  // const backgroundColorPicker = useRef();
  // const [slides, setSlides] = useState([]);

  const {
    sliderBoxText,
    setSliderBoxText,
    sliderBoxTextColor,
    setSliderBoxTextColor,
    sliderBg,
    setSliderBg,
    sliderTextRef,
    sliderBox,
    textColorPicker,
    backgroundColorPicker,
    slides,
    setSlides
  } = useContext(SlideContext);

  useEffect(() => {
    const sliderText = sliderTextRef.current;
    const colorPicker = textColorPicker.current;

    colorPicker.value = sliderBoxTextColor;
    sliderText.style.color = sliderBoxTextColor;
  }, [sliderBoxTextColor]);

  const handleSliderBoxInput = (event) => {
    setSliderBoxText(event.target.value);
  };

  useEffect(() => {
    const sliderBoxContainer = sliderBox.current;
    const colorPicker = backgroundColorPicker.current;

    colorPicker.value = sliderBg;
    sliderBoxContainer.style.background = sliderBg;
  }, [sliderBg]);

  const handleSliderBgColorPicker = (event) => {
    setSliderBg(event.target.value);
  };

  const handleSliderTextColorPicker = (event) => {
    setSliderBoxTextColor(event.target.value);
  };

  useEffect(() => {
    console.log(slides);
  }, [slides]);
  const handleSave = () => {
    let newSlide = [
      {
        id: sliderBoxText.split(" ").join(""),
        sliderContent: sliderBoxText,
        sliderBackground: sliderBg,
        sliderTextColor: sliderBoxTextColor
      }
    ];

    setSlides([...slides, ...newSlide]);
  };

  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <h1 className="title">Slide Creator</h1>
          <p className="subtitle">
            Concept for buiding and saving slider ads <strong>V1</strong>!
          </p>
          <div className="columns is-mobile">
            <div className="column has-text-left">
              SliderBox Text
              <input
                className="input mr-3"
                type="text"
                placeholder="Text input"
                onChange={handleSliderBoxInput}
              />
              <div className="is-inline mr-2">
                <input
                  type="color"
                  id="background"
                  name="background"
                  value={sliderBg}
                  onChange={handleSliderBgColorPicker}
                  ref={backgroundColorPicker}
                />
                <label htmlFor="head">Background</label>
              </div>
              <div className="is-inline">
                <input
                  type="color"
                  id="text-color"
                  name="text-color"
                  value={sliderBoxTextColor}
                  onChange={handleSliderTextColorPicker}
                  ref={textColorPicker}
                />
                <label htmlFor="text-color">Text</label>
              </div>
            </div>
            <div className="column">
              <div className="box slider-box is-flex" ref={sliderBox}>
                <div className="slider-box-text" ref={sliderTextRef}>
                  {sliderBoxText}
                </div>
              </div>
            </div>
          </div>
          <button className="button is-success is-rounded" onClick={handleSave}>
            Save
          </button>
        </div>

        <div className="columns is-mobile ">
          <div className="column has-text-left is-offset-2"></div>
          <div className="column has-text-left is-offset-4 is-4">
            <SliderCarousel items={slides} />
          </div>
        </div>
      </section>
    </div>
  );
}
