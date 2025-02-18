import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './workshop.css';

const DetailWorkshop = () => {
  const { title } = useParams();
  const [workshop, setWorkshop] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkshopDetails = async () => {
      try {
        const response = await fetch('/Workshops.json');
        if (!response.ok) {
          throw new Error('Failed to fetch workshop details');
        }
        const data = await response.json();

        const normalizedTitle = decodeURIComponent(title).toLowerCase().trim();
        const selectedWorkshop = data.find(
          (item) => item.Title.toLowerCase().trim() === normalizedTitle
        );

        if (!selectedWorkshop) {
          throw new Error('Workshop not found');
        }

        setWorkshop(selectedWorkshop);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchWorkshopDetails();
  }, [title]);

  if (error) return <div className="error-message">{error}</div>;
  if (!workshop) return <div className="loading-message">Loading workshop details...</div>;

  return (
    <div className="workshop-detail">
      <h1 className="workshop-title">{workshop.Title}</h1>
      <p className="workshop-description">{workshop.Description}</p>
      <div className="info-boxes">
        <div className="info-box venue">
          <h3>Engg Domains : {workshop.Engg_Domains}</h3>
        </div>
        <div className="info-box prize">
          <h3>Venue/Location : {workshop.Venue_Location}</h3>
        </div>
      </div>
      
    </div>
  );
};

export default DetailWorkshop;