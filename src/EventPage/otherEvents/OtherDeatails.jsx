import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../DetailPage.css'; // Make sure to import the CSS

const ESportDetails = () => {
  const { title } = useParams();
  const [record, setRecord] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Fetching the JSON data from the server
        const response = await fetch("/Creative.json");
        const data = await response.json();

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
          <h2 className="section-title">Rules :<p> {record.Rules}</p></h2>
        </div>
        
        {/* <div className="detail-section">
          <h2 className="section-title">Additional Information</h2>
          <p className="section-text">
            Experience a unique blend of creativity 
            and artistic expression in this 
            extraordinary exhibition.
          </p>
        </div> */}
      </div>
      
      <div className="prize-pool">
        <h2>Prize Pool : {record.Prize_Pool}</h2>
      </div>

      <div className="venue">
        <h2>Exhibition Venue :{record.Venue_Location} </h2>
      </div>
    </div>
  );
};

export default ESportDetails;
  