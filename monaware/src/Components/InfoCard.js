import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "../App.css";

const InfoCard = () => {
  const [monster, setMonster] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchMonster("adult-black-dragon"); // Initial call for a default monster
  }, []);

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

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length < 3) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await axios.get("https://www.dnd5eapi.co/api/monsters");
      const filteredResults = response.data.results.filter((monster) =>
        monster.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(filteredResults);
    } catch (err) {
      console.error("Error fetching search results:", err);
    }
  };

  const getMonsterImage = (monsterName) => {
    // Map monster names to image URLs (use your own image URLs or sources here)
    const monsterImages = {
      "Adult Black Dragon": "https://example.com/images/adult-black-dragon.jpg", // Replace with real image URL
      "Goblin": "https://example.com/images/goblin.jpg", // Replace with real image URL
      // Add other monsters and their image URLs here
    };

    return monsterImages[monsterName] || "https://via.placeholder.com/340?text=No+Image"; // Fallback to placeholder
  };

  if (loading) return <p>Loading monster...</p>;
  if (error) return <p>{error}</p>;
  if (!monster) return <p>No monster data available.</p>;

  return (
    <Card className="info-card">
      <Card.Body className="InfoCardBody">
        {/* Search Bar */}
        <Form.Control
          type="text"
          placeholder="Search for a monster..."
          value={searchTerm}
          onChange={handleSearch}
          className="monster-search"
        />

        {/* Display search results */}
        {searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((result) => (
              <p
                key={result.index}
                style={{
                  cursor: "pointer",
                  padding: "5px",
                  margin: "2px",
                  background: "#eee",
                  borderRadius: "5px",
                }}
                onClick={() => {
                  fetchMonster(result.index); // Fetch selected monster
                  setSearchTerm("");
                  setSearchResults([]); // Hide results after selection
                }}
              >
                {result.name}
              </p>
            ))}
          </div>
        )}

        {/* Monster Name */}
        <Card.Title className="InfoCardTitle">{monster.name}</Card.Title>

        {/* Monster Image */}
        <Card.Img
          variant="top"
          src={getMonsterImage(monster.name)} // Fetch image from the mapping or fallback to placeholder
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






