import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/banner.scss";
import "../scss/glitch.scss";
import {
  BannerImages,
  collection,
  collection2,
  collection3,
  collection4,
  links,
} from "../assests/data";
import AboutNft from "./AboutNft";
import Navigation from "./Navigation";
import Marquee from "react-easy-marquee";

import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { CgChevronDoubleDown } from "react-icons/cg";
import gsap from "gsap";
import { Power4, Back, Expo } from "gsap";

import { Timeline } from "gsap/gsap-core";

const Banner = ({ timeline, ease }) => {
  const [img, setimg] = useState("/images/nft/1-.png");
  useEffect(() => {
    AOS.init({});
  }, []);

  const randomNumber = () => {
    setTimeout(() => {
      let random = Math.floor(Math.random() * 20) + 0;
      setimg(BannerImages[random]);
      randomNumber();
    }, 1000);
  };
  useEffect(() => {
    randomNumber();
  }, []);
  useEffect(() => {
    timeline.from(".topBack", 1, {
      opacity: 1,

      scale: 2,

      ease: Expo.easeOut,
   
      stagger: {
        amount: 0.4,
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <Navigation timeline={timeline} ease={ease} />
      <section className="banner">
        {/* <img className="topBack" src="/images/banner.png" alt="" /> */}
        <div className="glitch topBack" >
          <div className="glitch__item"></div>
          <div className="glitch__item"></div>
          <div className="glitch__item"></div>
          <div className="glitch__item"></div>
          <div className="glitch__item"></div>
        </div>
        <div className="bottom__arrow">
          <div className="bottom__container">
            <CgChevronDoubleDown />
          </div>
        </div>
       
      </section>
    </>
  );
};

export default Banner;
