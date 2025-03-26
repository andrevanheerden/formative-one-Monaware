import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale } from "chart.js";
import { Radar } from "react-chartjs-2";
import axios from "axios";
import "../App.css";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

const SavingThrows = ({ monsterIndex }) => {
  const [monster, setMonster] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMonster = async () => {
      if (!monsterIndex) {
        setError("Monster index is required");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterIndex}`);
        setMonster(response.data);
        console.log('Monster Data:', response.data);
      } catch (err) {
        console.error('Error fetching monster data:', err);
        setError("Failed to load monster data");
      } finally {
        setLoading(false);
      }
    };

    fetchMonster();
  }, [monsterIndex]);

  const getProficiencyData = (monster) => {
    return monster.proficiencies?.map((proficiency) => ({
      name: proficiency.proficiency.name,
      value: proficiency.value,
    })) || [];
  };

  const getSavingThrow = (monster, ability) => {
    try {
      if (!monster.proficiencies) return 0;
      
      const abilityShort = ability.substring(0, 3).toUpperCase();
      const savingThrow = monster.proficiencies.find(prof => 
        prof.proficiency?.name?.includes(`Saving Throw: ${abilityShort}`)
      );
      
      return savingThrow?.value || 0;
    } catch (error) {
      console.error(`Error getting saving throw for ${ability}:`, error);
      return 0;
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;
  if (!monster) return <p className="error-message">No monster data available</p>;

  const monsterProficiencies = getProficiencyData(monster);
  console.log('Monster Proficiencies:', monsterProficiencies);

  const savingThrowData = {
    labels: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],
    datasets: [{
      label: `${monster.name} Saving Throws`,
      data: [
        getSavingThrow(monster, 'Strength'),
        getSavingThrow(monster, 'Dexterity'),
        getSavingThrow(monster, 'Constitution'),
        getSavingThrow(monster, 'Intelligence'),
        getSavingThrow(monster, 'Wisdom'),
        getSavingThrow(monster, 'Charisma'),
      ],
      borderColor: 'rgba(171, 14, 11, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(171, 14, 11, 1)',
      fill: true,
      backgroundColor: 'rgba(171, 14, 11, 0.5)',
    }]
  };

  const options = {
    scales: {
      r: {
        angleLines: { display: true, color: '#fff' },
        grid: { color: '#fff' },
        suggestedMin: 0,
        suggestedMax: 25,
        pointLabels: {
          color: 'white',
          font: { size: 16, family: '"Chakra Petch", sans-serif' },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
          font: { size: 16, family: '"Chakra Petch", sans-serif' },
        },
      },
      tooltip: { enabled: true },
    },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <Card >
        <Card.Body className="SavingThrowsBody">
          <Card.Title className="SavingThrows-title">Saving Throws</Card.Title>
          <div className="chart-container">
            <Radar data={savingThrowData} options={options} />
          </div>

        </Card.Body>
      </Card>
    </div>
  );
};

export default SavingThrows;