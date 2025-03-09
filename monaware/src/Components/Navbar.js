import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Corrected import path

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="navbar-container">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
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
  );
}

export default Navbar;