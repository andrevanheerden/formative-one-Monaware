import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Api from '../Api'; // Import the API
import "../App.css";

const InfoCard = () => {
  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const monsterList = await Api.getAllMonsters();
        const monsterDetails = await Promise.all(
          monsterList.slice(0, 5).map((monster) => Api.getMonster(monster.index)) // Fetch details for the first 5 monsters
        );
        setMonsters(monsterDetails);
      } catch (error) {
        console.error("Error fetching monster data:", error);
        setError("Failed to load monster data."); // Set error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchMonsters();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading message
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  const displayCard = (monster, index) => {
    return (
      <Card key={index} className="info-card">
        <Card.Body className='InfoCardBody'>
          {/* Title */}
          <Card.Title className='InfoCardTitle'>{monster.name}</Card.Title>

          {/* Card Details */}
          <Card.Text className='InfoCardText'>
            <p>HP : {monster.hitPoints}</p>
            <p>AC : {monster.armorClass}</p>
            <p>Size : {monster.size}</p>
            <p>Type : {monster.type}</p>
            <p>Alignment : {monster.alignment}</p>
            <p>Damage Vulnerabilities : {monster.damageVulnerabilities.join(', ') || 'None'}</p>
            <p>Damage Resistances : {monster.damageResistances.join(', ') || 'None'}</p>
            <p>Damage Immunities : {monster.damageImmunities.join(', ') || 'None'}</p>
            <p>Languages : {monster.languages || 'None'}</p>
            <p>Challenge Rating : {monster.challengeRating}</p>
            <p>XP : {monster.experiencePoints}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="cards-container">
      {monsters.map((monster, index) => displayCard(monster, index))}
    </div>
  );
};

export default InfoCard;