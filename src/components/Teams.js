import React from "react";

import "aos/dist/aos.css";
import "../scss/team.scss";
import { team } from "../assests/data";
import { InsertEmoticon } from "@material-ui/icons";
// import { AiOutlineTwitter } from "react-icons/ai";

const Teams = () => {
  return (
    <>
      <section id="team" className="team">
        <div className="container">
          <div className="heading">
            <h1 data-aos-delay="300" data-aos-easing="ease-out" data-aos="fade">
              THE TEAM
            </h1>
          </div>
          <div className="team__grid">
            {team.map((ite, ind) => {
              return (
                <a
                  key={ind}
                  data-aos="fade-right"
                  data-aos-delay={150 * ind}
                  data-aos-easing="ease-out"
                >
                  <div key={ind} className="item">
                    <div className="inner">
                      <div className={`img ${ite.name.substring(0, 3)}`}>
                        <img src={ite.path} alt="" />
                      </div>
                      <div className="detail">
                        <h2 className="name">
                          {ite.name == "ToneQ" ? (
                            <>
                              <span
                                style={{
                                  fontWeight: "bold",
                                  color: "#201e1e",
                                  fontFamily: "'Montserrat'",
                                  fontSize: "39px",
                                }}
                              >
                                2
                              </span>{" "}
                              ToneQ
                            </>
                          ) : (
                            ite.name
                          )}
                        </h2>
                        <h4>{ite.position}</h4>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
