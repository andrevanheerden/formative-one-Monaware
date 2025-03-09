import React from "react";
import InfoCard from "../Components/InfoCard";
import AbilityScore from "../Components/AbilityScore";
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

</div>

  );
}

export default Home;