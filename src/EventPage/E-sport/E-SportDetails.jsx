import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../DetailPage.css'; // Make sure to import the CSS

const ESportDetails = () => {
  const { title } = useParams();
  const [record, setRecord] = useState(null);
  const [error, setError] = useState(null);

  const response = [
    {
        "Title": "Free Fire",
        "Description": "Free Fire is a popular battle royale game developed by 111dots Studio and published by Garena. It’s available on mobile platforms (iOS and Android) and stands out for its fast-paced, action-packed gameplay. In Free Fire, 50 players are dropped onto an island where they must fight to be the last one standing. The game features a shrinking play zone that forces players into close combat as the match progresses. The gameplay focuses on survival, where players can loot weapons, equipment, and resources scattered across the map. You can also use various vehicles and tactics to outsmart your opponents. Players can choose from different characters, each with unique abilities, adding a layer of strategy to the game. With a variety of game modes, regular updates, and events, Free Fire has attracted a large community of players worldwide. It also has a strong competitive scene, with tournaments and esports events being held regularly.",
        "Prize_Pool": "8000",
        "Venue_Location": "A4 Complex"
    },
    {
        "Title": "BGMI",
        "Description": "BGMI (Battlegrounds Mobile India) is a battle royale game developed by Krafton, specifically tailored for the Indian gaming community. It is a mobile version of PUBG Mobile, designed with changes to comply with local regulations, and offers the same intense, action-packed experience. Available on both Android and iOS platforms, BGMI lets players engage in thrilling 100-player matches on large, detailed maps where the goal is to be the last person or team standing. The game features several modes, including Classic (solo, duo, or squad), EvoGround, and other limited-time events, allowing players to enjoy different types of gameplay. Players can collect weapons, armor, and supplies while moving through the shrinking play zone. The environment also includes vehicles, adding more strategic elements to your tactics. BGMI also offers extensive customization, where players can upgrade weapons, personalize characters with skins, and unlock a variety of cosmetic items through battle passes. The game has a thriving competitive scene with esports tournaments and has become a staple for mobile gaming enthusiasts in India. With regular updates, collaborations, and seasonal content, BGMI keeps the gameplay fresh and exciting for both casual players and hardcore gamers alike.",
        "Prize_Pool": "8000",
        "Venue_Location": "AB6"
    },
    {
        "Title": "COD",
        "Description": "Call of Duty: Mobile (COD Mobile) is a fast-paced first-person shooter for mobile devices, featuring multiple game modes like Multiplayer, Battle Royale, and Zombie. Players can engage in classic team-based matches, large-scale battle royale fights, or cooperative PvE missions. The game offers a deep progression system, with unlockable weapons, skins, and perks. Regular updates and events keep the gameplay fresh, making COD Mobile one of the most popular and competitive mobile shooters worldwide.",
        "Prize_Pool": "8000",
        "Venue_Location": "AB6"
    },
    {
        "Title": "VALORANT",
        "Description": "Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a set of Agents, characters based on several countries and cultures around the world.",
        "Prize_Pool": "8000",
        "Venue_Location": "AB6"
    }
  ];

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Using the hardcoded response data for testing purposes
        const data = response;

        const normalizedTitle = decodeURIComponent(title).toLowerCase().trim();
        const foundRecord = data.find(
          (item) => item.Title.toLowerCase().trim() === normalizedTitle
        );
        
        if (!foundRecord) {
          throw new Error('Record not found');
        }
        setRecord(foundRecord);
      } catch (err) {
        setError(err.message);
      }
    };
    
    fetchDetails();
  }, [title]);

  if (error) {
    return <div className="not-found">{error}</div>;
  }

  if (!record) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="detail-container">
      <h1 className="detail-title">{record.Title}</h1>
      
      <p className="detail-description">{record.Description}</p>
      
      <div className="exhibition-details">
        <div className="detail-section">
          <h2 className="section-title">Exhibition Highlights</h2>
          <p className="section-text">
            Discover an immersive journey through art, 
            exploring innovative perspectives and 
            cutting-edge presentations.
          </p>
        </div>
        
        <div className="detail-section">
          <h2 className="section-title">Additional Information</h2>
          <p className="section-text">
            Experience a unique blend of creativity 
            and artistic expression in this 
            extraordinary exhibition.
          </p>
        </div>
      </div>
      
      <div className="venue">
        <h2>Exhibition Venue</h2>
        <p>{record.Venue_Location}</p>
      </div>

      <div className="prize-pool">
        <h2>Prize Pool</h2>
        <p>{record.Prize_Pool}</p>
      </div>
    </div>
  );
};

export default ESportDetails;
