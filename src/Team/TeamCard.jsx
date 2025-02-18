import React from "react";
import "./Team.css";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const TeamCard = ({ name, position, image, instagram, linkedin, email }) => {
  return (
    <div className="profile-card mt-3 pt-3">
      <div className="img">
        <img src={image} alt={name} />
      </div>
      <div className="caption mb-3 pt-2">
        <h5 className="text-white mt-4">{name}</h5>
        <p>{position}</p>
    
      </div>
    </div>
    
  );
};

export default TeamCard;