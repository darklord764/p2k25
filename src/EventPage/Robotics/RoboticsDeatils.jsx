import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../DetailPage.css';

const RoboticsDetails = () => {
  const { title } = useParams();
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoboticsData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/Robotics.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const foundRecord = data.find((item) => 
          item.Title.toLowerCase() === title.toLowerCase()
        );
        
        if (!foundRecord) {
          throw new Error('Event not found');
        }
        
        setRecord(foundRecord);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoboticsData();
  }, [title]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-xl">Error: {error}</div>
      </div>
    );
  }

  if (!record) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-white text-xl">Event not found!</h2>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <h1 className="detail-title">{record.Title}</h1>
      <p className="detail-description">{record.Description}</p>
      {(
        <div className="detail-section">
          <h3 className="section-title">Rules</h3>
          <p className="section-text text-black">{record.Rules}</p>
          <p className="section-text">{record.Prize_Pool}</p>
          {/* <p className="section-text">{record.Venue_Location}</p> */}
        </div>
        
      )}
      <p className="venue">
        <strong>Prize:</strong> {record.Prize_Pool}
      </p>
      <p className="venue">
        <strong>Venue:</strong> {record.Venue_Location}
      </p>
    </div>
  );
};

export default RoboticsDetails;



