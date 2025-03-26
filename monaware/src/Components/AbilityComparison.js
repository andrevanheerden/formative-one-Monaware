import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import axios from 'axios';
import '../App.css';

// Register Chart.js components
ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

const CombinedRadarCharts = ({ dataset1, dataset2 }) => {
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

  // Ability Scores Data
  const abilityData = {
    labels: ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'],
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
        borderColor: 'rgb(0, 162, 255, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(0, 162, 255, 1)',
        fill: true,
        backgroundColor: 'rgba(0, 162, 255, 0.5)',
      },
    ],
  };

  // Saving Throws Data
  const getSavingThrow = (monster, ability) => {
    try {
      if (!monster.proficiencies) return 0;
      const abilityShort = ability.substring(0, 3).toUpperCase();
      const savingThrow = monster.proficiencies.find(prof => 
        prof.proficiency?.name?.includes(`Saving Throw: ${abilityShort}`)
      );
      return savingThrow?.value || 0;
    } catch (error) {
      console.error(`Error getting saving throw for ${ability}:`, error);
      return 0;
    }
  };

  const savingThrowData = {
    labels: ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'],
    datasets: [
      {
        label: `${monster1.name} Saving Throws`,
        data: [
          getSavingThrow(monster1, 'Strength'),
          getSavingThrow(monster1, 'Dexterity'),
          getSavingThrow(monster1, 'Constitution'),
          getSavingThrow(monster1, 'Intelligence'),
          getSavingThrow(monster1, 'Wisdom'),
          getSavingThrow(monster1, 'Charisma'),
        ],
        borderColor: 'rgba(171, 14, 11, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(171, 14, 11, 1)',
        fill: true,
        backgroundColor: 'rgba(171, 14, 11, 0.5)',
      },
      {
        label: `${monster2.name} Saving Throws`,
        data: [
          getSavingThrow(monster2, 'Strength'),
          getSavingThrow(monster2, 'Dexterity'),
          getSavingThrow(monster2, 'Constitution'),
          getSavingThrow(monster2, 'Intelligence'),
          getSavingThrow(monster2, 'Wisdom'),
          getSavingThrow(monster2, 'Charisma'),
        ],
        borderColor: 'rgb(0, 162, 255, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(0, 162, 255, 1)',
        fill: true,
        backgroundColor: 'rgba(0, 162, 255, 0.5)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      r: {
        angleLines: { display: true, color: 'rgba(255, 255, 255, 0.3)' },
        grid: { color: 'rgba(255, 255, 255, 0.3)' },
        suggestedMin: 0,
        suggestedMax: 25,
        pointLabels: {
          color: 'white',
          font: { 
            size: 18,
            family: '"Chakra Petch", sans-serif',
            weight: 'bold'
          },
        },
        ticks: {
          display: false,
          stepSize: 5
        }
      },
    },
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
          font: { 
            size: 16, 
            family: '"Chakra Petch", sans-serif',
          },
          padding: 20
        },
      },
      tooltip: { 
        enabled: true,
        bodyFont: {
          family: '"Chakra Petch", sans-serif',
          size: 14
        },
        titleFont: {
          family: '"Chakra Petch", sans-serif',
          size: 16
        }
      },
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6
      }
    }
  };

  return (
    <Card className="combined-radar-card">
      <Card.Body className="combined-radar-body">
        <div className="radar-charts-container">
          <div className="radar-chart-wrapper">
            <Card.Title className="radar-title">Ability Scores</Card.Title>
            <div className="radar-container">
              <Radar data={abilityData} options={chartOptions} />
            </div>
          </div>
          <div className="radar-chart-wrapper">
            <Card.Title className="radar-title">Saving Throws</Card.Title>
            <div className="radar-container">
              <Radar data={savingThrowData} options={chartOptions} />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CombinedRadarCharts;