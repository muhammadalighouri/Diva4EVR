import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../scss/faq.scss";
import { FAQ } from "../assests/data";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Faq = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section id="faq" className="accordian">
        <div className="cloud"></div>
        <div className="container">
          <div className="heading">
            <h1
              data-aos-delay="300"
              data-aos-easing="ease-out"
              data-aos="fade-up"
            >
              FAQS
            </h1>
          </div>
          <div className="accordian__grid" data-aos-easing='ease-out' data-aos='fade-up' data-aos-delay='300'>
            <div className="end">
              <div className={classes.root} 
              // data-aos='fade-left' data-aos-delay='300' data-aos-easing='ease-out'
              >
                {FAQ.map((item, i) => {
                  return (
                    <Accordion key={i}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        
                      >
                        <Typography className={classes.heading}>
                          {item.q}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <ul>
                            {item.ans.map((ite, i) => {
                              return <li key={i}>{ite}</li>;
                            })}
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
