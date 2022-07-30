import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/aboutnft.scss";

import { BannerImages } from "../assests/data";
const AboutNft = () => {
  const [img, setimg] = useState("/images/nft/1-.png");
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
    });
  }, []);

  //write a function to generate random number in 1 second with out repeating the same number
  const randomNumber = () => {
    let random = Math.floor(Math.random() * BannerImages.length);
    setimg(BannerImages[random]);
  };
  useEffect(() => {
    setInterval(randomNumber, 1000);
  }, []);
  // write a function to generate random number

  return (
    <>
      <section id="about" className="about cyber">
        <div className="container">
          <img src="/images/elements/cyber1.png" className="avatar" alt="" />
          <img src="/images/elements/cyber2.png" className="avatar" alt="" />
          <img src="/images/elements/cyber3.png" className="avatar" alt="" />
          <div className="about__grid">
            <div
              className="img"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-easing="ease-out"
            >
              <img src={"/images/nft/Cyber/Cyber.gif"} alt="" />
            </div>
            <div className="details">
              <div>
                <h2 data-aos="fade-left">Cyber</h2>
              </div>
              <p data-aos="fade-left" data-aos-delay="300">
                The future is female. In this 4000 Cyber theme NFTs, we have
                created a metamorphosis of beautiful women with futuristic
                features and an otherworldly appearance to give our artwork the
                ultimate edge. The reimagining of beauty starts with an
                evolution of the face. From the cyber-world of tomorrow, these
                geometric beauty queens are ready to take on your daily grind.
              </p>
              <a
                data-aos="fade-up"
                data-aos-delay="300"
                style={{ display: "inline-block" }}
                href=" https://twitter.com/MetaElves_NFT?t=bh8jlLxN07OYoGjtiZrUug&s=09"
                target={"_blank"}
              >
                <button>Buy On Opensea!</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about sec gothic">
        <div className="container">
          <img src="/images/elements/gothic1.png" className="avatar" alt="" />
          <img src="/images/elements/gothic2.png" className="avatar" alt="" />
          <img src="/images/elements/gothic3.png" className="avatar" alt="" />
          <div className="about__grid even">
            <div
              className="img"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-easing="ease-out"
            >
              <img src={"/images/nft/Gothic/Gothic.gif"} alt="" />
            </div>
            <div className="details">
              <div>
                <h2 data-aos="fade-right">Gothic</h2>
              </div>
              <p data-aos="fade-right" data-aos-delay="300">
                The allure of darkness reigns supreme in our 500 Gothic theme
                NFTs. Dark and mysterious, these gothic women exude elegance
                that’s hard to ignore. These women have faced their demons, and
                you’ll feel stronger for it. The black, white, and red of this
                collection are inspired by the color schemes of classic gothic
                architecture (think spires and gargoyles). The beauty of the
                dark is timeless.
              </p>
              <a
                data-aos="fade-right"
                data-aos-delay="300"
                style={{ display: "inline-block" }}
                href=" https://twitter.com/MetaElves_NFT?t=bh8jlLxN07OYoGjtiZrUug&s=09"
                target={"_blank"}
              >
                <button>Buy On Opensea!</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about pirate">
        <div className="container">
          <img src="/images/elements/pirate1.png" className="avatar" alt="" />
          <img src="/images/elements/pirate2.png" className="avatar" alt="" />
          <img src="/images/elements/pirate3.png" className="avatar" alt="" />
          <div className="about__grid">
            <div
              className="img"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-easing="ease-out"
            >
              <img src={"/images/nft/Pirate/Pirate.gif"} alt="" />
            </div>
            <div className="details">
              <div>
                <h2 data-aos="fade-left">Pirate</h2>
              </div>
              <p data-aos="fade-left" data-aos-delay="300">
                Yarr! Aboard the Diva-Naut. These women in the form of 2000
                Pirate theme NFTs are tough and fierce. They survive storms, get
                in fights and make it through without a scratch. They’re the
                ladies that don’t need to be saved, they do it themselves. Born
                to be bad, raised by wolves. We've got a reputation to uphold on
                the high seas. Every woman's a pirate. (That includes you.)
              </p>
              <a
                data-aos="fade-left"
                data-aos-delay="300"
                style={{ display: "inline-block" }}
                href=" https://twitter.com/MetaElves_NFT?t=bh8jlLxN07OYoGjtiZrUug&s=09"
                target={"_blank"}
              >
                <button>Buy On Opensea!</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about sec viking ">
        <div className="container">
          <img src="/images/elements/viking1.png" className="avatar" alt="" />
          <img src="/images/elements/viking2.png" className="avatar" alt="" />
          <img src="/images/elements/viking3.png" className="avatar" alt="" />
          <div className="about__grid even">
            <div
              className="img"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-easing="ease-out"
            >
              <img src={"/images/nft/Viking/Viking.gif"} alt="" />
            </div>
            <div className="details">
              <div>
                <h2 data-aos="fade-right">Viking</h2>
              </div>
              <p data-aos="fade-right" data-aos-delay="300">
                Vikings were known for their strength, bravery and courage.
                These gorgeous 500 Viking theme NFTs women embody all the
                qualities of a true Viking warrior! Be proud of your
                imperfections. Be proud to be you, with your glorious scars and
                battle wounds. These badass women wear leather boots and
                weaponry without apology. You can too!
              </p>
              <a
                data-aos="fade-right"
                data-aos-delay="300"
                style={{ display: "inline-block" }}
                href=" https://twitter.com/MetaElves_NFT?t=bh8jlLxN07OYoGjtiZrUug&s=09"
                target={"_blank"}
              >
                <button>Buy On Opensea!</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about witch">
        <div className="container">
          <img src="/images/elements/witch1.png" className="avatar" alt="" />
          <img src="/images/elements/witch2.png" className="avatar" alt="" />
          <img src="/images/elements/witch3.png" className="avatar" alt="" />
          <div className="about__grid">
            <div
              className="img"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-easing="ease-out"
            >
              <img src={"/images/nft/Witch/Witch.gif"} alt="" />
            </div>
            <div className="details">
              <div>
                <h2 data-aos="fade-left">Witch</h2>
              </div>
              <p data-aos="fade-left" data-aos-delay="300">
                Glow, bewitch and delight with our 1000 Witch theme NFTs
                cosmetics, inspired by the power of women. We all know that
                witches are the bad girls of witchcraft. The real ones. They're
                mean, they're sexy and they always have something up their
                sleeves. Every hair of theirs is a magic spell. Every eye, a
                little fierceness. Every curve is a weapon in the hand. Every
                dress, a mile away from home.
              </p>
              <a
                data-aos="fade-left"
                data-aos-delay="300"
                style={{ display: "inline-block" }}
                href=" https://twitter.com/MetaElves_NFT?t=bh8jlLxN07OYoGjtiZrUug&s=09"
                target={"_blank"}
              >
                <button>Buy On Opensea!</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about sec greek">
        <div className="container">
          <img src="/images/elements/greece1.png" className="avatar" alt="" />
          <img src="/images/elements/greece2.png" className="avatar" alt="" />
          <img src="/images/elements/greece3.png" className="avatar" alt="" />
          <div className="about__grid even">
            <div
              className="img"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-easing="ease-out"
            >
              <img src={"/images/nft/Greek/Greek.gif"} alt="" />
            </div>
            <div className="details">
              <div>
                <h2 data-aos="fade-right">Greek</h2>
              </div>
              <p data-aos="fade-right" data-aos-delay="300">
                Indulge yourself in the beauty of 2000 Greek theme NFTs. They
                are hypnotic and possess features that will please you in every
                way. In order for beauty to last, it must be timeless and
                eternal. The more you stare, the more they seem to come alive.
                Hypnotic eyes, seductive lips and alluring curves are what make
                this Greek collection of beautiful women so attractive.
              </p>
              <a
                data-aos="fade-right"
                data-aos-delay="300"
                style={{ display: "inline-block" }}
                href=" https://twitter.com/MetaElves_NFT?t=bh8jlLxN07OYoGjtiZrUug&s=09"
                target={"_blank"}
              >
                <button>Buy On Opensea!</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutNft;
