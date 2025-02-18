import React from 'react';
import { Link } from 'react-router-dom';
import '../CardGrid.css';
import jr from '../../assets/EventsImages/junior.jpg';
import exhi from '../../assets/EventsImages/exhi.jpg';
import Card from '../Card';

const Exhibition = () => {
  const cardsData = [
    { title: 'Junior Scientist', image: jr },
    { title: 'Project Exhibition', image: exhi },
  ];

  return (
    <>
    <h1 className="text-white text-4xl font-semibold mb-8 text-center p-8">
    Exhibition
        </h1>
     <div className='flex justify-center items-center'>
     <div className="card-grid">
    
          {cardsData.map((card, index) => (
            <Link
              key={card.title}
              to={`/events/exhibitions/${card.title}`}
            >
              <Card title={card.title} img={card.image} />
            </Link>
          ))}
        </div>
  
     </div>
    </>
  );
};

export default Exhibition;
