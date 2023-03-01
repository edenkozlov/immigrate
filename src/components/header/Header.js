import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
//import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { Link } from "react-router-dom"
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";



function Header() {
  
  
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;


  
  return (
    <Headroom>
      <header className={"header"}>
        <a href="/" className="logo">
          
          <span className="logo-name">{greeting.username}</span>
          
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={"navicon"}></span>
        </label>
        <ul className={"menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">About</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Team</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Automization</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Pricing</a>
            </li>
          )}
          
            <li>
              <a href="#twitter">Updates</a>
            </li>
          
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            
            <Link to="/Signup">
              <li>
                <a>Sign Up</a>
              </li>
            </Link>
            <Link to="/Signin">
          <li>
            <a>Sign in</a>
          </li>
          </Link>
          <Link to="/Fr">
          <li>
            <a>Fr</a>
          </li>
          </Link>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            {/*
            <a>
              <ToggleSwitch />
            </a>
            */}
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;