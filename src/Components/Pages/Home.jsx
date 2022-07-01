import React from "react";
import Button from "../SubFile/Button";
import "../Css/Home.css";
import Bg_Right_Img from "../Images/bg-right-Img.png";
import Business_img from "../Images/Business_img.png";
import Company from "../Images/Company_img.png";
import Coustomar from "../Images/Coustomar_img.png";
import SeoHome from "../Images/seo_Home_img.png";
import companyThree from "../Images/companyThree.png";
import companyFour from "../Images/companyFour.png";
import companyFive from "../Images/companyFive.png";
import HomePageThree from "../Images/home_imge_three.png";
import SwiperSlider from "./SwiperSlider";
import Form from "../SubFile/Form";
import Footer from "../SubFile/Footer";
// file 
import OurService from "../SubFile/OurService";
import TeamMember from "../SubFile/TeamMember";
import FaqList from "../SubFile/FaqList";
import OurSkill from "../SubFile/OurSkill";
import OurPricing from "../SubFile/PricingList";
import OurProject from "../SubFile/ProjectR";

const Home = () => {

  return (
    <main>
      <section>
        <div className="bgImg">
          <div className="bg_Row">
            <div className="bg_Col">
              <h1>
                Rank Your Local <br /> Business With <br />
                SEO
              </h1>
              <p>
                The two golden professnional graphics <br /> urinon for bespoke
                SEO campaign requirement .
              </p>
              <a href="one">
                <Button button="Get To Start" />
              </a>
            </div>
            <div className="bg_Col">
              <img src={Bg_Right_Img} alt="bg right img" />
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-top-1656501458">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* *********************** card section ************************** */}
      <section>
        <div className="home_heading">
          <p className="features">Our Features</p>
          <h1>Things from SEO Agency</h1>
          <p>
            SEO means Search Engine Optimization and is the process used to
            optimize a website's technical configuration, content relevance and
            link popularity so its pages can become easily findable, more
            relevant and popular towards user search queries, and as a
            consequence, search engines rank them better.
          </p>
        </div>
        <div className="card_section">
          <div className="card_col">
            <img src={Coustomar} alt="Coustomar_img" />
            <h1>Coustomar products</h1>
            <p>We have worked with Fortune 500 startups help yours</p>
            <Button button="Read More" />
          </div>
          <div className="card_col">
            <img src={Business_img} alt="Coustomar_img" />
            <h1>Business Strategy</h1>
            <p>We have worked with Fortune 500 startups help yours</p>
            <Button button="Read More" />
          </div>
          <div className="card_col">
            <img src={Company} alt="Coustomar_img" />
            <h1>Company products</h1>
            <p>We have worked with Fortune 500 startups help yours</p>
            <Button button="Read More" />
          </div>
        </div>
      </section>

      <section>
        <div className="Our_about">
          <div className="out_container">
            <div className="out_col">
              <img src={SeoHome} alt="SEO Home img" />
            </div>
            <div className="out_col">
              <div className="text">
                <h2>
                  <span className="iconTop">.</span> Our About
                </h2>
                <h1>We Are The Best For Web Marketing.</h1>
                <p className="out_text">
                  We are passionate about our work. Our designers stay ahead of
                  the curve to provide engaging and user-friendly website
                  designs to ake your business stand out. tibique comprehensam,
                  sed ea verear numquam molestie. Nam te omittam comprehensam.
                  Ne nam nonumy putent fuisset, reque fabulas usu ne. Ex vel
                  populo appellantur. Eos ne delenit admodum.
                </p>
                <p className="out_text">
                  <span>☑</span>
                  If Google can’t crawl your site, it’s not going to rank – but
                  that doesn’t mean avoiding Javascript.
                </p>
                <Button button="More About Us" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Out Service  */}
       <section>
        <OurService />
       </section>
       {/* TeamMember */}
      <section>
        <TeamMember />
      </section>
      {/* FAQ  */}
      <section>
      <FaqList />
      </section>
      {/* Our Benefit */}
      <section>
        <div className="Our_about">
          <div className="out_container">
            <div className="out_col faqText">
              <div className="text">
                <h2>Our Benefit</h2>
                <h1 className="faQheading">
                  Provide Awesome Service With Our Tools
                </h1>
                <div className="buttonId">
                  <Button button="Seo Optimize" />
                  <Button button="Development" />
                </div>
                <h2
                  className="fontSize"
                  style={{
                    color: "rgba(0, 0, 0, 0.833)",
                    fontSize: "25px",
                    width: "500px",
                    margin: "20px 0",
                    lineHeight: "40px",
                  }}
                >
                  This Our History to a tendency to believe thes that smart
                  looking website
                </h2>
                <p className="out_text">
                  Web designing in a powerful way of just not an only
                  professions, how in a passion for our company.
                </p>
                <p className="out_text">
                  We have to a tendency to believe thes that smart lookings of
                  any website. impression Theres Our History to a tendency to
                  believe thes that smart lookingse website is the first
                  impression.
                </p>
              </div>
            </div>
            <div className="out_col faqImg">
              <img src={HomePageThree} alt="Home Page Three" />
            </div>
          </div>
        </div>
      </section>
      {/* Our Skill */}
      <section>
      <OurSkill />
      </section>
      {/* Our Pricing */}
      <section>
        <OurPricing />
      </section>

      {/* textmonial pricing  */}
      <section>
        <div className="home_heading">
          <p className="features">Our Testimonial</p>
          <h1 style={{fontSize: "2rem"}}>What They Say About Our Company?</h1>
        </div>
        <SwiperSlider />
      </section>
      {/* Recent Project */}
      <section>
        <OurProject />
      </section>
      {/* form  */}
      <section>
        <div className="form_section">
          <Form />
        </div>
      </section>
      {/* our Faciltiy  */}
      <section className="faclity_bar">
        <div className="Our_about">
          <div className="out_container">
          <div className="out_col faqImg">
              <div className="text">
                <h2>Our Facility</h2>
                <h1 className="faQheading">
                Proven track record of marketing results
                </h1>
              </div>
              <img src={Bg_Right_Img} className="bgRightImg" alt="Home Page Three" />
            </div>
            <div className="out_col faqText">
            <div className="sectionBox">
              <img src={companyThree} className="bgRight" alt="" />
              <div className="boxDisplay">
                <h1>Business Analysis</h1>
                <p>For startups and growing businesses, online specialist can develop a digital plan to help you grow marketing.</p>
              </div>
            </div>
            <div className="sectionBox">
              <img src={companyFour} className="bgRight" alt="" />
              <div className="boxDisplay">
                <h1>Team Membar</h1>
                <p>For startups and growing businesses, online specialist can develop a digital plan to help you grow marketing.</p>
              </div>
            </div>
            <div className="sectionBox">
              <img src={companyFive} className="bgRight" alt="" />
              <div className="boxDisplay">
                <h1>24/7 Support</h1>
                <p>For startups and growing businesses, online specialist can develop a digital plan to help you grow marketing.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
