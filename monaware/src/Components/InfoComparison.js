import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Form } from 'react-bootstrap';
import monsterImages from "../Assets/images/monsterImages";
import "../App.css";

// Default image when no match is found
const DEFAULT_MONSTER_IMAGE = "https://www.dndbeyond.com/avatars/thumbnails/0/1/1000/1000/636252756157427258.jpeg";

const InfoComparison = ({ onDataset1Change, onDataset2Change }) => {
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
  const [imageLoading1, setImageLoading1] = useState(true);
  const [imageLoading2, setImageLoading2] = useState(true);
  const [imageError1, setImageError1] = useState(false);
  const [imageError2, setImageError2] = useState(false);

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
    setImageLoading1(true);
    setError1(null);
    try {
      const response = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterIndex}`);
      setCardDetails1([response.data]);
      onDataset1Change(monsterIndex);
      
      // Preload the image
      const img = new Image();
      img.src = getMonsterImage(monsterIndex);
      img.onload = () => setImageLoading1(false);
      img.onerror = () => {
        console.warn(`Failed to preload image for monster: ${response.data.name}`);
        setImageError1(true);
        setImageLoading1(false);
      };
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
    setImageLoading2(true);
    setError2(null);
    try {
      const response = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterIndex}`);
      setCardDetails2([response.data]);
      onDataset2Change(monsterIndex);
      
      // Preload the image
      const img = new Image();
      img.src = getMonsterImage(monsterIndex);
      img.onload = () => setImageLoading2(false);
      img.onerror = () => {
        console.warn(`Failed to preload image for monster: ${response.data.name}`);
        setImageError2(true);
        setImageLoading2(false);
      };
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
    if (!monsterIndex) return DEFAULT_MONSTER_IMAGE;
    
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

    // Return the first match if found, otherwise default image
    return matches.length > 0 ? matches[0].imageUrl : DEFAULT_MONSTER_IMAGE;
  };

  const displayCard = (card, index, isFirstCard) => {
    const imageUrl = getMonsterImage(card.index);
    const isLoading = isFirstCard ? imageLoading1 : imageLoading2;
    const isError = isFirstCard ? imageError1 : imageError2;

    return (
      <Col key={index} md={12} className="mb-4">
        <div className="info-card">
          <div className='InfoCardBody'>
            <h3 className='InfoCardTitle'>{card.name}</h3>
            <div className="image-container">
              {isLoading && (
                <div className="image-loading-placeholder">
                  Loading image...
                </div>
              )}
              <img
                src={isError ? DEFAULT_MONSTER_IMAGE : imageUrl}
                alt={card.name}
                className={`InfoCardImg ${isLoading ? 'hidden' : 'fade-in'}`}
                onLoad={() => isFirstCard ? setImageLoading1(false) : setImageLoading2(false)}
                onError={() => {
                  console.warn(`Failed to load image for monster: ${card.name}`);
                  isFirstCard ? setImageError1(true) : setImageError2(true);
                  isFirstCard ? setImageLoading1(false) : setImageLoading2(false);
                }}
              />
            </div>
            <div className='InfoCardText'>
              <p><strong>HP:</strong> {card.hit_points || "Unknown"}</p>
              <p><strong>AC:</strong> {Array.isArray(card.armor_class) ? card.armor_class.map(ac => ac.value).join(", ") : card.armor_class || "Unknown"}</p>
              <p><strong>Size:</strong> {card.size}</p>
              <p><strong>Type:</strong> {card.type}</p>
              <p><strong>Alignment:</strong> {card.alignment || "Unknown"}</p>
              <p><strong>Damage Vulnerabilities:</strong> {card.damage_vulnerabilities?.join(", ") || "None"}</p>
              <p><strong>Damage Resistances:</strong> {card.damage_resistances?.join(", ") || "None"}</p>
              <p><strong>Damage Immunities:</strong> {card.damage_immunities?.join(", ") || "None"}</p>
              <p><strong>Languages:</strong> {card.languages || "Unknown"}</p>
              <p><strong>Challenge Rating:</strong> {card.challenge_rating || "Unknown"}</p>
              <p><strong>XP:</strong> {card.xp || "Unknown"}</p>
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
        {loading1 ? <p>Loading...</p> : error1 ? <p className="error-message">{error1}</p> : (
          <Row className='cards-container'>
            {cardDetails1.map((card, index) => displayCard(card, index, true))}
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
        {loading2 ? <p>Loading...</p> : error2 ? <p className="error-message">{error2}</p> : (
          <Row className='cards-container'>
            {cardDetails2.map((card, index) => displayCard(card, index, false))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default InfoComparison;