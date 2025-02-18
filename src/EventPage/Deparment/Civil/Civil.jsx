import React from 'react';
import Card from '../../Card';
import roboticImage from '../../../assets/EventsImages/Float a bo(a)t.jpg';
import iplImage from '../../../assets/EventsImages/town.jpg';
import cad from '../../../assets/EventsImages/cad.jpg';
import sur from '../../../assets/EventsImages/sur.jpg';
import resume from '../../../assets/EventsImages/Bridge.jpg';
import bridge from '../../../assets/website_icons/bridge_building.jpg';
import { Link } from 'react-router-dom';

const Civil = () => {
  const cardsData = [
    { title: 'Float a boat', image: roboticImage },
    { title: 'Town Planning', image: iplImage },
    { title: 'Cad War', image: cad },
    { title: 'Bridge Building', image: bridge },
  
  ];

  return (
    <>
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
      Civil
    </h1>
    <div className='flex items-center justify-center'>
      <div className="card-grid">
      {cardsData.map((card, index) => (
        <Link 
          key={card.title} 
          to={`/events/deparmental-events/civil/${card.title}`}
        >
          <Card title={card.title} img={card.image} />
        </Link>
      ))}
    </div>
    </div>
    </>
  );
};

export default Civil;