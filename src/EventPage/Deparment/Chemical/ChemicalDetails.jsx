import React from 'react';
import { useParams } from 'react-router-dom';
import '../../DetailPage.css';

const ChemicalDetails = () => {
  const { title } = useParams();
  
  // Direct data array
  const data = [
    {
      "Title": "Chemical Crafter",
      "Description": "The Chem Crafter Challenge is an event designed to test participants' problem-solving abilities in chemistry and designing skills.",
      "Structure_Of_Event": {
        "Day 1": {
          "Session": "DWSIM – Introduction & Hands-on Session",
          "Details": [
            "Basic operations and functionalities.",
            "Unit operations and their implementation in DWSIM.",
            "Hands-on exercises on simple process simulations."
          ]
        },
        "Day 2": {
          "Competition": "Format: Students will be given critical & problem-solving questions related to chemical engineering."
        }
      },
      "Prize_Pool": "5000",
      "Venue_Location": "CH1/CH2"
    }
  ];

  const record = data.find((item) => item.Title === title);

  if (!record) {
    return <h2 className="not-found">Record not found!</h2>;
  }

  return (
    <div className="detail-container">
      <h1 className="detail-title">{record.Title}</h1>
      <p className="detail-description">{record.Description}</p>

    {(
        <div className="detail-section">
          <h3 className="section-title">Structure of Event:</h3>
          {Object.keys(record.Structure_Of_Event).map((day, index) => (
            <div key={index} className="structure-day">
              <h2 className="day-title text-black text-2xl">{day} :-</h2>
              <p className="session text-black text-xl">{record.Structure_Of_Event[day].Session}</p>
              {record.Structure_Of_Event[day].Details && (
                <ul className="details-list text-black text-xl">
                  {record.Structure_Of_Event[day].Details.map((detail, idx) => (
                    <li key={idx} className="detail-item text-black text-xl">{detail}</li>
                  ))}
                </ul>
              )}

              <br/>
              
              {record.Structure_Of_Event[day].Competition && (
                <p className="competition text-black text-xl">{record.Structure_Of_Event[day].Competition}</p>
              )}
            </div>
          ))}
        </div>
      )}
      <p className="prize-pool"><strong>Prize Pool:</strong> {record.Prize_Pool}</p>
      <p className="venue"><strong>Venue:</strong> {record.Venue_Location}</p> 
    </div>
  );
};

export default ChemicalDetails;
