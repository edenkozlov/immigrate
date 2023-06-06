import React, {useEffect, useState} from "react";
import HeaderEn from "../website-sections-En/Header-En/Header-En";
import Greeting from "../website-sections-En/Sec1-En/Sec1-En";
import Skills from "../website-sections-En/Sec2-En/Sec2-En";
import StackProgress from "../website-sections-En/Sec3-En/Sec-En";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import PricingEn from "../website-sections-En/Pricing-En/Pricing-En";
import Footer from "../website-sections-En/footer-En/Footer-En";
import Education from "../website-sections-En/Automated-En/Automated-En";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "../website-sections-En/twitter-embed-En/twitter-En";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";


const Main = () => {
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
    
    <div className={null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <HeaderEn />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <Projects />
            <PricingEn />
            <Twitter />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
    
  );
};

export default Main;
