import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import "../App.css";

const SkillsComparison = () => {
  // State for two datasets (e.g., two characters' skills)
  const [skills1, setSkills1] = useState({
    strength: { Athletics: 5 },
    dexterity: { Acrobatics: 3, "Sleight of Hand": 2, Stealth: 7 },
    intelligence: { Arcana: 4, History: 3, Investigation: 6, Nature: 2, Religion: 1 },
    wisdom: { "Animal Handling": 3, Insight: 5, Medicine: 2, Perception: 4, Survival: 6 },
    charisma: { Deception: 2, Intimidation: 8, Performance: 3, Persuasion: 11 },
  });

  const [skills2, setSkills2] = useState({
    strength: { Athletics: 7 },
    dexterity: { Acrobatics: 5, "Sleight of Hand": 4, Stealth: 9 },
    intelligence: { Arcana: 6, History: 4, Investigation: 7, Nature: 3, Religion: 2 },
    wisdom: { "Animal Handling": 4, Insight: 6, Medicine: 3, Perception: 5, Survival: 7 },
    charisma: { Deception: 3, Intimidation: 9, Performance: 4, Persuasion: 12 },
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

  // Split the data into two columns
  const skillsEntries1 = Object.entries(skills1);
  const skillsEntries2 = Object.entries(skills2);

  return (
    <div className="SkillsComparison-container">
      <Card style={{ width: '48rem', margin: '10px' }}>
        <Card.Body className='SkillsComparisonBody'>
          <Card.Title className='SkillsComparisonTitle'>Skills Comparison</Card.Title>
          <div className="SkillsComparison-grid">
            {/* First Column */}
            <div className="SkillsComparison-column">
              <h3>Character 1</h3>
              {skillsEntries1.slice(0, 2).map(([category, skillList]) => (
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
              {skillsEntries1.slice(2, 4).map(([category, skillList]) => (
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

            {/* Second Column */}
            <div className="SkillsComparison-column">
              <h3>Character 2</h3>
              {skillsEntries2.slice(0, 2).map(([category, skillList]) => (
                <div key={category} className="SkillsComparison-category">
                  <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                  {Object.entries(skillList).map(([skill, value]) => (
                    <div className="SkillsComparison-item" key={skill}>
                      <label>{skill}:</label>
                      <div className="SkillsComparisonHexagon SkillsComparisonHexagon-color-2">
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
              {skillsEntries2.slice(2, 4).map(([category, skillList]) => (
                <div key={category} className="SkillsComparison-category">
                  <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                  {Object.entries(skillList).map(([skill, value]) => (
                    <div className="SkillsComparison-item" key={skill}>
                      <label>{skill}:</label>
                      <div className="SkillsComparisonHexagon SkillsComparisonHexagon-color-2">
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