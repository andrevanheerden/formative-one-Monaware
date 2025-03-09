import React from 'react';
import Card from 'react-bootstrap/Card';
import "../App.css";

/* static data */
import AdultBlackDragon from '../Assets/staticData/AdultBlackDragon.png';

const InfoCard = () => {
  const cardDetails = [
    {
      Image: AdultBlackDragon,
      Title: "AdultBlack Dragon",
      size: "Huge",
      type: "Dragon",
      alignment: "chaotic evil",
      damageVulnerabilities: "none",
      damageResistances: "none",
      damageImmunities: "acid",
      languages: "common draconic",
      challengeRating: "14",
      XP: "11500"
    }
  ];

  const displayCard = (card, index) => {
    return (
      <Card key={index}>
        <Card.Body className='InfoCardBody'>
         <Card.Img variant="top" src={card.Image} alt="Card image" className='InfoCardImg' />
          <Card.Title className='InfoCardTitle'>{card.Title}</Card.Title>
          <Card.Text className='InfoCardText'>
            <p>Size : {card.size}</p>
            <p>Type : {card.type}</p>
            <p>Alignment : {card.alignment}</p>
            <p>Damage Vulnerabilities : {card.damageVulnerabilities}</p>
            <p>Damage Resistances : {card.damageResistances}</p>
            <p>Damage Immunities : {card.damageImmunities}</p>
            <p>Languages : {card.languages}</p>
            <p>Challenge Rating : {card.challengeRating}</p>
            <p>XP : {card.XP}</p>
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

export default InfoCard;