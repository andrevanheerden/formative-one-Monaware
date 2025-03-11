import React from "react";
import InfoCard from "./InfoCard";
import AbilityScore from "./AbilityScore";
import SavingThrows from "./SavingThrows";
import Movement from "./Movement";
import AttacksCard from "./AttacksCard";
import SkillsCard from "./Skills";
import "../App.css";

function Home() {
  return (
    <div className="Home">
      {/* Main Card */}
      <div className="main-card">
        <div className="Info-card">
          <InfoCard />
        </div>

        <div className="Ability-score">
          <AbilityScore />
        </div>

        <div className="Saving-throws">
          <SavingThrows />
        </div>

        <div className="MovementVision">
          <Movement />
        </div>

        <div className="Attacks">
          <AttacksCard />
        </div>

        <div className="Skills">
          <SkillsCard />
        </div>
      </div>
    </div>
  );
}

export default Home;