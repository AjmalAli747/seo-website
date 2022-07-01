import React from "react";
import "../Css/Home.css";
import WebDeveloper from "../Images/WebDeveloper.jpg";
import CeoCompany from "../Images/CEOCompany.jpg";
import WebCompany from "../Images/WEBCompany.jpg";

const TeamMember = () => {
  return (
    <section>
      <div className="home_heading">
        <p className="features our_team_nenber">Our Team Member</p>
        <h1>Expect Great Things from Your SEO Agency</h1>
      </div>
      <div className="card_team">
        <div className="card_team_col">
          <img className="team_Img" src={WebCompany} alt="Coustomar_img" />
          <h2>Regina Blackly</h2>
          <h3>Web Developer</h3>
          <div className="icon_pop">
            <span>
              <i className="fa-brands fa-facebook"></i>
            </span>
            <span>
              <i className="fa-brands fa-twitter"></i>
            </span>
            <span>
              <i className="fa-brands fa-instagram"></i>
            </span>
            <span>
              <i className="fa-brands fa-youtube"></i>
            </span>
            <span>
              <i className="fa-brands fa-linkedin"></i>
            </span>
          </div>
        </div>
        <div className="card_team_col">
          <img className="team_Img" src={CeoCompany} alt="Coustomar_img" />
          <h2>Regina Blackly</h2>
          <h3>Web Developer</h3>
          <div className="icon_pop">
            <span>
              <i className="fa-brands fa-facebook"></i>
            </span>
            <span>
              <i className="fa-brands fa-twitter"></i>
            </span>
            <span>
              <i className="fa-brands fa-instagram"></i>
            </span>
            <span>
              <i className="fa-brands fa-youtube"></i>
            </span>
            <span>
              <i className="fa-brands fa-linkedin"></i>
            </span>
          </div>
        </div>
        <div className="card_team_col">
          <img className="team_Img" src={WebDeveloper} alt="Coustomar_img" />
          <h2>Regina Blackly</h2>
          <h3>Web Developer</h3>
          <div className="icon_pop">
            <span>
              <i className="fa-brands fa-facebook"></i>
            </span>
            <span>
              <i className="fa-brands fa-twitter"></i>
            </span>
            <span>
              <i className="fa-brands fa-instagram"></i>
            </span>
            <span>
              <i className="fa-brands fa-youtube"></i>
            </span>
            <span>
              <i className="fa-brands fa-linkedin"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
