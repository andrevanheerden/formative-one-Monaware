import React from 'react';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import '../App.css';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

const AbilityScore = () => {
  // Static data
  const data = {
    labels: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],
    datasets: [
      {
        label: 'Ability Scores',
        data: [23, 14, 21, 14, 13, 17], // Example ability scores
       
        borderColor: 'rgba(171, 14, 11, 1)', // Border color
        borderWidth: 2, // Border width
        pointBackgroundColor: 'rgba(171, 14, 11, 1)', // Point fill color
        pointBorderColor: '#333', // Point border color
        pointHoverBackgroundColor: '#fff', // Point hover fill color
        pointHoverBorderColor: 'rgba(171, 14, 11, 1)', // Point hover border color
        fill: true, // Enable fill between points
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
          color: 'white', // Change radar lines to white
        },
        grid: {
          color: 'white', // Change grid lines to white
        },
        suggestedMin: 0, // Minimum value for the radial axis
        suggestedMax: 25, // Maximum value for the radial axis
        pointLabels: {
          color: 'white', // Change label text color
          font: {
            size: 16, // Change label font size
            family: '"Chakra Petch", sans-serif', // Change label font family
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
            size: 16, // Change label font size
            family: '"Chakra Petch", sans-serif', // Change label font family
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