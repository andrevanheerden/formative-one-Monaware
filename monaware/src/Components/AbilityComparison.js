import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import axios from 'axios';
import '../App.css';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

const AbilityComparison = ({ dataset1, dataset2 }) => {
  const [monster1, setMonster1] = useState(null);
  const [monster2, setMonster2] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const [response1, response2] = await Promise.all([
          axios.get(`https://www.dnd5eapi.co/api/monsters/${dataset1}`),
          axios.get(`https://www.dnd5eapi.co/api/monsters/${dataset2}`),
        ]);
        setMonster1(response1.data);
        setMonster2(response2.data);

        // Log the fetched data for debugging
        console.log('Monster 1 Data:', response1.data);
        console.log('Monster 2 Data:', response2.data);
      } catch (error) {
        console.error('Error fetching monster data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMonsters();
  }, [dataset1, dataset2]);

  if (loading) return <p>Loading...</p>;
  if (!monster1 || !monster2) return <p className="error-message">Failed to load monster data.</p>;

  const abilityData = {
    labels: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],
    datasets: [
      {
        label: `${monster1.name} Ability Scores`,
        data: [
          monster1.strength,
          monster1.dexterity,
          monster1.constitution,
          monster1.intelligence,
          monster1.wisdom,
          monster1.charisma,
        ],
        borderColor: 'rgba(171, 14, 11, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(171, 14, 11, 1)',
        fill: true,
        backgroundColor: 'rgba(171, 14, 11, 0.5)',
      },
      {
        label: `${monster2.name} Ability Scores`,
        data: [
          monster2.strength,
          monster2.dexterity,
          monster2.constitution,
          monster2.intelligence,
          monster2.wisdom,
          monster2.charisma,
        ],
        borderColor: 'rgb(0, 162, 255)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(0, 162, 255)',
        fill: true,
        backgroundColor: 'rgba(0, 162, 255, 0.5)',
      },
    ],
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
      <Card style={{ width: '45%', marginRight: '60px' }}>
        <Card.Body className="AbilityScoreBody">
          <Card.Title className="radar-title">Ability Scores Comparison</Card.Title>
          <div className="chart-container">
            <Radar data={abilityData} options={options} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AbilityComparison;