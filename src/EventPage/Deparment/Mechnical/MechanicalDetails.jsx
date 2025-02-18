import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../DetailPage.css';

const MechnicalDetails = () => {
  const { title } = useParams();
  const [record, setRecord] = useState(null);

  useEffect(() => {
    fetch('/MESA.json')  // Ensure the path is correct to your JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch records');
        }
        return response.json();
      })
      .then((data) => {
        const foundRecord = data.find((item) => item.Title === title);
        setRecord(foundRecord);
      })
      .catch((error) => console.error('Error loading records:', error));
  }, [title]);

  if (!record) {
    return <h2 className="not-found">Record not found!</h2>;
  }

  return (
    <div className="detail-container">
      <h1 className="detail-title">{record.Title}</h1>
      <p className="detail-description">{record.Description}</p>

      {record.Rules && (
        <div className="detail-section">
          <h3 className="section-title">Rules:</h3>
          {record.Rules.Team_Requirements && (
            <div className="rules-section">
              <h4 className="rules-subtitle text-black">Team Requirements:</h4>
              <p className="text-black"><strong>Size:</strong> {record.Rules.Team_Requirements.Size}</p>
              <p className="text-black"><strong>Minimum Conversions:</strong> {record.Rules.Team_Requirements.Minimum_Conversions}</p>
            </div>
          )}
          {record.Rules.Dimensions && (
            <div className="rules-section">
              <h4 className="rules-subtitle text-black">Dimensions:</h4>
              <p className="text-black"><strong>Area:</strong> {record.Rules.Dimensions.Area}</p>
              <p className="text-black"><strong>Height:</strong> {record.Rules.Dimensions.Height}</p>
            </div>
          )}
          {record.Rules.Time_Limits && (
            <div className="rules-section">
              <h4 className="rules-subtitle text-black">Time Limits:</h4>
              <p className="text-black"><strong>Assembly:</strong> {record.Rules.Time_Limits.Assembly}</p>
              <p className="text-black"><strong>Testing:</strong> {record.Rules.Time_Limits.Testing}</p>
            </div>
          )}
          {record.Rules.Game_Path_Rules && (
            <div className="rules-section">
              <h4 className="rules-subtitle text-black">Game Path Rules:</h4>
              <ul className="list-disc pl-6 text-black">
                {record.Rules.Game_Path_Rules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>
          )}
          {record.Rules.Guidelines && (
            <div className="rules-section">
              <h4 className="rules-subtitle text-black">Guidelines:</h4>
              <ul className="list-disc pl-6 text-black">
                {record.Rules.Guidelines.map((guideline, idx) => (
                  <li key={idx}>{guideline}</li>
                ))}
              </ul>
            </div>
          )}
          {record.Rules.Attempts && (
            <div className="rules-section">
              <h4 className="rules-subtitle text-black">Attempts:</h4>
              <p className="text-black"><strong>Maximum:</strong> {record.Rules.Attempts.Maximum}</p>
              <p className="text-black"><strong>Scoring:</strong> {record.Rules.Attempts.Scoring}</p>
            </div>
          )}
          {record.Rules.Scoring && (
            <div className="rules-section">
              <h4 className="rules-subtitle text-black">Scoring:</h4>
              <p className="text-black"><strong>Base Points:</strong></p>
              <ul className="list-disc pl-6 text-black">
                {Object.entries(record.Rules.Scoring.Base_Points).map(([key, value], idx) => (
                  <li key={idx}><strong>{key}:</strong> {value}</li>
                ))}
              </ul>
              <p className="text-black"><strong>Bonus Points:</strong></p>
              <ul className="list-disc pl-6 text-black">
                {Object.entries(record.Rules.Scoring.Bonus_Points).map(([key, value], idx) => (
                  <li key={idx}><strong>{key}:</strong> {value}</li>
                ))}
              </ul>
              <p className="text-black"><strong>Penalties:</strong></p>
              <ul className="list-disc pl-6 text-black">
                {Object.entries(record.Rules.Scoring.Penalties).map(([key, value], idx) => (
                  <li key={idx}><strong>{key}:</strong> {value}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <p className="prize-pool text-black"><strong>Prize Pool:</strong> {record.Prize_Pool}</p>
      <p className="venue text-black"><strong>Venue:</strong> {record.Venue_Location}</p>
      
    </div>
  );
};

export default MechnicalDetails;
