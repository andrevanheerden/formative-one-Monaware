import React from "react";
import InfoCard from "./InfoCard";
import AbilityScore from "./AbilityScore";
import "../App.css";

function Timeline({ selectedMonster }) {
  return (
    <div className="Timeline">
      {/* Main Card */}
      <div className="Timeline-card">
        <div className="Info-card">
          <InfoCard selectedMonster={selectedMonster} />
        </div>

        <div className="Ability-score">
          <AbilityScore monsterIndex={selectedMonster} />
        </div>


      </div>
    </div>
  );
}

export default Timeline;