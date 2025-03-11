import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import "../App.css";

const BiteAttackCard = () => {
  const [cardDetails, setCardDetails] = useState([
    {
      Title: 'Bite',
      Description: 'Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 [2d10 + 6] piercing damage plus 4 [1d8] acid damage.',
      DamageTypes: {
        piercing: '2d10+6',
        acid: '1d8',
      },
    },
    {
      Title: 'Tail',
      Description: 'Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 [2d8 + 6] bludgeoning damage.',
      DamageTypes: {
        bludgeoning: '2d8+6',
      },
    },
    {
        Title: 'Claw',
        Description: 'Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.',
        DamageTypes: {
          slashing: '2d6+6',
        },
      },
      {
        Title: 'Acid Breath',
        Description: 'The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.',
        DamageTypes: {
          acid: '12d8',
        },
      },
  ]);

  const handleDamageChange = (index, type, value) => {
    const updatedCardDetails = [...cardDetails];
    updatedCardDetails[index].DamageTypes[type] = value;
    setCardDetails(updatedCardDetails);
  };

  return (
    <div  className="card-container">
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

export default BiteAttackCard;