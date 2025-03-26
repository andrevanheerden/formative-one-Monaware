import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import axios from 'axios';
import '../App.css';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

const AbilityScore = ({ monsterIndex }) => {
  const [abilityScores, setAbilityScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Received monsterIndex in AbilityScore:", monsterIndex); // Debugging log
    const fetchAbilityScores = async () => {
      if (!monsterIndex) {
        setError("Monster index is required to fetch ability scores.");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterIndex}`);
        const monsterData = response.data;
        setAbilityScores([
          monsterData.strength,
          monsterData.dexterity,
          monsterData.constitution,
          monsterData.intelligence,
          monsterData.wisdom,
          monsterData.charisma,
        ]);
      } catch (err) {
        console.error("Error fetching ability scores:", err);
        setError("Failed to load ability scores.");
      } finally {
        setLoading(false);
      }
    };

    fetchAbilityScores();
  }, [monsterIndex]); // React to changes in monsterIndex

  if (loading) return <p>Loading ability scores...</p>;
  if (error) return <p>{error}</p>;
  if (!abilityScores.length) return <p>No ability score data available.</p>;

  const data = {
    labels: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],
    datasets: [
      {
        label: 'Ability Scores',
        data: abilityScores,
        fill: true,
        borderColor: 'rgba(171, 14, 11, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(171, 14, 11, 1)',
        pointBorderColor: '#333',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(171, 14, 11, 1)',
        backgroundColor: 'rgba(171, 14, 11, 0.5)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: { display: true, color: 'rgba(255, 255, 255, 0.3)' },
        grid: { color: 'rgba(255, 255, 255, 0.3)' },
        suggestedMin: 0,
        suggestedMax: 25,
        pointLabels: {
          color: 'white',
          font: {
            size: 16,
            family: '"Chakra Petch", sans-serif',
          },
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
          font: {
            size: 16,
            family: '"Chakra Petch", sans-serif',
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <Card>
      <Card.Body className="AbilityScoreBody">
        <Card.Title className="radar-title">Ability Scores Radar Chart</Card.Title>
        <div className="chart-container">
          <Radar data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default AbilityScore;