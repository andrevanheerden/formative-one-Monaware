import React from "react";
import "../App.css";
import InfoComparison from "./InfoComparison";
import AbilityComparison from "./AbilityComparison";
import MovementComparison from "./MovementComparison";
import SkillsComparison from "./SkillsComparison";

function Comparison() {
  return (
    <div className="Comparison">
      {/* Main Card */}
      <div className="main-comparison-card">

        <div className="Info-Comparison">
          <InfoComparison />
        </div>

        <div className="Ability-Comparison">
          <AbilityComparison />
        </div>

        <div className="movement-comp">
          <MovementComparison />
        </div>

        <div className="Skill-com">
          <SkillsComparison />
        </div>




      </div>
    </div>
  );
}

export default Comparison;