import React from "react";
import "../scss/introduction.scss";
import { TimelineLite, Power4 } from "gsap/gsap-core";
import Marquee from "react-easy-marquee";
import { Parallax } from "react-parallax";
import bg from "./back.webp";
const Introduction = () => {
  // write gsap scroll trigger animation code
  // const tl = new TimelineLite();
  // tl.from(".start", 1, {
  //   y: -100,
  //   ease: Power4.easeOut,
  //   delay: 0.5,
  //   opacity: 0,
  //   stagger: 0.5,
  //   onComplete: () => {
  //     console.log("done");
  //   }
  // });
  // gsap scroll trigger react code
  const [isVisible, setIsVisible] = React.useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const tl = new TimelineLite();

  //   tl.to(".start", 1, {
  //     x: -25,

  //     opacity: 1,

  //     scale: 1,
  //     duration: 1,
  //     ease: Power4.easeOut,
  //     scrollTrigger: {
  //       trigger: "middle",
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: true,
  //     },
  //   });

  return (
    <>
      <Parallax
        blur={0}
        bgImage={bg}
        bgStyle={{ filter: "brightness(0.5)" }}
        bgImageAlt="the cat"
        strength={200}
      >
        <div className="marq">
          <Marquee duration={400000} background="transparent" height="60px">
            <h1 style={{textTransform:'uppercase'}}>
              A collection of goddess-like divas with a variety of personalities
              and styles.
            </h1>

            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <h1 style={{textTransform:'uppercase'}}>
              Unexplored territory lies ahead...take the path less traveled
            </h1>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <h1 style={{textTransform:'uppercase'}}>The Divas of the World are Uniting</h1>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
          </Marquee>
        </div>
        <section className="intro">
          <img
            src="/images/-3.png"
            data-aos-offset="-300"
            data-aos="zoom-out-right"
            alt=""
            className="start"
          />
          <div className="middle">
            <h1 data-aos="zoom-out-up"> Diva4EVR!</h1>
            <p data-aos="zoom-out-up">
              Diva4EVR 10,000 NFTs are a series of female NFTs to bring
              attention to the importance and equality of women in society. The
              Diva4EVR NFT is designed to represent the strength and beauty of
              feminism, as well as its many struggles. They are set to
              revolutionize the future of NFTs and the female perspective.
              Diva4EVR is a collection of over 400+ mind-blowing traits and
              quality art. Our female NFTs are comfortable with all genders,
              relationships, and sexual orientations. This is a one-of-a-kind
              NFT collection that you won't be able to resist.
            </p>
          </div>
          <img
            src="/images/-2.png"
            data-aos-offset="-300"
            alt=""
            className="end"
            data-aos="zoom-out-left"
          />
        </section>
      </Parallax>
    </>
  );
};

export default Introduction;
