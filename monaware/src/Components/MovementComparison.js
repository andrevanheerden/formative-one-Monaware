import React from 'react';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2'; // Correct import with uppercase 'Bar'
import '../App.css';

// Register Chart.js components
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
  );
  
  // Static data
  const AdultBlackDragonMovement = [40, 80, 40, 60, 120];
  const BlueDragonWyrmlingMovement = [30, 60, 0, 10, 60]; // Second dataset for comparison
  
  const MovementComparison = () => {
    // Chart data
    const data = {
      labels: ['SpeedWalking', 'SpeedFlying', 'SpeedSwimming', 'Blindsight', 'Darkvision'],
      datasets: [
        {
          label: 'Adult Black Dragon',
          data: AdultBlackDragonMovement,
          borderColor: 'rgba(171, 14, 11, 1)',
          borderWidth: 2,
          backgroundColor: 'rgba(171, 14, 11, 0.5)',
          color: 'white',
        },
        {
          label: 'Blue Dragon Wyrmling',
          data: BlueDragonWyrmlingMovement,
          borderColor: 'rgba(0, 162, 255, 1)',
          borderWidth: 2,
          backgroundColor: 'rgba(0, 162, 255, 0.5)',
          color: 'white',
        },
      ],
    };
  
    // Chart options
    const options = {
      responsive: true,
      maintainAspectRatio: false,
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
        tooltip: {
            enabled: true, // Enable tooltips
            callbacks: {
              label: (context) => {
                const label = context.dataset.label || '';
                const value = context.raw || 0;
                return `${label}: ${value} ft`; // Add "ft" to the tooltip
              },
            },
          },
        },
      };
  
    return (
      <Card style={{ width: '1200px', height: '900px', margin: 'auto', backgroundColor: 'rgba(2, 5, 4, 0.95)' }}>
        <Card.Body className="MovementComparisonBody">
          <Card.Title className="MovementComparison-title">Dragon Movement and Vision Comparison</Card.Title>
          <div className="MovementComparison-container">
            <Bar data={data} options={options} />
          </div>
        </Card.Body>
      </Card>
    );
  };
  
  export default MovementComparison;