import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../App.css";
import logo from "../Assets/images/logo.png";

function Navbar({ onMonsterSelect }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length < 3) {
      setSearchResults([]); // Clear results if query is too short
      return;
    }

    try {
      const response = await fetch("https://www.dnd5eapi.co/api/monsters");
      const data = await response.json();
      const filteredResults = data.results.filter((monster) =>
        monster.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } catch (err) {
      console.error("Error fetching monsters:", err);
    }
  };

  const handleMonsterSelect = (monsterIndex) => {
    onMonsterSelect(monsterIndex); // Notify parent with the selected monster index
    setSearchQuery(""); // Clear the search input
    setSearchResults([]); // Clear the search results
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
            onChange={handleSearchChange}
            className="search-input"
          />
          {/* Dropdown for search results */}
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((result) => (
                <div
                  key={result.index}
                  className="search-result-item"
                  onClick={() => handleMonsterSelect(result.index)}
                >
                  {result.name}
                </div>
              ))}
            </div>
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