// timelineChart.js (updated single chart version)
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "../App.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MonsterXPChart = ({ selectedMonsters = [] }) => {
  const [allMonstersData, setAllMonstersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load saved data from localStorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('savedMonstersData');
    if (savedData) {
      setAllMonstersData(JSON.parse(savedData));
    }
  }, []);

  // Fetch new data and update localStorage
  useEffect(() => {
    if (selectedMonsters.length > 0) {
      fetchMonstersData(selectedMonsters);
    }
  }, [selectedMonsters]);

  const fetchMonstersData = async (monsterIndices) => {
    setLoading(true);
    setError(null);
    try {
      // Filter out monsters we already have data for
      const newIndices = monsterIndices.filter(index => 
        !allMonstersData.some(monster => monster.index === index)
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
      
      // Merge new monsters with existing data
      const updatedData = [...allMonstersData, ...newMonsters];
      
      setAllMonstersData(updatedData);
      localStorage.setItem('savedMonstersData', JSON.stringify(updatedData));
    } catch (err) {
      console.error("Error fetching monsters data:", err);
      setError("Failed to load monsters data.");
    } finally {
      setLoading(false);
    }
  };

  // Prepare chart data combining all monsters
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
          ? "Monster XP Comparison (All Data)" 
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
          // Auto-rotate labels if there are many monsters
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
            <Line data={chartData} options={chartOptions} />
          ) : (
            <p>No monster data available. Select monsters to begin.</p>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default MonsterXPChart;