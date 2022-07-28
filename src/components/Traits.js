import React from "react";
import "../scss/traits.scss";
const Traits = () => {
  const traitData = [
    {
      trait: "Background",
      number: "51",
    },
    {
      trait: " Back hair",
      number: "21 ",
    },
    {
      trait: " Body",
      number: "17 ",
    },
    {
      trait: "Wear ",
      number: " 56",
    },
    {
      trait: " Head Ear",
      number: "13 ",
    },
    {
      trait: " Accessories ",
      number: "49 ",
    },
    {
      trait: "Eyes ",
      number: "51 ",
    },
    {
      trait: "Lip ",
      number: "42 ",
    },
    {
      trait: "Nose ",
      number: "30 ",
    },
    {
      trait: "Hair  ",
      number: "54 ",
    },
  ];
  return (
    <section className="trait" id="trait">
      <div className="heading">
        <h2 data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-out">
          Traits
        </h2>
      </div>
      <div className="container">
        <div className="grid">
          <div className="start">
            <img src="/images/-1.png" alt="" />
          </div>
          <div className="end">
            <div className="traits__grid">
              {traitData.map((item, ind) => {
                return (
                  <div className="item">
                    <h2>{item.trait}</h2>
                    <span>{item.number}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traits;
