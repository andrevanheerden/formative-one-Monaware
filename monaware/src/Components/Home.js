import React from "react";
import InfoCard from "../Components/InfoCard";
import AbilityScore from "../Components/AbilityScore";
import SavingThrows from "../Components/SavingThrows";
import Movement from "../Components/Movement";
import AttacksCard from "../Components/AttacksCard";
import "../App.css";



function Home() {
  return (

<div className="Home">
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
      
      


</div>

  );
}

export default Home;