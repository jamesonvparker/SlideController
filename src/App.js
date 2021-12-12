import "./styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { useState, useRef } from "react";
import { LoginContext } from "./Contexts/LoginContext";
import { SlideContext } from "./Contexts/SlideContext";
import Footer from "./components/Footer";
import Create from "./Pages/Create";
import SlideDetail from "./Pages/SlideDetail";

export default function App() {
  const [username, setUsername] = useState(
    localStorage.getItem("name") || void 0
  );
  const [showProfile, setShowProfile] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const [sliderBoxText, setSliderBoxText] = useState("");
  const [sliderBoxTextColor, setSliderBoxTextColor] = useState("#000000");
  const [sliderBg, setSliderBg] = useState("#ffffff");
  const sliderTextRef = useRef();
  const sliderBox = useRef();
  const textColorPicker = useRef();
  const backgroundColorPicker = useRef();
  const [slides, setSlides] = useState([]);

  return (
    <LoginContext.Provider
      value={{
        username,
        setUsername,
        showProfile,
        setShowProfile,
        showHome,
        setShowHome
      }}
    >
      <SlideContext.Provider
        value={{
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
        }}
      >
        <Router>
          <div className="columns is-mobile is-flex-direction-column is-fullheight-100vh is-marginless">
            <header className="column is-narrow">
              <Navbar />
            </header>
            <div className="column is-paddingless">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/:username" element={<Profile />} />
                <Route path="/create" element={<Create />} />
                <Route path="/slide/:id" element={<SlideDetail />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
            <footer className="column is-narrow is-paddingless">
              <Footer />
            </footer>
          </div>
        </Router>
      </SlideContext.Provider>
    </LoginContext.Provider>
  );
}
