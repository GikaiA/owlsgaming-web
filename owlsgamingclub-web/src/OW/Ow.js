import React from "react";
import OWLogo from "../images/OW Logo.png";
import "./OW.css";

function OW() {
  return (  
    <div className="ow-wrapper">
    <div className="overwatch-section">
      <img src={OWLogo} alt="ow-logo" className="ow-image" />
      <p className="ow-text">
        Overwatch has been a steadfast presence within our esports club since
        2019, enduring its share of transitions and transformations. After
        spending time with the Union, it found its way back to us in 2021.
        Throughout its journey, Overwatch has weathered numerous roster changes,
        consistent rotations of in-game leaders, and role switches that kept the
        team on their toes. This tumultuous ride led to fluctuating records in
        every season. However, with a fresh team, a new mindset, and a
        determined in-game leader at the helm, they are now steadfast in their
        pursuit of securing the elusive 1st place trophy. This newfound
        determination reflects their unwavering commitment to excellence in
        Overwatch, and the future holds great promise for this dedicated squad.
      </p>
      </div>
    </div>
  );
}

export default OW;
