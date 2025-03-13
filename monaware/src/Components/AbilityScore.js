import React from 'react';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import '../App.css';

// Static data//
const AdultBlackDragonAbilityScore = [23, 14, 21, 14, 13, 17];

// Register Chart.js components
ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

const AbilityScore = () => {
  // Static data
  const data = {
    labels: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],
    datasets: [
      {
        label: 'Ability Scores',
        data: AdultBlackDragonAbilityScore, // Example ability scores
        fill: true, // Enable fill between points
        borderColor: 'rgba(171, 14, 11, 1)', // Border color
        borderWidth: 2, // Border width
        pointBackgroundColor: 'rgba(171, 14, 11, 1)', // Point fill color
        pointBorderColor: '#333', // Point border color
        pointHoverBackgroundColor: '#fff', // Point hover fill color
        pointHoverBorderColor: 'rgba(171, 14, 11, 1)', // Point hover border color
        backgroundColor: 'rgba(171, 14, 11, 0.5)', // Fill color
      },
    ],
  };

  // Options for the radar chart
  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'white', 
        },
        grid: {
          color: 'white', 
        },
        suggestedMin: 0, // Minimum value for the radial axis
        suggestedMax: 25, // Maximum value for the radial axis
        pointLabels: {
          color: 'white', // Change label text color
          font: {
            size: 16, 
            family: '"Chakra Petch", sans-serif', 
          },
        },
      },
    },
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false, // Allow the chart to stretch
    plugins: {
      legend: {
        position: 'top', // Position of the legend
        labels: {
          color: 'white', // Change legend text color to white
          font: {
            size: 16, 
            family: '"Chakra Petch", sans-serif', 
          },
        },
      },
      tooltip: {
        enabled: true, // Enable tooltips
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