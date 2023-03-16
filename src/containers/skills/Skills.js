import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";

export default function Skills() {
  
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
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      "subTitle skills-text"
                    }
                  >
                    {skills}
                    
                  </p>
                  
                );
                
              })}
              
            </div>
          </div>
        </Fade>
      </div>






      <div className="skills-main-div">
      
        <Fade left duration={2000}>
          <div className="skills-text-div">
            <h1
              className={"skills-heading"}
            >
              Example
            </h1>
            <p
              className={
                "subTitle skills-text-subtitle"
              }
            >
              Easy 8 step process
            </p>
            
            <div>
              {skillsSection.skills2.map((skills2, i) => {
                return (
                  <p
                    key={i}
                    className={
                      "subTitle skills-text"
                    }
                  >
                    {skills2}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>

        <Fade right duration={2000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img 
                alt="Man Working"
                src={require("../../assets/images/mygif.gif")}
              ></img>
            )}
          </div>
        </Fade>
      </div>

    </div>
  );
}
