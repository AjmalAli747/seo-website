import React from 'react'
import companyOne from "../Images/companyOne.png";
import companyTow from "../Images/companyTow.png";
import companyThree from "../Images/companyThree.png";
import companyFour from "../Images/companyFour.png";
import companyFive from "../Images/companyFive.png";
import companySix from "../Images/companySix.png";
import Button from "../SubFile/Button";

const OurService = () => {
  return (
    <section>
    <div className="home_heading">
      <p className="features">Our Service</p>
      <h1>Introduce Best SEO Services</h1>
      <p>
        We know how important customer experience is fora busines and
        therefore, we trive to make your company excel in this. Awesome
        Image
      </p>
    </div>
    <div className="card_section">
      <div className="card_col">
        <img src={companyOne} alt="Coustomar_img" />
        <h1>Company Products</h1>
        <p>We have worked with Fortune 500 startups help yours</p>
        <Button button="Read More" />
      </div>
      <div className="card_col">
        <img src={companyTow} alt="Coustomar_img" />
        <h1>SEO Optimization</h1>
        <p>We have worked with Fortune 500 startups help yours</p>
        <Button button="Read More" />
      </div>
      <div className="card_col">
        <img src={companyThree} alt="Coustomar_img" />
        <h1>Business Strategy</h1>
        <p>We have worked with Fortune 500 startups help yours</p>
        <Button button="Read More" />
      </div>
    </div>
    <div className="card_section">
      <div className="card_col">
        <img src={companyFour} alt="Coustomar_img" />
        <h1>Social Media Strategy</h1>
        <p>We have worked with Fortune 500 startups help yours</p>
        <Button button="Read More" />
      </div>
      <div className="card_col">
        <img src={companyFive} alt="Coustomar_img" />
        <h1>Web Development</h1>
        <p>We have worked with Fortune 500 startups help yours</p>
        <Button button="Read More" />
      </div>
      <div className="card_col">
        <img src={companySix} alt="Coustomar_img" />
        <h1>Company products</h1>
        <p>We have worked with Fortune 500 startups help yours</p>
        <Button button="Read More" />
      </div>
    </div>
  </section>
  )
}

export default OurService