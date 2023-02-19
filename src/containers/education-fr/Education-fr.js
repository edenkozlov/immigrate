import React from "react";
import "./Education-fr.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function EducationFr() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="opensource">
        <h1 className="education-heading">Quels fichiers automatisons-nous?</h1>
        <div className="education-card-container">
          {educationInfo.schoolsFr.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
