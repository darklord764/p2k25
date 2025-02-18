import React from 'react';
import Card from '../Card';
import picandplace from '../../assets/EventsImages/Pick & place.jpg';
import rcCar from '../../assets/EventsImages/RC car racing.jpg';
import rcBoat from '../../assets/EventsImages/RC boat racing.jpg';
import { Link } from 'react-router-dom';

const Robotics = () => {
  const cardsData = [
    { title: 'Pick and Place', image: picandplace },
    { title: 'RC Car Racing', image: rcCar },
    { title: 'RC Boat', image: rcBoat },
  ];

  return (
    <>
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
    robotics
        </h1>
    <div className='flex items-center justify-center'>
      <div className="card-grid">
      {cardsData.map((card, index) => (
        <Link 
          key={card.title} 
          to={`/events/title-event/robotics/${card.title}`}
        >
          <Card title={card.title} img={card.image} />
        </Link>
      ))}
    </div>
    </div>
    
    </>
  );
};

export default Robotics;