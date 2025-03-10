import React from 'react';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2'; // Correct import with uppercase 'Bar'
import '../App.css';

// Register Chart.js components
ChartJS.register(
  BarElement, // Register the BarElement
  CategoryScale, // Required for the x-axis
  LinearScale, // Required for the y-axis
  Tooltip, // For tooltips
  Legend // For the legend
);

// Static data
const AdultBlackDragonMovement = [40, 80, 40, 60, 120];

const Movement = () => {
  // Chart data
  const data = {
    labels: ['SpeedWalking', 'SpeedFlying', 'SpeedSwimming', 'Blindsight', 'Darkvision'],
    datasets: [
      {
        label: 'Movement And Vision',
        data: AdultBlackDragonMovement, // Example ability scores
        borderColor: 'rgba(171, 14, 11, 1)', // Border color
        borderWidth: 2, // Border width
        backgroundColor: 'rgba(171, 14, 11, 0.5)', // Fill color
        color: 'white', // Change label text color
      },
    ],
  };

  return (
    <Card>
      <Card.Body className="MovementBody">
        <Card.Title className="Movement-title">Ability Scores Bar Chart</Card.Title>
        <div className="Movement-container">
          <Bar data={data} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Movement;