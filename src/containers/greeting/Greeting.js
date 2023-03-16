import React from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import { Link } from "react-router-dom"

export default function Greeting() {
  
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={"greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("🇨🇦")}</span>
              </h1>
              <p
                className={
                  "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact Us" href="#contact" />
                {greeting.resumeLink && (
                  
                  <Link to="/Signup">
                  <Button
                    text="Get Started"
                    newTab={true}
                    href={greeting.resumeLink}
                  /></Link>
                  
                )}
                
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/mygreeting.png")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
