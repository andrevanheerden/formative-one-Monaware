// src/components/TimelineChart.js
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { loadData, saveData, clearData } from "../services/Storage";
import "../App.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MonsterXPChart = ({ selectedMonsters = [] }) => {
  const [allMonstersData, setAllMonstersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load saved data when component mounts
  useEffect(() => {
    const savedData = loadData('savedMonstersData');
    if (savedData && savedData.length > 0) {
      setAllMonstersData(savedData);
    }
  }, []);

  // Save data whenever it changes
  useEffect(() => {
    if (allMonstersData.length > 0) {
      saveData('savedMonstersData', allMonstersData);
    }
  }, [allMonstersData]);

  // Fetch new data when selected monsters change
  useEffect(() => {
    if (selectedMonsters.length > 0) {
      fetchMonstersData(selectedMonsters);
    }
  }, [selectedMonsters]);

  const fetchMonstersData = async (monsterIndices) => {
    setLoading(true);
    setError(null);
    
    try {
      const currentData = loadData('savedMonstersData', []);
      
      // Filter out monsters we already have
      const newIndices = monsterIndices.filter(index => 
        !currentData.some(monster => monster.index === index)
      );

      if (newIndices.length === 0) {
        setLoading(false);
        return;
      }

      const promises = newIndices.map(index => 
        axios.get(`https://www.dnd5eapi.co/api/monsters/${index}`)
      );
      const responses = await Promise.all(promises);
      const newMonsters = responses.map(res => res.data);
      
      // Merge new with existing data
      const updatedData = [...currentData, ...newMonsters];
      
      setAllMonstersData(updatedData);
      saveData('savedMonstersData', updatedData);
    } catch (err) {
      console.error("Error fetching monsters data:", err);
      setError("Failed to load monsters data.");
    } finally {
      setLoading(false);
    }
  };

  const handleClearData = () => {
    if (window.confirm("Are you sure you want to clear all saved monster data?")) {
      setAllMonstersData([]);
      clearData('savedMonstersData');
    }
  };

  // Chart data preparation
  const chartData = {
    labels: allMonstersData.map(monster => monster.name),
    datasets: [
      {
        label: "Experience Points (XP)",
        data: allMonstersData.map(monster => monster.xp || 0),
        borderColor: "rgba(171, 14, 11, 1)",
        backgroundColor: "rgba(171, 14, 11, 0.2)",
        tension: 0.1,
        pointBackgroundColor: "rgba(171, 14, 11, 1)",
        pointBorderColor: "#fff",
        pointHoverRadius: 8,
        pointHoverBorderWidth: 2
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#fff",
          font: {
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: allMonstersData.length > 0 
          ? `Monster XP Comparison (${allMonstersData.length} saved)` 
          : "Monster XP Comparison",
        color: "#fff",
        font: {
          size: 18
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `XP: ${context.raw.toLocaleString()}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Monsters',
          color: '#fff',
          font: {
            size: 14
          }
        },
        ticks: {
          color: "#fff",
          maxRotation: 45,
          minRotation: 45
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)"
        }
      },
      y: {
        title: {
          display: true,
          text: 'XP',
          color: '#fff',
          font: {
            size: 14
          }
        },
        ticks: {
          color: "#fff",
          callback: function(value) {
            return value.toLocaleString();
          }
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)"
        }
      }
    }
  };

  if (loading) return <p>Loading chart data...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <Card className="TimeChart-card">
      <Card.Body className="TimeBody">
        <div className="TimeChart-container">
          {allMonstersData.length > 0 ? (
            <>
              <Line data={chartData} options={chartOptions} />
              <button 
                onClick={handleClearData}
                className="clear-data-button"
                title="Clear all saved monster data"
              >
                Clear Saved Data
              </button>
            </>
          ) : (
            <p>No monster data available. Select monsters to begin.</p>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default MonsterXPChart;