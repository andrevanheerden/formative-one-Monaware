import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../App.css';

// Register Chart.js components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Movement = ({ monsterIndex }) => {
  const [movementData, setMovementData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovementData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterIndex}`);
        const monsterData = response.data;

        // Extract movement and vision data
        const movement = [
          monsterData.speed.walk ? parseInt(monsterData.speed.walk) : 0,
          monsterData.speed.fly ? parseInt(monsterData.speed.fly) : 0,
          monsterData.speed.swim ? parseInt(monsterData.speed.swim) : 0,
          monsterData.senses.blindsight ? parseInt(monsterData.senses.blindsight) : 0,
          monsterData.senses.darkvision ? parseInt(monsterData.senses.darkvision) : 0,
        ];

        setMovementData(movement);
      } catch (err) {
        console.error("Error fetching movement data:", err);
        setError("Failed to load movement data.");
      } finally {
        setLoading(false);
      }
    };

    if (monsterIndex) fetchMovementData();
  }, [monsterIndex]);

  if (loading) return <p>Loading movement data...</p>;
  if (error) return <p>{error}</p>;
  if (!movementData.length) return <p>No movement data available.</p>;

  // Chart data
  const data = {
    labels: ['SpeedWalking', 'SpeedFlying', 'SpeedSwimming', 'Blindsight', 'Darkvision'],
    datasets: [
      {
        label: 'Movement And Vision',
        data: movementData,
        borderColor: 'rgba(171, 14, 11, 1)',
        borderWidth: 2,
        backgroundColor: 'rgba(171, 14, 11, 0.5)',
        color: 'white',
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return value + ' ft';
          },
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.3)',
        },
      },
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.3)',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
  };

  return (
    <Card>
      <Card.Body className="MovementBody">
        <Card.Title className="Movement-title">Ability Scores Bar Chart</Card.Title>
        <div className="Movement-container">
          <Bar data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Movement;