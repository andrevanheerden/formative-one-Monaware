import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import "../App.css";

const AttacksCard = ({ monsterIndex }) => {
  const [cardDetails, setCardDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttacks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterIndex}`);
        const monsterData = response.data;

        // Extract actions and map them to card details
        const attacks = monsterData.actions?.map((action) => ({
          Title: action.name,
          Description: action.desc,
          DamageTypes: action.damage?.reduce((acc, dmg) => {
            const type = dmg.damage_type?.name.toLowerCase();
            const value = dmg.damage_dice;
            if (type && value) acc[type] = value;
            return acc;
          }, {}) || {},
        })) || [];

        setCardDetails(attacks);
      } catch (err) {
        console.error("Error fetching attacks:", err);
        setError("Failed to load attacks.");
      } finally {
        setLoading(false);
      }
    };

    if (monsterIndex) fetchAttacks();
  }, [monsterIndex]);

  const handleDamageChange = (index, type, value) => {
    const updatedCardDetails = [...cardDetails];
    updatedCardDetails[index].DamageTypes[type] = value;
    setCardDetails(updatedCardDetails);
  };

  if (loading) return <p>Loading attacks...</p>;
  if (error) return <p>{error}</p>;
  if (!cardDetails.length) return <p>No attack data available.</p>;

  return (
    <div className="card-container">
      {cardDetails.map((card, index) => (
        <Card key={index} style={{ width: '18rem', margin: '10px' }}>
          <Card.Body className='AttackBody'>
            <Card.Title className='AttackTitle'>{card.Title}</Card.Title>
            <Card.Text className='AttackText'>
              {card.Description}
            </Card.Text>
            <div className="damage-types">
              {Object.entries(card.DamageTypes).map(([type, value]) => (
                <div className="damage-type" key={type}>
                  <label>{type.charAt(0).toUpperCase() + type.slice(1)}:</label>
                  <div className="hexagon">
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleDamageChange(index, type, e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AttacksCard;