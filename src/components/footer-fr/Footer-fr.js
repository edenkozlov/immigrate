import React, {useContext} from "react";
import "./Footer-fr.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function FooterFr() {
  
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={"footer-text"}>
          {emoji("Copyright © 2023 Immigrate. All rights reserved.")}
        </p>
      </div>
    </Fade>
  );
}
