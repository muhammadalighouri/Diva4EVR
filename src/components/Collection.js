import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/collection.scss";
import Marquee from "react-easy-marquee";
import { collection2, collection3 } from "../assests/data";
const Collection = () => {
  return (
    <>
      <section className="collection">
        <div className="line">
          <span></span>
        </div>
      
     <section>
     <Marquee
          duration={100000}
          reverse={true}
          background="none"
          height="395px"
        >
          <div className="img__grid">
            {collection2.map((item, index) => {
              return (
                <div key={index} className="img__item">
                  <img src={item} alt="collection" />
                </div>
              );
            })}
          </div>
        </Marquee>
     </section>
       
      </section>
    </>
  );
};

export default Collection;
