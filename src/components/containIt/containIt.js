import React from 'react';
import './containIt.scss'; // Import the CSS file for styling

function ContainIt({ title, children }) {
  return (
    <div className="containerIt">
      <h2 className="containerTitle">{title}</h2>
      {[children].map((child, index) => (
        <div key={index} className="containerItem">
          {child}
        </div>
      ))}
    </div>
  );
}

export default ContainIt;
