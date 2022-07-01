import React from 'react'
import Button from "../SubFile/Button";
import "../Css/Home.css";
import companyOne from "../Images/companyOne.png";
import companyTow from "../Images/companyTow.png";
import companySix from "../Images/companySix.png";

const PricingList = () => {
  return (
    <section>
    <div className="home_heading">
      <p className="features">Our Pricing</p>
      <h1>Flexible Pricing Plans</h1>
      <p>
        We’re sure you already know that SEO (search engine optimization, if
        we’re being formal) has become a vital part of digital marketing.
        But small businesses often end up neglecting it—and only half of
        them factor it into their budget at all.
      </p>
    </div>
    <div className="pricing_list">
      <div className="pricing_card">
        <Button button="Standard" />
        <div className="imgSection">
          <img src={companyOne} alt="" />
        </div>
        <div className="pricingList">
          <span>$</span>
          <p>89.09</p>
        </div>
        <p className="monthlyPackage">Monthly Package</p>
        <p>
          <b></b>
        </p>
        <div className="pricingText">
          <p>
            Social Media Marketing 3.100 Keywords One Way Link Building 10
            Free Optimization 5 Press Releases
          </p>
        </div>
        <button className="buttonPricing">Sing Up</button>
      </div>

      <div className="pricing_card bgCard">
        <Button button="Economy" />
        <div className="imgSection">
          <img src={companyTow} alt="" />
        </div>
        <div className="pricingList">
          <span>$</span>
          <p>79.09</p>
        </div>
        <p className="monthlyPackage">Monthly Package</p>
        <p>
          <b></b>
        </p>
        <div className="pricingText">
          <p>
            Social Media Marketing 4.100 Keywords One Way Link Building 19
            Free Optimization 7 Press Releases
          </p>
        </div>
        <button className="buttonPricing">Sing Up</button>
      </div>

      <div className="pricing_card">
        <Button button="Economy" />
        <div className="imgSection">
          <img src={companySix} alt="" />
        </div>
        <div className="pricingList">
          <span>$</span>
          <p>89.09</p>
        </div>
        <p className="monthlyPackage">Monthly Package</p>
        <p>
          <b></b>
        </p>
        <div className="pricingText">
          <p>
            Social Media Marketing 3.100 Keywords One Way Link Building 10
            Free Optimization 5 Press Releases
          </p>
        </div>
        <button className="buttonPricing">Sing Up</button>
      </div>
    </div>
  </section>
  )
}

export default PricingList