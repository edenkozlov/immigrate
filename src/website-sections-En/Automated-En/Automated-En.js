import React from "react";
import "./Automated-En.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function AutomatedEn() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="opensource">
        <h1 className="education-heading">Which Files Do We Automate?</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
