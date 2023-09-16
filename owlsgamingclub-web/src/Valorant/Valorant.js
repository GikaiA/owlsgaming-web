import React from "react";
import ValorantLogo from "../images/ValorantLogo.png";
import "./Valorant.css";

function Valorant() {
  return (
    <div className="valorant-section">
      <img
        src={ValorantLogo}
        className="valorant-logo"
        alt="valorant-image"
      ></img>
      <p className="valorant-text">
        Valorant, a game that began its journey at our school in 2021 under the
        banner of the Union, has undergone a remarkable evolution. Initially
        nurtured and supported by the Union, the esports club existed somewhat
        in its shadow. However, in a pivotal move just a year later, the Union
        handed over its Valorant teams to the esports club, setting the stage
        for a new era. At present, the team is under the able leadership of
        SweetBee, who has been instrumental in shaping their trajectory. Fast
        forward to 2023, and the Valorant squad has ascended to new heights,
        actively participating in both NACE and ESL competitions. Their
        dedication and growth continue to make waves in the competitive gaming
        scene, marking a promising chapter in the school's esports legacy.
      </p>
    </div>
  );
}

export default Valorant;
