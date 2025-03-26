import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import "../App.css";

const SkillsCard = ({ monsterIndex }) => {
  const [skills, setSkills] = useState({
    strength: {
      Athletics: 0,
    },
    dexterity: {
      Acrobatics: 0,
      "Sleight of Hand": 0,
      Stealth: 0,
    },
    intelligence: {
      Arcana: 0,
      History: 0,
      Investigation: 0,
      Nature: 0,
      Religion: 0,
    },
    wisdom: {
      "Animal Handling": 0,
      Insight: 0,
      Medicine: 0,
      Perception: 0,
      Survival: 0,
    },
    charisma: {
      Deception: 0,
      Intimidation: 0,
      Performance: 0,
      Persuasion: 0,
    },
  });

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterIndex}`);
        const monsterData = response.data;

        // Extract skills from the API response
        const apiSkills = {};
        if (monsterData.proficiencies) {
          monsterData.proficiencies.forEach((proficiency) => {
            if (proficiency.proficiency.name.startsWith("Skill:")) {
              const skillName = proficiency.proficiency.name.split(": ")[1];
              apiSkills[skillName] = proficiency.value;
            }
          });
        }

        // Update only the current values in the skills state
        setSkills((prevSkills) => {
          const updatedSkills = { ...prevSkills };
          Object.entries(updatedSkills).forEach(([category, skillList]) => {
            Object.keys(skillList).forEach((skill) => {
              if (apiSkills[skill] !== undefined) {
                updatedSkills[category][skill] = apiSkills[skill];
              }
            });
          });
          return updatedSkills;
        });
      } catch (err) {
        console.error("Error fetching skills:", err);
      }
    };

    if (monsterIndex) fetchSkills();
  }, [monsterIndex]);

  const handleSkillChange = (category, skill, value) => {
    const updatedSkills = { ...skills };
    updatedSkills[category][skill] = value || 0; // Set to 0 if no value is provided
    setSkills(updatedSkills);
  };

  return (
    <div className="card-container">
      <Card style={{ width: '24rem', margin: '10px' }}>
        <Card.Body className='SkillBody'>
          <Card.Title className='SkillTitle'>Skills Bonus</Card.Title>
          <div className="skills-container">
            <div className="skill-column">
              {/* First Column */}
              {Object.entries(skills).slice(0, 3).map(([category, skillList]) => (
                <div key={category} className="skill-category">
                  <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                  {Object.entries(skillList).map(([skill, value]) => (
                    <div className="skill-item" key={skill}>
                      <label>{skill}:</label>
                      <div className="hexagon">
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => handleSkillChange(category, skill, e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="skill-column">
              {/* Second Column */}
              {Object.entries(skills).slice(3).map(([category, skillList]) => (
                <div key={category} className="skill-category">
                  <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                  {Object.entries(skillList).map(([skill, value]) => (
                    <div className="skill-item" key={skill}>
                      <label>{skill}:</label>
                      <div className="hexagon">
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => handleSkillChange(category, skill, e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SkillsCard;