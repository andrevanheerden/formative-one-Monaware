import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale } from "chart.js";
import { Radar } from "react-chartjs-2";
import axios from "axios";
import "../App.css";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale);

const SavingThrows = ({ monsterIndex }) => {
  const [savingThrows, setSavingThrows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSavingThrows = async () => {
      if (!monsterIndex) {
        setError("Monster index is required to fetch saving throws.");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterIndex}`);
        const monsterData = response.data;

        // Initialize saving throws with default values of 0
        const throws = {
          Strength: 0,
          Dexterity: 0,
          Constitution: 0,
          Intelligence: 0,
          Wisdom: 0,
          Charisma: 0,
        };

        // Extract saving throws from proficiencies
        if (monsterData.proficiencies) {
          monsterData.proficiencies.forEach((proficiency) => {
            const name = proficiency.proficiency.name;
            if (name.startsWith("Saving Throw:")) {
              const ability = name.split(": ")[1];
              throws[ability] = proficiency.value;
            }
          });
        }

        setSavingThrows(Object.values(throws));
      } catch (err) {
        console.error("Error fetching saving throws:", err);
        setError("Failed to load saving throws.");
      } finally {
        setLoading(false);
      }
    };

    fetchSavingThrows();
  }, [monsterIndex]);

  if (loading) return <p>Loading saving throws...</p>;
  if (error) return <p>{error}</p>;
  if (!savingThrows.length) return <p>No saving throw data available.</p>;

  // Create labels without numbers
  const abilityNames = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
  const formattedLabels = abilityNames;

  const data = {
    labels: formattedLabels,
    datasets: [
      {
        label: "Saving Throws",
        data: savingThrows,
        fill: true,
        borderColor: "rgba(171, 14, 11, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(171, 14, 11, 1)",
        pointBorderColor: "#333",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(171, 14, 11, 1)",
        backgroundColor: "rgba(171, 14, 11, 0.5)",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: "white",
        },
        grid: {
          color: "white",
        },
        suggestedMin: 0,
        suggestedMax: 25,
        pointLabels: {
          color: "white",
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
        position: "top",
        labels: {
          color: "white",
          font: {
            size: 16,
            family: '"Chakra Petch", sans-serif',
          },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ' + context.raw;
          }
        }
      },
    },
  };

  return (
    <Card>
      <Card.Body className="SavingThrowsBody">
        <Card.Title className="SavingThrows-title">Saving Throws Radar Chart</Card.Title>
        <div className="SavingThrows-container">
          <Radar data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default SavingThrows;