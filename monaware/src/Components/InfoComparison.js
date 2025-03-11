import React from 'react';
import { Row, Col } from 'react-bootstrap'; // Import Row and Col from react-bootstrap
import "../App.css";

/* static data */
import AdultBlackDragon from '../Assets/staticData/AdultBlackDragon.png';
import BlueDragonWyrmling from '../Assets/staticData/BlueDragonWyrmling.png';

const InfoCard = () => {
  const cardDetails = [
    {
      Image: AdultBlackDragon,
      Title: "Adult Black Dragon",
      AC: "19",
      HP: "195",
      size: "Huge",
      type: "Dragon",
      alignment: "chaotic evil",
      damageVulnerabilities: "none",
      damageResistances: "none",
      damageImmunities: "acid",
      languages: "common draconic",
      challengeRating: "14",
      XP: "11500"
    },
    {
      Image: BlueDragonWyrmling,
      Title: "Blue Dragon Wyrmling",
      HP: "52",
      AC: "17",
      size: "Medium",
      type: "Dragon",
      alignment: "Lawful evil",
      damageVulnerabilities: "none",
      damageResistances: "none",
      damageImmunities: "lightning",
      languages: "draconic",
      challengeRating: "3",
      XP: "700"
    },
  ];

  const displayCard = (card, index) => {
    return (
      <Col key={index} md={6} lg={4} className="mb-4"> {/* Adjust column size as needed */}
        <div className="info-card">
          <div className='InfoCardBody'>
            {/* Image */}
            <img src={card.Image} alt="Card" className='InfoCardImg' />

            {/* Title */}
            <h3 className='InfoCardTitle'>{card.Title}</h3>

            {/* Card Details */}
            <div className='InfoCardText'>
              <p>HP : {card.HP}</p>
              <p>AC : {card.AC}</p>
              <p>Size : {card.size}</p>
              <p>Type : {card.type}</p>
              <p>Alignment : {card.alignment}</p>
              <p>Damage Vulnerabilities : {card.damageVulnerabilities}</p>
              <p>Damage Resistances : {card.damageResistances}</p>
              <p>Damage Immunities : {card.damageImmunities}</p>
              <p>Languages : {card.languages}</p>
              <p>Challenge Rating : {card.challengeRating}</p>
              <p>XP : {card.XP}</p>
            </div>
          </div>
        </div>
      </Col>
    );
  };

  return (
    <Row className='cards-container justify-content-md-center flex-wrap'>
      {cardDetails.map((card, index) => displayCard(card, index))}
    </Row>
  );
};

export default InfoCard;