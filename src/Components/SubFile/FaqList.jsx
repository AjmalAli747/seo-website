import React from 'react'
import "../Css/Home.css";
import HomeImgTow from "../Images/home_imge_two.png";

const FaqList = () => {
  return (
    <section>
    <div className="Our_about">
      <div className="out_container">
        <div className="out_col">
          <img src={HomeImgTow} alt="HomeImgTow" />
        </div>
        <div className="out_col">
          <div className="text">
            <h2>FAQ</h2>
            <h1 style={{ textAlign: "left" }}>
              Most Popular Frequent Questions
            </h1>
            <p className="out_text">
              We x-ray your website using advanced SEO, Web designing in a
              powerful way of just not an only professions, how in a passion
              for our company. We have tendency to believe
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FaqList