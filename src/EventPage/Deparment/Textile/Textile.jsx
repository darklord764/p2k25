import React from 'react';
import Card from '../../Card';
import zed from '../../../assets/website_icons/texquiz.png';
import iplImage from '../../../assets/website_icons/styleurpartner.png';
import abc from '../../../assets/website_icons/drawurdesign.png';
import { Link } from 'react-router-dom';

const Textile= () => {
  const cardsData = [
    { title: 'Tex Quiz', image: zed },
    { title: 'Style Your Partner', image: iplImage },
    { title: 'Draw Your Design', image: abc },
  ];

  return (
    <>
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
    Textile
        </h1>
    <div className='flex items-center justify-center'>
      <div className="card-grid">
      {cardsData.map((card, index) => (
        <Link 
          key={card.title} 
          to={`/events/deparmental-events/textile/${card.title}`}
        >
          
          <Card title={card.title} img={card.image} />
        </Link>
      ))}
    </div>
    </div>
    </>
  );
};

export default Textile;