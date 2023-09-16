import React from "react";
import CSGOLogo from "../images/CSGO Logo.png";
import "./CSGO.css";

function CSGO() {
  return (
    <div className="csgo-section">
      <img src={CSGOLogo} alt="csgo-logo" className="csgo-image" />
      <p className="csgo-text">
        {" "}
        In the spring of 2023, Counter-Strike: Global Offensive, commonly known
        as CSGO, made its debut at our school. The journey began with a rocky
        start, as the newly formed team struggled to secure victories. Despite
        the initial setbacks, their unwavering determination to compete and
        improve never wavered. Fast-forward to the fall of 2023, and a new era
        had dawned for the FAU CSGO squad. With Smol and Dannycrz leading the front
        line, this fresh and revitalized team aimed to carve a path to success
        for the Fall 2023 season and beyond. Their resilience and dedication
        would undoubtedly shape their future endeavors in the world of
        competitive gaming.
      </p>
    </div>
  );
}

export default CSGO;
