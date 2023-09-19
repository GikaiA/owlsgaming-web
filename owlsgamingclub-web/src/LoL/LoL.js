import React from "react";
import LOL from "../images/LOL logo.png";
import "./LoL.css";

function LoL() {
  return (
    <div className="LOL-wrapper">
    <div className="LOL-section">
      <img src={LOL} alt="LOL-logo" className="LOL-image" />
      <p className="LOL-text">
        {" "}
        In 2020, the League of Legends journey at our university commenced in a
        manner reminiscent of Valorant's early days. Like Valorant, it found its
        roots within the Union and remained there until 2021, when the reins
        were handed over to the esports club. Throughout this period, the team
        showcased resilience, holding their own amidst fluctuating rosters and
        fierce competition. At one point, they even expanded into three teams, a
        testament to their growing presence in the esports scene. However, not
        all was smooth sailing, as the third team faced unfortunate disbandment
        due to internal issues and drama. Today, the League of Legends landscape
        boasts two formidable squads, led by the capable hands of Tally and
        Thriller. With their combined efforts and aspirations, they are primed
        to chase success in the upcoming 2023-2024 season, eager to make their
        mark in the League of Legends esports realm.
      </p>
    </div>
    </div>
  );
}

export default LoL;
