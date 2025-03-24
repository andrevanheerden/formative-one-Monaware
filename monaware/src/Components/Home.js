import React, { useState, useEffect } from "react";
import InfoCard from "./InfoCard";
import AbilityScore from "./AbilityScore";
import SavingThrows from "./SavingThrows";
import Movement from "./Movement";
import AttacksCard from "./AttacksCard";
import SkillsCard from "./Skills";
import "../App.css";

function Home({ selectedMonster }) {
  return (
    <div className="Home">
      {/* Main Card */}
      <div className="main-card">
        <div className="Info-card">
          <InfoCard selectedMonster={selectedMonster} />
        </div>

        <div className="Ability-score">
          <AbilityScore monsterIndex={selectedMonster} /> {/* Pass selectedMonster */}
        </div>

        <div className="Saving-throws">
          <SavingThrows monsterIndex={selectedMonster} /> {/* Pass selectedMonster */}
        </div>

        <div className="MovementVision">
          <Movement monsterIndex={selectedMonster} /> {/* Pass selectedMonster */}
        </div>

        <div className="Attacks">
          <AttacksCard monsterIndex={selectedMonster} /> {/* Pass selectedMonster */}
        </div>

        <div className="Skills">
          <SkillsCard monsterIndex={selectedMonster} /> {/* Pass selectedMonster */}
        </div>
      </div>
    </div>
  );
}

export default Home;