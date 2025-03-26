import React, { useEffect, useState } from "react";
import axios from "axios";

const MonsterList = () => {
  const [monsters, setMonsters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const response = await axios.get("https://www.dnd5eapi.co/api/monsters");
        setMonsters(response.data.results); // Adjust based on API structure
      } catch (err) {
        setError("Failed to fetch monsters.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMonsters();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>

      <ul>
        {monsters.map((monster) => (
          <li key={monster.index}>{monster.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MonsterList;
