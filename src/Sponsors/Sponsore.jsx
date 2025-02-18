import React from 'react';
import './Sponsors.css';
import spon_1 from './Spon-1.jpg'; 
import civilguruji from './civilguruji.png';
import aquasis from './aquasis.png';
import hcltech from './hcltech.png';
import sharada from './sharada.jpeg'
import mgb from '../assets/mgm.png'


const sponsors = [
  {
    logo: spon_1,
  },
  {
    logo: civilguruji,
  },
  {
    logo: aquasis, 
  },
  {
    logo:hcltech,
  },
  {
    logo:sharada,
  },
  {
    logo:mgb,
  }
  // {
  //   name: 'Sponsor Two',
  //   logo: spon_1,
  // },
  // {
  //   name: 'Sponsor Three',
  //   logo: spon_1,
  // },
];

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <div className="heading">
      <h1 style={{ textDecoration: "underline"}} className='text-xl'>Sponsors</h1>
      </div>
      <div className="sponsor-cards">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-card">
            <img src={sponsor.logo} alt={`${sponsor.name} Logo`} className="sponsor-logo-only" />
            {/* <h3 className="sponsor-name">{sponsor.name}</h3> */}
            {/* <p className="sponsor-description">{sponsor.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
