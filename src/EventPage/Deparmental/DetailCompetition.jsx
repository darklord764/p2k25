import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../DetailPage.css';

const DetailCompitation = () => {
  const { title } = useParams();
  const location = useLocation();
  const [record, setRecord] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch('/Compi.json'); // Fetch from public folder
        if (!response.ok) {
          throw new Error('Failed to fetch records');
        }
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
    return <h2 className="not-found">{error}</h2>;
  }

  if (!record) {
    return <h2 className="not-found">Loading...</h2>;
  }

  return (
    
    <div className="detail-container">
      <h1 className="detail-title">{record.Title}</h1>
      <p className="detail-description">{record.Description}</p>

      <div className="detail-section">
        <h3 className="section-title">Engineering Domains:</h3>
        <p className="section-text">{record["Engg Domains"]}</p>
      </div>

      <p className="venue"><strong>Venue:</strong> {record.Venue_Location}</p>
      {location.state?.image && <img src={location.state.image} alt={record.Title} />}
    </div>

  );
};

export default DetailCompitation;
