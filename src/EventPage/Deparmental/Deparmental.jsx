import React from 'react';
import { Link } from 'react-router-dom';
import '../CardGrid.css';
import MegaQuiz from '../../assets/EventsImages/text.jpg';
import iplImage from '../../assets/EventsImages/extc.jpg';
import treasureImage from '../../assets/EventsImages/electrical.jpg';
import sharkImage from '../../assets/EventsImages/chemical.jpg';
import mockImage from '../../assets/EventsImages/mech.jpg';
import jammImage from '../../assets/EventsImages/civil.jpg';
import CSE from '../../assets/EventsImages/computer.jpg';
import Card from '../Card';


const Deparmental = () => {
  const cardsData = [
    // { title: 'computer & it', image: CSE },
    { title: 'civil', image: jammImage },
    { title: 'textile', image: MegaQuiz },
    { title: 'entc', image: iplImage },
    { title: 'electrical', image: treasureImage },
    { title: 'chemical', image: sharkImage },
    { title: 'mechanical', image: mockImage },
  ];

  return (
    <>
      <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
          Competition
      </h1>
      <div className='flex justify-center items-center'>
        <div className="card-grid">
          {cardsData.map((card, index) => (
            <Link
              key={card.title}
              to={`/events/deparmental-events/${card.title}`}
            >
              <Card title={card.title} img={card.image} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Deparmental;
