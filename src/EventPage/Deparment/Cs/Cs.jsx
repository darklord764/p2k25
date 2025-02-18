import React from 'react';
import Card from '../../Card';
import roboticImage from '../../../assets/robotic.jpeg';
import iplImage from '../../../assets/ipl.jpeg';
import { Link } from 'react-router-dom';

const Robotics = () => {
  const cardsData = [
    { title: 'Codeclash', image: roboticImage },
    { title: 'E-sport', image: iplImage },
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
          to={`/events/deparmental-events/cs/${card.title}`}
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