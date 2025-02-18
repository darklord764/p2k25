import React from 'react';
import './ProfileCard.css'

const ProfileCard = ({ user }) => {
  return (
    <div className="infocardContainer">
      <div id="main">
        <img
          src={user.image}
          alt={user.username}
        />
      </div>
      <div id="textbois">
        <h2>{user.username}</h2>
        <h4>{user.designation}</h4>
        <a href="mailto:limecicila@gmail.com">{user.email}</a>
        <div id="hotlinks">
          <a href={user.instagram} target="_blank" rel="noopener noreferrer">
            <img
              id="codepenio"
              src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png"
              alt="Instagram"
            />
          </a>
          <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
            <img
              id="codepenio"
              src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
