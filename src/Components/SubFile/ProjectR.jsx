import React from 'react'
import "../Css/Home.css";
import Button from "../SubFile/Button";
import HomeImgTow from "../Images/home_imge_two.png";
import HomePageThree from "../Images/home_imge_three.png";
import SeoHome from "../Images/seo_Home_img.png";

const ProjectR = () => {
  return (
    <section>
    <div className="home_heading">
      <p className="features">Recent Project</p>
      <h1>Our Latest Case Studies</h1>
    </div>
    <div className="card_section">
      <div className="card_col">
        <img className="projectImg" src={HomePageThree} alt="Coustomar_img" />
        <h1>Business Analysis</h1>
        <p>We help you define your SEO objective & develop a strategy with you we analyse</p>
        <Button button="Read More" />
      </div>
      <div className="card_col">
        <img className="projectImg" src={HomeImgTow} alt="Coustomar_img" />
        <h1>Our Security</h1>
        <p>We help you define your SEO objective & develop a strategy with you we analyse</p>
        <Button button="Read More" />
      </div>
      <div className="card_col">
        <img className="projectImg" src={SeoHome} alt="Coustomar_img" />
        <h1>24/7 Support</h1>
        <p>We help you define your SEO objective & develop a strategy with you we analyse</p>
        <Button button="Read More" />
      </div>
    </div>
  </section>
  )
}

export default ProjectR