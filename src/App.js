import React, { useState, useEffect, useRef } from "react";
import "./scss/normalize.css";
import Banner from "./components/Banner";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import Teams from "./components/Teams";
import Faq from "./components/Faq";
import "./scss/reset.css";
import AboutNft from "./components/AboutNft";
import Contact from "./components/Contact";
import Collection from "./components/Collection";
import { gsap } from "gsap";
import { TimelineLite, Power4 } from "gsap/gsap-core";
import Marquee from "react-easy-marquee";
import Introduction from "./components/Introduction";
import Traits from "./components/Traits";
import Loader from "./components/Loader";
import { Parallax } from "react-parallax";
import bg from "../src/components/back.webp";
var Spinner = require("react-spinkit");

function App() {
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#fff");
  const containerRef = useRef(null);
  const tl = new gsap.timeline();
  let ease = Power4.easeOut();

  return (
    <div className="App">
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <main style={{ overflow: "hidden" }}>
            <Banner timeline={tl} ease={ease} />
            <Introduction />
            <Collection />
            <AboutNft />
            <Roadmap />
            <Traits />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
