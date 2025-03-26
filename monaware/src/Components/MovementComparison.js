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

const MovementComparison = ({ dataset1, dataset2 }) => {
  const [monster1, setMonster1] = useState(null);
  const [monster2, setMonster2] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMonsters = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!dataset1 || !dataset2) {
          throw new Error("Missing monster IDs");
        }

        const [response1, response2] = await Promise.all([
          axios.get(`https://www.dnd5eapi.co/api/monsters/${dataset1}`),
          axios.get(`https://www.dnd5eapi.co/api/monsters/${dataset2}`),
        ]);
        
        if (!response1.data || !response2.data) {
          throw new Error("Invalid monster data received");
        }

        setMonster1(response1.data);
        setMonster2(response2.data);
      } catch (err) {
        console.error("Error fetching monster data:", err);
        setError(err.message || "Failed to load monster data.");
      } finally {
        setLoading(false);
      }
    };

    fetchMonsters();
  }, [dataset1, dataset2]);

  const extractMovementData = (monster) => {
    if (!monster) return [0, 0, 0, 0, 0];
    
    return [
      monster.speed?.walk ? parseInt(monster.speed.walk) : 0,
      monster.speed?.fly ? parseInt(monster.speed.fly) : 0,
      monster.speed?.swim ? parseInt(monster.speed.swim) : 0,
      monster.senses?.blindsight ? parseInt(monster.senses.blindsight) : 0,
      monster.senses?.darkvision ? parseInt(monster.senses.darkvision) : 0,
    ];
  };

  if (loading) return <div className="loading-message">Loading movement data...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!monster1 || !monster2) return <div className="error-message">No monster data available.</div>;

  const data = {
    labels: ['Walking', 'Flying', 'Swimming', 'Blindsight', 'Darkvision'],
    datasets: [
      {
        label: monster1.name,
        data: extractMovementData(monster1),
        borderColor: 'rgba(171, 14, 11, 1)',
        borderWidth: 2,
        backgroundColor: 'rgba(171, 14, 11, 0.5)',
      },
      {
        label: monster2.name,
        data: extractMovementData(monster2),
        borderColor: 'rgba(0, 162, 255, 1)',
        borderWidth: 2,
        backgroundColor: 'rgba(0, 162, 255, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value + ' ft';
          },
          color: 'white',
          font: {
            family: '"Chakra Petch", sans-serif',
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
      x: {
        ticks: {
          color: 'white',
          font: {
            family: '"Chakra Petch", sans-serif',
          }
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
          font: {
            size: 14,
            family: '"Chakra Petch", sans-serif',
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw} ft`;
          }
        }
      }
    }
  };

  return (
    <div className="movement-comparison-container">
      <Card className="MovementComparisonCard">
        <Card.Body className="MovementComparisonBody">
          <Card.Title className="MovementComparison-title">Movement and Vision Comparison</Card.Title>
          <div className="MovementComparison-container">
            <Bar data={data} options={options} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovementComparison;