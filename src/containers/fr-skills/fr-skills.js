import React, {useContext} from "react";
import "./fr-skills.scss";
import SoftwareSkillFr from "../../components/softwareSkills/SoftwaresSkill-fr";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function SkillsFr() {
  
  return (
    <div className={"main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={2000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/work.gif")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={2000}>
          <div className="skills-text-div">
            <h1
              className={"skills-heading"}
            >
              Ce que nous faisons{" "}
            </h1>
            <p
              className={
                "subTitle skills-text-subtitle"
              }
            >
              Automatisez tous les cas, à la fois les fichiers locaux et les portails

            </p>
            <SoftwareSkillFr />
            <div>
              {skillsSection.skillsFr.map((skillsFr, i) => {
                return (
                  <p
                    key={i}
                    className={
                      "subTitle skills-text"
                    }
                  >
                    {skillsFr}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
