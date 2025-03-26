import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import "../App.css";

const BlueDragonWyrmlingTitel = ['Blue Dragon Wyrmling'];
const AdultBlackDragonTitel = ['Adult Black Dragon'];

const SkillsComparison = () => {
  // State for two datasets (e.g., two characters' skills)
  const [skills1, setSkills1] = useState({
    strength: { Athletics: 0 },
    dexterity: { Acrobatics: 0, "Sleight of Hand": 0, Stealth: 0 },
    intelligence: { Arcana: 0, History: 0, Investigation: 0, Nature: 0, Religion: 0 },
    wisdom: { "Animal Handling": 0, Insight: 0, Medicine: 0, Perception: 0, Survival: 0 },
    charisma: { Deception: 0, Intimidation: 0, Performance: 0, Persuasion: 0 },
  });

  const [skills2, setSkills2] = useState({
    strength: { Athletics: 0 },
    dexterity: { Acrobatics: 0, "Sleight of Hand": 0, Stealth: 0 },
    intelligence: { Arcana: 0, History: 0, Investigation: 0, Nature: 0, Religion: 0 },
    wisdom: { "Animal Handling": 0, Insight: 0, Medicine: 0, Perception: 0, Survival: 0 },
    charisma: { Deception: 0, Intimidation: 0, Performance: 0, Persuasion: 0 },
  });

  // Function to handle skill changes for the first dataset
  const handleSkillChange1 = (category, skill, value) => {
    const updatedSkills = { ...skills1 };
    updatedSkills[category][skill] = value || 0;
    setSkills1(updatedSkills);
  };

  // Function to handle skill changes for the second dataset
  const handleSkillChange2 = (category, skill, value) => {
    const updatedSkills = { ...skills2 };
    updatedSkills[category][skill] = value || 0;
    setSkills2(updatedSkills);
  };

  // Split the data into two parts for each dataset
  const skillsEntries1 = Object.entries(skills1);
  const skillsEntries2 = Object.entries(skills2);

  // Calculate the midpoint for splitting the data
  const midpoint1 = Math.ceil(skillsEntries1.length / 2);
  const midpoint2 = Math.ceil(skillsEntries2.length / 2);

  return (
    <div className="SkillsComparison-container">
      <Card style={{ width: '48rem', margin: '10px' }}>
        <Card.Body className='SkillsComparisonBody'>
          <Card.Title className='SkillsComparisonTitle'>Skills Comparison</Card.Title>
          <div className="SkillsComparison-grid">
            {/* First Dataset */}
            <div className="SkillsComparison-column">
              <h3>{AdultBlackDragonTitel}</h3>
              {/* First half of the first dataset */}
              {skillsEntries1.slice(0, midpoint1).map(([category, skillList]) => (
                <div key={category} className="SkillsComparison-category">
                  <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                  {Object.entries(skillList).map(([skill, value]) => (
                    <div className="SkillsComparison-item" key={skill}>
                      <label>{skill}:</label>
                      <div className="SkillsComparisonHexagon hexagon-color-1">
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => handleSkillChange1(category, skill, e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="SkillsComparison-column">
              {/* Second half of the first dataset */}
              {skillsEntries1.slice(midpoint1).map(([category, skillList]) => (
                <div key={category} className="SkillsComparison-category">
                  <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                  {Object.entries(skillList).map(([skill, value]) => (
                    <div className="SkillsComparison-item" key={skill}>
                      <label>{skill}:</label>
                      <div className="SkillsComparisonHexagon hexagon-color-1">
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => handleSkillChange1(category, skill, e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Second Dataset */}
            <div className="SkillsComparison-column">
              <h3>{BlueDragonWyrmlingTitel}</h3>
              {/* First half of the second dataset */}
              {skillsEntries2.slice(0, midpoint2).map(([category, skillList]) => (
                <div key={category} className="SkillsComparison-category">
                  <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                  {Object.entries(skillList).map(([skill, value]) => (
                    <div className="SkillsComparison-item" key={skill}>
                      <label>{skill}:</label>
                      <div className="SkillsComparisonHexagon hexagon-color-2">
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => handleSkillChange2(category, skill, e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="SkillsComparison-column">
              {/* Second half of the second dataset */}
              {skillsEntries2.slice(midpoint2).map(([category, skillList]) => (
                <div key={category} className="SkillsComparison-category">
                  <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                  {Object.entries(skillList).map(([skill, value]) => (
                    <div className="SkillsComparison-item" key={skill}>
                      <label>{skill}:</label>
                      <div className="SkillsComparisonHexagon hexagon-color-2">
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => handleSkillChange2(category, skill, e.target.value)}
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

export default SkillsComparison;