import React from 'react';
import Card from '../../Card';
import roboticImage from '../../../assets/website_icons/paper_presentation.jpg';
import iplImage from '../../../assets/website_icons/techquest.png';
import { Link } from 'react-router-dom';

const Extc = () => {
  const cardsData = [
    { title: 'Paper Presentation', image: roboticImage },
    { title: 'Tech Quest ', image: iplImage },
  ];

  return (
    <>
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
      Electronics
    </h1>
    <div className='flex items-center justify-center'>
      <div className="card-grid">
      {cardsData.map((card, index) => (
        <Link 
          key={card.title} 
          to={`/events/deparmental-events/entc/${card.title}`}
        >
          <Card title={card.title} img={card.image} />
        </Link>
      ))}
    </div>
    </div>
    </>
  );
};

export default Extc;