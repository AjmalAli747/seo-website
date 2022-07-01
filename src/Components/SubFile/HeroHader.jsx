import React from 'react';
import Seobg from "../Images/seoBg.jpg";
import "../Css/Home.css";

const HeroHader = (props) => {
  return (
    <>
        <div className="section_container_box">
            <img src={Seobg} alt="seo img" />
            <h1>{props.text}</h1>
        </div>
    </>
  )
}

export default HeroHader