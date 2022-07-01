import React, { useState } from "react";
import "../Css/Home.css"
import HeroHader from "../SubFile/HeroHader";
import One from "../Images/protofolioOne.jpg";
import Two from "../Images/protofolioTwo.jpg";
import Three from "../Images/protofolioThree.jpg";
import Four from "../Images/protofolioFour.jpg";
import Five from "../Images/protofolioFive.jpg";
import Six from "../Images/protofolioSix.jpg";
import Seven from "../Images/protofolioSeven.jpg";
import Eight from "../Images/protofolioEight.jpg";
import Footer from "../SubFile/Footer";

const arrayOfObj = [
  {
    id: 0,
    icone: "fa-brands fa-youtube",
    title: "Demo Media Title 1",
    breand: "Branding Marketing",
    imgLink: One,
  },

  {
    id: 1,
    icone: "fa-brands fa-youtube",
    title: "Demo Media Title 2",
    breand: "Marketing SEO",
    imgLink: Two,
  },

  {
    id: 2,
    icone: "fa-brands fa-youtube",
    title: "Demo Media Title 3",
    breand: "Web",
    imgLink: Three,
  },

  {
    id: 3,
    icone: "fa-brands fa-youtube",
    title: "Demo Media Title 4",
    breand: "Branding Web",
    imgLink: Four,
  },

  {
    id: 4,
    icone: "fa-brands fa-youtube",
    title: "Demo Media Title 5",
    breand: "Marketing SEO",
    imgLink: Five,
  },

  {
    id: 5,
    icone: "fa-brands fa-youtube",
    title: "Demo Media Title 6",
    breand: "Marketing SEO",
    imgLink: Six,
  },

  {
    id: 6,
    icone: "fa-brands fa-youtube",
    title: "Demo Media Title 7",
    breand: "Marketing",
    imgLink: Seven,
  },

  {
    id: 7,
    icone: "fa-brands fa-youtube",
    title: "Demo Media Title 8",
    breand: "Branding Web",
    imgLink: Eight,
  },
];

const Portfolio = () => {

  return (
    <>
      <HeroHader text="Portfolio" />
      <div className="section_protofolio">
          {arrayOfObj.map((element) => (
        <div key={element.id} className="section_protofolio_row">
              <img src={element.imgLink} alt="" />
              <div className="proptofolio_section">
              <i className={element.icone}></i>
              <h1>{element.title}</h1>
              <p>{element.breand}</p>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
