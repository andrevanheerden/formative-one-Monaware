import React from 'react';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import '../App.css';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

// Static data
const AdultBlackDragonAbilityScore = [23, 14, 21, 14, 13, 17];
const AdultBlackDragonSavingThrows = [0, 7, 10, 0, 6, 8];
const AdultBlackDragonTitel = ['Adult Black Dragon'];
const BlueDragonWyrmlingAbilityScore = [17, 10, 15, 12, 11, 15];
const BlueDragonWyrmlingSavingThrows = [0, 2, 4, 0, 2, 4];
const BlueDragonWyrmlingTitel = ['Blue Dragon Wyrmling'];

const AbilityComparison = () => {
  // Data for the first chart (Ability Scores and Saving Throws)
  const abilityData = {
    labels: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],
    datasets: [
      {
        label: `${AdultBlackDragonTitel} Ability Scores`,
        data: AdultBlackDragonAbilityScore,
        borderColor: 'rgba(171, 14, 11, 1)', // Red border color
        borderWidth: 2,
        pointBackgroundColor: 'rgba(171, 14, 11, 1)', // Red point fill color
        pointBorderColor: '#333',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(171, 14, 11, 1)',
        fill: true,
        backgroundColor: 'rgba(171, 14, 11, 0.5)', // Red fill color
      },
      {
        label: `${BlueDragonWyrmlingTitel} Ability Scores`,
        data: BlueDragonWyrmlingAbilityScore,
        borderColor: 'rgb(0, 162, 255)', // Grey border color
        borderWidth: 2,
        pointBackgroundColor: 'rgb(0, 162, 255)', // Grey point fill color
        pointBorderColor: '#333',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 162, 255)',
        fill: true,
        backgroundColor: 'rgb(0, 162, 255, 0.5)', // Grey fill color
      },
    ],
  };

  // Data for the second chart (Another example with different data)
  const anotherData = {
    labels: ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'],
    datasets: [
        {
            label: `${AdultBlackDragonTitel} Saving Throws`,
            data: AdultBlackDragonSavingThrows,
            borderColor: 'rgba(171, 14, 11, 1)', // Red border color
            borderWidth: 2,
            pointBackgroundColor: 'rgba(171, 14, 11, 1)', // Red point fill color
            pointBorderColor: '#333',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(171, 14, 11, 1)',
            fill: true,
            backgroundColor: 'rgba(171, 14, 11, 0.5)', // Red fill color
          },

      {
        label: `${BlueDragonWyrmlingTitel} Saving Throws`,
        data: BlueDragonWyrmlingSavingThrows,
        borderColor: 'rgb(0, 162, 255)', // Grey border color
        borderWidth: 2,
        pointBackgroundColor: 'rgb(0, 162, 255)', // Grey point fill color
        pointBorderColor: '#333',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 162, 255)',
        fill: true,
        backgroundColor: 'rgb(0, 162, 255, 0.5)', // Grey fill color
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
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      {/* First Card */}
      <Card style={{ width: '45%', marginRight: '60px' }}>
        <Card.Body className="AbilityScoreBody">
          <Card.Title className="radar-title">Ability Scores </Card.Title>
          <div className="chart-container">
            <Radar data={abilityData} options={options} />
          </div>
        </Card.Body>
      </Card>

      {/* Second Card */}
      <Card style={{ width: '45%', marginRight: '60px' }}>
        <Card.Body className="SavingThrowsBody">
          <Card.Title className="SavingThrows-title">Saving Throws</Card.Title>
          <div className="SavingThrows-container">
            <Radar data={anotherData} options={options} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AbilityComparison;