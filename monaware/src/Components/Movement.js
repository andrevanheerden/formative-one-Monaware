import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../App.css';
import axios from "axios";

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
  const [labels] = useState(['walk', 'fly', 'swim', 'blindsight', 'darkvision']);

  useEffect(() => {
    if (!monsterIndex) {
      console.error('Invalid monsterIndex:', monsterIndex);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterIndex}`);
        const data = response.data;
        console.log('API Response:', data);

        const movement = [
          parseInt(data.speed?.walk || 0, 10),
          parseInt(data.speed?.fly || 0, 10),
          parseInt(data.speed?.swim || 0, 10),
          parseInt(data.senses?.blindsight || 0, 10),
          parseInt(data.senses?.darkvision || 0, 10),
        ];
        console.log('Mapped Movement Data:', movement);
        setMovementData(movement);
      } catch (error) {
        console.error('Error fetching movement data:', error);
      }
    };

    fetchData();
  }, [monsterIndex]);

  // Chart data
  const data = {
    labels,
    datasets: [{
      label: 'Movement And Vision (ft)',
      data: movementData,
      borderColor: 'rgba(171, 14, 11, 1)',
      borderWidth: 2,
      backgroundColor: 'rgba(171, 14, 11, 0.5)',
    }],
  };

  // Chart options
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value} ft`,
          color: 'white',
        },
        grid: { color: 'rgba(255, 255, 255, 0.3)' },
      },
      x: {
        ticks: { color: 'white' },
        grid: { color: 'rgba(255, 255, 255, 0.3)' },
      },
    },
    plugins: {
      legend: {
        labels: { color: 'white' }
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw} ft`
        }
      }
    },
  };

  return (
    <Card className="bg-dark text-white">
      <Card.Body className="MovementBody">
        <Card.Title className="Movement-title">Speed & Senses</Card.Title>
        
        <div className="Movement-container" style={{ height: '800px' }}>
          {movementData.length > 0 ? (
            <Bar data={data} options={options} />
          ) : (
            <p>Loading movement data...</p>
          )}
        </div>

        <div className="Movement-data mt-3">
          {labels.map((label, index) => (
            <p key={label} className="mb-1">
              <strong>{label}:</strong> {movementData[index] || 0} ft
            </p>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Movement;