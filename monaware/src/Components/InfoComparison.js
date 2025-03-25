import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Form } from 'react-bootstrap';
import monsterImages from "../Assets/images/monsterImages"; // Import monster images
import "../App.css";

const InfoComparison = () => {
  const [cardDetails1, setCardDetails1] = useState([]);
  const [cardDetails2, setCardDetails2] = useState([]);
  const [searchQuery1, setSearchQuery1] = useState("");
  const [searchQuery2, setSearchQuery2] = useState("");
  const [searchResults1, setSearchResults1] = useState([]);
  const [searchResults2, setSearchResults2] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [error1, setError1] = useState(null);
  const [error2, setError2] = useState(null);

  useEffect(() => {
    fetchDataset1("adult-black-dragon");
    fetchDataset2("ancient-blue-dragon");
  }, []);

  const fetchDataset1 = async (monsterIndex) => {
    if (!monsterIndex) {
      setError1("Please enter a valid monster name.");
      return;
    }
    setLoading1(true);
    setError1(null);
    try {
      const response = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterIndex}`);
      setCardDetails1([response.data]);
    } catch (err) {
      console.error("Error fetching dataset 1:", err);
      setError1("Monster not found. Please try again.");
    } finally {
      setLoading1(false);
    }
  };

  const fetchDataset2 = async (monsterIndex) => {
    if (!monsterIndex) {
      setError2("Please enter a valid monster name.");
      return;
    }
    setLoading2(true);
    setError2(null);
    try {
      const response = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterIndex}`);
      setCardDetails2([response.data]);
    } catch (err) {
      console.error("Error fetching dataset 2:", err);
      setError2("Monster not found. Please try again.");
    } finally {
      setLoading2(false);
    }
  };

  const handleSearch1 = async (query) => {
    setSearchQuery1(query);
    if (!query) {
      setSearchResults1([]);
      return;
    }
    try {
      const response = await axios.get(`https://www.dnd5eapi.co/api/monsters`);
      const filteredResults = response.data.results.filter((monster) =>
        monster.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults1(filteredResults);
    } catch (err) {
      console.error("Error searching dataset 1:", err);
    }
  };

  const handleSearch2 = async (query) => {
    setSearchQuery2(query);
    if (!query) {
      setSearchResults2([]);
      return;
    }
    try {
      const response = await axios.get(`https://www.dnd5eapi.co/api/monsters`);
      const filteredResults = response.data.results.filter((monster) =>
        monster.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults2(filteredResults);
    } catch (err) {
      console.error("Error searching dataset 2:", err);
    }
  };

  const getMonsterImage = (monsterIndex) => {
    const imageEntry = monsterImages.sample.find(
      (entry) => entry.description === monsterIndex
    );
    return imageEntry ? imageEntry.imageUrl : "https://via.placeholder.com/340";
  };

  const displayCard = (card, index) => {
    return (
      <Col key={index} md={12} className="mb-4">
        <div className="info-card">
          <div className='InfoCardBody'>
            <h3 className='InfoCardTitle'>{card.name}</h3>
            <img
              src={getMonsterImage(card.index)}
              alt={card.name}
              className="InfoCardImg"
            />
            <div className='InfoCardText'>
              <p>HP : {card.hit_points || "Unknown"}</p>
              <p>AC : {Array.isArray(card.armor_class) ? card.armor_class.map(ac => ac.value).join(", ") : card.armor_class || "Unknown"}</p>
              <p>Size : {card.size}</p>
              <p>Type : {card.type}</p>
              <p>Alignment : {card.alignment || "Unknown"}</p>
              <p>Damage Vulnerabilities : {card.damage_vulnerabilities?.join(", ") || "None"}</p>
              <p>Damage Resistances : {card.damage_resistances?.join(", ") || "None"}</p>
              <p>Damage Immunities : {card.damage_immunities?.join(", ") || "None"}</p>
              <p>Languages : {card.languages || "Unknown"}</p>
              <p>Challenge Rating : {card.challenge_rating || "Unknown"}</p>
              <p>XP : {card.xp || "Unknown"}</p>
            </div>
          </div>
        </div>
      </Col>
    );
  };

  return (
    <div className="datasets-row">
      {/* Dataset 1 */}
      <div className="dataset-1">
        <Form className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search for a monster..."
            value={searchQuery1}
            onChange={(e) => handleSearch1(e.target.value)}
            className="info-comparison-search-bar"
          />
          {searchResults1.length > 0 && (
            <div className="info-comparison-search-results">
              {searchResults1.map((result) => (
                <div
                  key={result.index}
                  className="info-comparison-search-result-item"
                  onClick={() => {
                    fetchDataset1(result.index);
                    setSearchQuery1("");
                    setSearchResults1([]);
                  }}
                >
                  {result.name}
                </div>
              ))}
            </div>
          )}
        </Form>
        {loading1 ? <p>Loading...</p> : error1 ? <p>{error1}</p> : (
          <Row className='cards-container'>
            {cardDetails1.map((card, index) => displayCard(card, index))}
          </Row>
        )}
      </div>

      {/* Dataset 2 */}
      <div className="dataset-2">
        <Form className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search for a monster..."
            value={searchQuery2}
            onChange={(e) => handleSearch2(e.target.value)}
            className="info-comparison-search-bar"
          />
          {searchResults2.length > 0 && (
            <div className="info-comparison-search-results">
              {searchResults2.map((result) => (
                <div
                  key={result.index}
                  className="info-comparison-search-result-item"
                  onClick={() => {
                    fetchDataset2(result.index);
                    setSearchQuery2("");
                    setSearchResults2([]);
                  }}
                >
                  {result.name}
                </div>
              ))}
            </div>
          )}
        </Form>
        {loading2 ? <p>Loading...</p> : error2 ? <p>{error2}</p> : (
          <Row className='cards-container'>
            {cardDetails2.map((card, index) => displayCard(card, index))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default InfoComparison;