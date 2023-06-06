import React, {useContext} from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {splashScreen} from "../../portfolio";


export default function SplashScreen() {
  
  return (
    <div className={"splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        
        
        
      </div>
    </div>
  );
}
