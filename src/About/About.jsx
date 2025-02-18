import { useState } from 'react';
import './About.css';
import Invert_T from './Invert_T.png';
import Invert from './Invert.png';

function About() {
  const [count, setCount] = useState(0);

  return (
    <div className="about-container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0' }}>
      <div className="well" id="well" style={{ textAlign: 'center', margin: '0' }}>
        <div className="content">
          <div className="about panel" id="about_anchor">
            {/* Astronaut and Planet Images */}
            <img 
              id="astronaut" 
              alt="Astronaut" 
              src="https://res.cloudinary.com/dg6qtpags/image/upload/v1738229295/your-cloudinary-folder-name/vvsllhpqclla1zug3ave.png"
              style={{ width: '11rem', animation: 'float 4s ease-in-out infinite', margin: '0' }} 
            />
            {/* <img id="planet" alt="Planet" src={Invert} style={{ margin: '0' }} /> */}

            {/* About Section */}
            <div className="about-box" >
              <h1>About</h1>
              <p className="about-text">
                PRAGYAA is a national-level technical fiesta by SGGSIE&T, Nanded, where students compete in techno-social events focused on technology for societal welfare. With themes highlighting human welfare, it offers diverse competitions, from junior science to robotics, fostering excellence in technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
