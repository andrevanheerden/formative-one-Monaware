import React from "react";
import "../App.css";
import InfoComparison from "./InfoComparison";
import AbilityComparison from "./AbilityComparison";
import MovementComparison from "./MovementComparison";
import SkillsComparison from "./SkillsComparison";
import { useState } from 'react';

function Comparison() {
  const [dataset1, setDataset1] = useState('adult-black-dragon');
  const [dataset2, setDataset2] = useState('ancient-blue-dragon');

  return (
    <div className="Comparison">
      {/* Main Card */}
      <div className="main-comparison-card">

        <div className="Info-Comparison">
          <InfoComparison
            onDataset1Change={setDataset1}
            onDataset2Change={setDataset2}
          />
        </div>

        <div className="Ability-Comparison">
          <AbilityComparison dataset1={dataset1} dataset2={dataset2} />
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