import React from 'react';
import Card from 'react-bootstrap/Card';
import "../App.css";

const AttacksCard = () => {
  const cardDetails = [
    {
      Title: 'Bite',
      Description: 'Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.',
    },
    {
      Title: 'Tail',
      Description: 'Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.',
    },
    {
      Title: 'Claw',
      Description: 'Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.',
    },
    {
      Title: 'Acid Breath',
      Description: 'The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.',
    }
  ];

  const displayCard = (card, index) => {
    return (
      <Card key={index} style={{ width: '18rem', margin: '10px' }}>
        <Card.Body className='AttackBody'>
          <Card.Title className='AttackTitle'>{card.Title}</Card.Title>
          <Card.Text className='AttackText'>
            {card.Description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cardDetails.map((card, index) => displayCard(card, index))}
    </div>
  );
};

export default AttacksCard;