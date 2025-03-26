import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "../App.css";
import logo from "../Assets/images/logo.png";

function Navbar({ onMonsterSelect }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (!query) {
      setSearchResults([]);
      return;
    }
    try {
      const response = await axios.get(`https://www.dnd5eapi.co/api/monsters`);
      const filteredResults = response.data.results.filter((monster) =>
        monster.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } catch (err) {
      console.error("Error searching monsters:", err);
    }
  };

  const handleSelectMonster = (monsterIndex) => {
    onMonsterSelect(monsterIndex); // Notify parent component
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <>
      {/* Fixed Logo Card */}
      <Card className="fixed-logo-card">
        <Card.Body>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Card.Body>
      </Card>

      {/* Navbar Container */}
      <div className="navbar-container">
        {/* Search Bar */}
        <form className="search-form">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
          />
          {/* Dropdown for search results */}
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((result) => (
                <div
                  key={result.index}
                  className="search-result-item"
                  onClick={() => handleSelectMonster(result.index)}
                >
                  {result.name}
                </div>
              ))}
            </div>
          )}
          {searchResults.length === 0 && searchQuery && (
            <p className="error-message">No results found.</p>
          )}
        </form>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/Comparison" className="nav-link">
            Comparison
          </Link>
          <Link to="/Timeline" className="nav-link">
            Timeline
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;