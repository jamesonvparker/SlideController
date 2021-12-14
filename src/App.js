import "./styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { useState, useRef, useEffect, useMemo } from "react";
import { LoginContext } from "./Contexts/LoginContext";
import { SlideContext } from "./Contexts/SlideContext";
import { ListingContext } from "./Contexts/ListingContext";
import Footer from "./components/Footer";
import Create from "./Pages/Create";
import SlideDetail from "./Pages/SlideDetail";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

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
  const [listings, setListings] = useState([]);
  const slidesCollectionRef = collection(db, "slides");
  const listingsCollectionRef = collection(db, "listings");

  useEffect(() => {
    const getSlides = async () => {
      const data = await getDocs(slidesCollectionRef);
      setSlides(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getSlides();
  }, []);

  useEffect(() => {
    const getListings = async () => {
      const data = await getDocs(listingsCollectionRef);
      let n = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      // let m = {...n}
      // setListings(n);
      return n;
    };

    getListings().then((res) => setListings(res));
  }, []);

  useEffect(() => {
    console.log(typeof listings);
    console.log("listings updated to", listings);
  }, [listings]);

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
        <ListingContext.Provider
          value={{ listings, setListings: (listings) => setListings(listings) }}
        >
          <Router>
            <div className="columns is-mobile is-flex-direction-column is-fullheight-100vh is-marginless">
              <header className="column is-narrow">
                <Navbar />
              </header>
              <div className="column is-paddingless">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/listing/:id" element={<Listing />} />
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
        </ListingContext.Provider>
      </SlideContext.Provider>
    </LoginContext.Provider>
  );
}
