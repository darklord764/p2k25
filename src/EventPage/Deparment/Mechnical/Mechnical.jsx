import React from 'react';
import Card from '../../Card';
import roboticImage from '../../../assets/EventsImages/contra.jpg';
import rbo from '../../../assets/website_icons/gear_based_puzzle.png';
// import iplImage from '../../../assets/ipl.jpeg';
import { Link } from 'react-router-dom';

const Mechnical = () => {
  const cardsData = [
    { title: 'Contraption Cascade', image: roboticImage },
    { title: 'Gear Based Puzzle', image: rbo },
    // { title: 'E-sport', image: iplImage },
  ];

  return (
    <>
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
      Mechanical
    </h1>
    <div className='flex items-center justify-center'>
      <div className="card-grid">
      {cardsData.map((card, index) => (
        <Link 
          key={card.title} 
          to={`/events/deparmental-events/mechanical/${card.title}`}
        >
          <Card title={card.title} img={card.image} />
        </Link>
      ))}
    </div>
    </div>
    </>
  );
};

export default Mechnical;