import React, {useEffect, useState} from "react";
import "./fr.scss";
import HeaderFr from "../fr-header/fr-header";
import {splashScreen} from "../../portfolio";
import {StyleProvider} from "../../contexts/StyleContext";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import SplashScreen from "../splashScreen/SplashScreen";
import GreetingFr from "../fr-greeting/fr-greeting";
import SkillsFr from "../fr-skills/fr-skills";
import StackProgressFr from "../skillProgress-fr/skillProgress-fr";
import ScrollToTopButton from "./../topbutton/Top";
import EducationFr from "../education-fr/Education-fr";
import AchievementFr from "../achievement-fr/Achievement-fr";
import ContactFr from "../contact-fr/Contact-fr";
import FooterFr from "../../components/footer-fr/Footer-fr";
import TwitterFr from "../twitter-embed-fr/twitter-embed-fr";

const MainFr = () => {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
    const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
      useState(true);
  
    useEffect(() => {
      if (splashScreen.enabled) {
        const splashTimer = setTimeout(
          () => setIsShowingSplashAnimation(false),
          splashScreen.duration
        );
        return () => {
          clearTimeout(splashTimer);
        };
      }
    }, []);
  
    const changeTheme = () => {
      setIsDark(!isDark);
    };
  
    return (
      
      <div className={isDark ? "dark-mode" : null}>
        <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen />
          ) : (
            <>
              <HeaderFr />
              <GreetingFr />
              <SkillsFr />
              <StackProgressFr />
              <EducationFr />
              <AchievementFr />
              <TwitterFr />
              <ContactFr />
              <FooterFr />
              <ScrollToTopButton />
            </>
          )}
        </StyleProvider>
      </div>
      
    );
  };
  
  export default MainFr;