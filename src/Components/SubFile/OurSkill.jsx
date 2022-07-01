import React from 'react'
import "../Css/Home.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const OurSkill = () => {
      // skill bar
  const percentage = 80;
  const percentageTow = 90;
  const percentageThree = 85;
  const percentageFour = 70;

  return (
    <section>
    <div className="out_Skill">
      <div className="text_section">
        <h1>Our Skill</h1>
        <h2>Expect Great Things from Your SEO Agency</h2>
      </div>
      <div className="skill_section">
        <div className="skill_row">
          <div className="skillBar">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
            />
            <h1>SEO & Marketing</h1>
          </div>
        </div>
        <div className="skill_row">
          <div className="skillBar">
            <CircularProgressbar
              value={percentageTow}
              text={`${percentageTow}%`}
            />
            <h1>Keywords Results</h1>
          </div>
        </div>
        <div className="skill_row">
          <div className="skillBar">
            <CircularProgressbar
              value={percentageThree}
              text={`${percentageThree}%`}
            />
            <h1>Google Analytics</h1>
          </div>
        </div>
        <div className="skill_row">
          <div className="skillBar">
            <CircularProgressbar
              value={percentageFour}
              text={`${percentageFour}%`}
            />
            <h1>Off Page SEO</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default OurSkill