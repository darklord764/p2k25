import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../DetailPage.css';

const CivilDetails = () => {
  const { title } = useParams();
  const [record, setRecord] = useState(null);

  useEffect(() => {
    fetch('/CESA.json')  // Ensure correct path to JSON file
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

      { (
        <div className="detail-section">
          <h3 className="section-title">Rules : </h3>
          <h3 className="section-text text-black text-2lg">{record.Rules}</h3>  {/* Line breaks preserved */}
        </div>
      )}

      <p className="venue"><strong>Venue:</strong> {record.Venue_Location}</p>
      
    </div>
  );
};

export default CivilDetails ;
