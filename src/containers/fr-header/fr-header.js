import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./fr-header.scss";
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



function HeaderFr() {
  
  
 
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
              <a href="#skills">À Propos</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Team</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Automatisation</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Tarification</a>
            </li>
          )}
          <li>
              <a href="#twitter">Mises à jour</a>
            </li>
            <li>
              <a href="#contact">Contactez-nous</a>
            </li>
            
            <Link to="/Signup">
              <li>
                <a>S'inscrire</a>
              </li>
            </Link>
            <Link to="/Fr/s'identifier">
          <li>
            <a>S'identifier</a>
          </li>
          </Link>
          <Link to="/">
          <li>
            <a>En</a>
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
export default HeaderFr;