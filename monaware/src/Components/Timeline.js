
import React from "react";
import InfoCard from "./InfoCard";
import AbilityScore from "./AbilityScore";
import MonsterXPChart from "./timelineChart";
import "../App.css";

function Timeline({ selectedMonster }) {
  return (
    <div className="Timeline">
      <div className="Timeline-card">
        <div className="Info-card">
          <InfoCard selectedMonster={selectedMonster} />
        </div>

        <div className="Ability-score">
          <AbilityScore monsterIndex={selectedMonster} />
        </div>

        <div className="TimeChart">
          <MonsterXPChart selectedMonsters={[selectedMonster]} />
        </div>
      </div>
    </div>
  );
}

export default Timeline;