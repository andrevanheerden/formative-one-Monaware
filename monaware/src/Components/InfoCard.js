import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import monsterImages from "../Assets/images/monsterImages";
import "../App.css";
import noIMG from "../Assets/images/noIMG.png";

const InfoCard = ({ selectedMonster }) => {
  const [monster, setMonster] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchMonster(selectedMonster);
  }, [selectedMonster]);

  useEffect(() => {
    if (monster) {
      setImageLoading(true);
      setImageError(false);
      const url = getMonsterImage(monster.index);
      setImageUrl(url);
      
      // Preload the image
      const img = new Image();
      img.src = url;
      img.onload = () => {
        setImageLoading(false);
      };
      img.onerror = () => {
        console.warn(`Failed to preload image for monster: ${monster.name}`);
        setImageError(true);
        setImageLoading(false);
      };
    }
  }, [monster]);

  const fetchMonster = async (monsterIndex) => {
    if (!monsterIndex) {
      setError("No monster selected");
      setLoading(false);
      return;
    }

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
    if (!monsterIndex) return noIMG;
    
    // Clean up the monster index for matching
    const cleanIndex = monsterIndex.toLowerCase().replace(/-/g, ' ').trim();
    
    // Try different matching strategies
    const matches = monsterImages.sample.filter(entry => {
      const cleanDescription = entry.description.toLowerCase().replace(/-/g, ' ').trim();
      return (
        cleanDescription === cleanIndex || // exact match
        cleanDescription.includes(cleanIndex) || // description contains our index
        cleanIndex.includes(cleanDescription) || // our index contains description
        cleanDescription.replace(/\s+/g, '') === cleanIndex.replace(/\s+/g, '') // same letters without spaces
      );
    });

    // Return the first match if found, otherwise use noIMG
    return matches.length > 0 ? matches[0].imageUrl : noIMG;
  };

  if (loading) return <div className="loading-placeholder">Loading monster data...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!monster) return <div className="error-message">No monster data available.</div>;

  return (
    <Card className="info-card">
      <Card.Body className="InfoCardBody">
        <Card.Title className="InfoCardTitle">{monster.name}</Card.Title>
        
        <div className="image-container">
          {imageLoading && (
            <div className="image-loading-placeholder">
              Loading image...
            </div>
          )}
          <Card.Img
            variant="top"
            src={imageError ? noIMG : imageUrl}
            alt={monster.name}
            className={`InfoCardImg ${imageLoading ? 'hidden' : 'fade-in'}`}
            onLoad={() => setImageLoading(false)}
            onError={() => {
              console.warn(`Failed to load image for monster: ${monster.name}`);
              setImageError(true);
              setImageLoading(false);
            }}
          />
        </div>
        
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






