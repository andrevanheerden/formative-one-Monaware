import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import monsterImages from "../Assets/images/monsterImages"; // Import monster images
import "../App.css";

const InfoCard = ({ selectedMonster }) => {
  const [monster, setMonster] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMonster(selectedMonster); // Fetch the selected monster
  }, [selectedMonster]);

  const fetchMonster = async (monsterIndex) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterIndex}`);
      setMonster(response.data);
    } catch (err) {
      console.error("Error fetching monster data:", err);
      setError("Failed to load monster.");
    } finally {
      setLoading(false);
    }
  };

  const getMonsterImage = (monsterIndex) => {
    const imageEntry = monsterImages.sample.find(
      (entry) => entry.description === monsterIndex
    );
    return imageEntry?.imageUrl || "https://via.placeholder.com/340";
  };

  if (loading) return <p>Loading monster...</p>;
  if (error) return <p>{error}</p>;
  if (!monster) return <p>No monster data available.</p>;

  return (
    <Card className="info-card">
      <Card.Body className="InfoCardBody">
        {/* Monster Name */}
        <Card.Title className="InfoCardTitle">{monster.name}</Card.Title>

        {/* Monster Image */}
        <Card.Img
          variant="top"
          src={getMonsterImage(monster.index)}
          alt={monster.name}
          className="InfoCardImg"
        />

        {/* Monster Details */}
        <Card.Text className="InfoCardText">
          <p><strong>HP:</strong> {monster.hit_points || "Unknown"}</p>
          <p><strong>AC:</strong> {Array.isArray(monster.armor_class) ? monster.armor_class.map(ac => ac.value).join(", ") : monster.armor_class || "Unknown"}</p>
          <p><strong>Size:</strong> {monster.size}</p>
          <p><strong>Type:</strong> {monster.type}</p>
          <p><strong>Alignment:</strong> {monster.alignment || "Unknown"}</p>
          <p><strong>Damage Vulnerabilities:</strong> {monster.damage_vulnerabilities?.join(", ") || "None"}</p>
          <p><strong>Damage Resistances:</strong> {monster.damage_resistances?.join(", ") || "None"}</p>
          <p><strong>Damage Immunities:</strong> {monster.damage_immunities?.join(", ") || "None"}</p>
          <p><strong>Languages:</strong> {monster.languages || "Unknown"}</p>
          <p><strong>Challenge Rating:</strong> {monster.challenge_rating || "Unknown"}</p>
          <p><strong>XP:</strong> {monster.xp || "Unknown"}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;






