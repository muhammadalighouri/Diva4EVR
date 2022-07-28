import React, { useEffect, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/roadmap.scss";
import { roadmap } from "../assests/data";
import Navigation from "./Navigation";

const Roadmap = () => {
  return (
    <>
      <section id="roadmap" className="roadmap">
        <div className="heading">
          <h2
            data-aos="zoom-out-up"
            data-aos-delay="300"
            data-aos-easing="ease-out"
          >
            Roadmap
          </h2>
        </div>
        <div className="container">
          <div className="grid">
            {roadmap.map((item, ind) => {
              return (
                <div className="item">
                  <span>{item.id}</span>
                  <h2 data-aos="fade-left">{item.name}</h2>
                  <p data-aos="fade-left">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
