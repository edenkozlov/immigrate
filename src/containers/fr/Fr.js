import React, {useEffect, useState} from "react";
import "./fr.scss";
import HeaderFr from "../fr-header/fr-header";
import {splashScreen} from "../../portfolio";
import {StyleProvider} from "../../contexts/StyleContext";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import SplashScreen from "../splashScreen/SplashScreen";
import GreetingFr from "../fr-greeting/fr-greeting";
import SkillsFr from "../fr-skills/fr-skills";

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
            </>
          )}
        </StyleProvider>
      </div>
      
    );
  };
  
  export default MainFr;