import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { nav, links } from "../assests/data";
import "../scss/navigation.scss";
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaRedditAlien } from "react-icons/fa";
const Navigation = ({ timeline, ease }) => {
  const [navToggler, setNavToggler] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [height, setheight] = useState(null);
  const [stikerNav, setStikerNav] = useState(false);
  function mobilenav() {
    if (window.innerWidth > 991) {
      return "greater";
    }
  }
  mobilenav();

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    if (window.scrollY >= 70) {
      setNavColor(true);
    } else {
      setNavColor(false);
      setNavToggler(false);
    }
  });

  function barBtn() {
    setNavToggler(!navToggler);
    setNavColor(!navColor);
  }
  const logo = useRef(null);
  const ul = useRef(null);

  useEffect(() => {
    timeline.from(".lili", 1, {
      opacity: 0,
      y: -10,
      skewY: 10,
      delay: 1,
      stagger: {
        amount: 0.4,
      },
    });
  }, []);

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY >= 70) {
        setStikerNav(true);
      } else {
        setStikerNav(false);
      }
    },
    []
  );

  return (
    <>
      <header className={navToggler ? "nav__active" : ""}>
        <div className="outer">
          <div className="container">
            <div className="nav__grid">
              <div className="logo">
                <img src="/images/logo.png" alt="" />
              </div>
              <nav style={{ right: navToggler ? 0 : "-100%" }}>
                <ul>
                  {nav.map((ite, ind) => {
                    return (
                      <li key={ind}>
                        <a href={ite.path}>{ite.name}</a>
                      </li>
                    );
                  })}
                  <li className="links">
                    {" "}
                    {links.map((item, ind) => {
                      return (
                        <a
                          href={item.link}
                          key={ind}
                          target={"_blank"}
                          className={item.name}
                        >
                         {item.svg}
                        </a>
                      );
                    })}
                  </li>

                </ul>
              </nav>
              <div className="nav__btns">
                <a href="#" target="_blank">
                  <div className="btn">Opensea!</div>
                </a>
                <div onClick={() => barBtn()}>
                  <span
                    style={{
                      transform: navToggler
                        ? "translateY(15px) rotate(45deg)"
                        : "unset",
                    }}
                  ></span>
                  <span
                    style={{
                      display: navToggler ? "none " : "unset",
                    }}
                  ></span>
                  <span
                    style={{
                      transform: navToggler
                        ? "translateY(-6px) rotate(-45deg) "
                        : "unset",
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        onClick={() => window.scroll(0, 0)}
        className="auto_scroll"
        style={scroll ? { transform: "scale(1)" } : {}}
      >
        <i className="fa fa-chevron-up"></i>
      </div>
      <div className="icons">
        {links.map((item, ind) => {
          return (
            <a
              href={item.link}
              key={ind}
              target={"_blank"}
              className={item.name}
            >
              <img src={item.src} alt="" />
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Navigation;
