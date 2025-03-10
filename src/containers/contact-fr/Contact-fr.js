import React, {useContext} from "react";
import "./Contact-fr.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";

export default function ContactFr() {
  
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">Contactez-nous</h1>
            <p
              className={
                "subTitle contact-subtitle"
              }
            >
              
            NOUS OFFRONS UN SUPPORT CLIENT GRATUIT ET FOURNISSONS DES SERVICES PERSONNALISÉS SUR MESURE.
            </p>
            <div
              className={
                "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <div class="cen">
              <Button text="Prendre rendez-vous" href="https://calendly.com/0xlunastudios/30min?month=2023-02" newTab={true}/>
              </div>
              <br></br>
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contact.gif")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
