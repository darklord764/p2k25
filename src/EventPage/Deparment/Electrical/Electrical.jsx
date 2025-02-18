import React from 'react';
import Card from '../../Card';
import roboticImage from '../../../assets/website_icons/voltage_voyage.webp';
import iplImage from '../../../assets/EventsImages/wire.jpg';
import { Link } from 'react-router-dom';

const Electrical = () => {
  const cardsData = [
    { title: 'Voltage Voyage', image: roboticImage },
    { title: 'Wire Whispering', image: iplImage },
  ];

  return (
    <>
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
    Electrical
        </h1>
    <div className='flex items-center justify-center'>
      <div className="card-grid">
      {cardsData.map((card, index) => (
        <Link 
          key={card.title} 
          to={`/events/deparmental-events/electrical/${card.title}`}
        >
          <Card title={card.title} img={card.image} />
          
        </Link>
      ))}
    </div>
    </div>
    </>
  );
};

export default Electrical;