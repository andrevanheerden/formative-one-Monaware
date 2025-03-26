import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import "../App.css";

const SkillsComparison = ({ monsterIndex1 = 'adult-black-dragon', monsterIndex2 = 'blue-dragon-wyrmling' }) => {
  // State initialization
  const [monsters, setMonsters] = useState({
    monster1: null,
    monster2: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch monster data
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        setLoading(true);
        
        // Fetch both monsters in parallel
        const [monster1, monster2] = await Promise.all([
          axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterIndex1}`),
          axios.get(`https://www.dnd5eapi.co/api/monsters/${monsterIndex2}`)
        ]);

        console.log('Monster 1 data:', monster1.data);
        console.log('Monster 2 data:', monster2.data);

        setMonsters({
          monster1: monster1.data,
          monster2: monster2.data
        });
        
      } catch (err) {
        console.error('Error fetching monsters:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMonsters();
  }, [monsterIndex1, monsterIndex2]);

  // Extract skills from monster data
  const extractSkills = (monsterData) => {
    if (!monsterData || !monsterData.proficiencies) return null;
    
    console.log('Processing proficiencies for:', monsterData.name);
    console.log('Raw proficiencies:', monsterData.proficiencies);

    // Initialize skills structure
    const skills = {
      strength: { Athletics: 0 },
      dexterity: { Acrobatics: 0, "Sleight of Hand": 0, Stealth: 0 },
      intelligence: { Arcana: 0, History: 0, Investigation: 0, Nature: 0, Religion: 0 },
      wisdom: { "Animal Handling": 0, Insight: 0, Medicine: 0, Perception: 0, Survival: 0 },
      charisma: { Deception: 0, Intimidation: 0, Performance: 0, Persuasion: 0 }
    };

    // Process each proficiency
    monsterData.proficiencies.forEach(proficiency => {
      if (proficiency.proficiency.name.startsWith("Skill: ")) {
        const skillName = proficiency.proficiency.name.replace("Skill: ", "");
        const value = proficiency.value;
        
        // Find which category this skill belongs to
        for (const [category, skillList] of Object.entries(skills)) {
          if (skillName in skillList) {
            skills[category][skillName] = value;
            break;
          }
        }
      }
    });

    console.log('Extracted skills:', skills);
    return skills;
  };

  if (loading) return <div className="SkillsComparison-container">Loading...</div>;
  if (error) return <div className="SkillsComparison-container">Error: {error}</div>;

  const monster1Skills = extractSkills(monsters.monster1);
  const monster2Skills = extractSkills(monsters.monster2);

  if (!monster1Skills || !monster2Skills) {
    return <div className="SkillsComparison-container">No skill data found</div>;
  }

  // Render function for a monster's skills
  const renderSkills = (skills, monsterName) => (
    <div className="SkillsComparison-column">
      <h3 className="monster-title">{monsterName}</h3>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={`${monsterName}-${category}`} className="SkillsComparison-category">
          <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
          {Object.entries(skillList).map(([skill, value]) => (
            <div className="SkillsComparison-item" key={`${monsterName}-${skill}`}>
              <label>{skill}:</label>
              <div className={`SkillsComparisonHexagon hexagon-color-${monsterName === monsters.monster1?.name ? '1' : '2'}`}>
                <input
                  type="text"
                  value={value}
                  readOnly
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="SkillsComparison-container">
      <Card>
        <Card.Body className='SkillsComparisonBody'>
          <Card.Title className='SkillsComparisonTitle'>Skills Comparison</Card.Title>
          <div className="SkillsComparison-grid">
            {renderSkills(monster1Skills, monsters.monster1?.name)}
            {renderSkills(monster2Skills, monsters.monster2?.name)}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SkillsComparison;