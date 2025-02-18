import React from 'react';

const FacultyCard = ({ name, designation, department, image, email, phone }) => {
  return (
    <div className="faculty-card">
      <div className="faculty-image">
        <img src={image} alt={name} />
      </div>
      <div className="faculty-info">
        <h3>{name}</h3>
        <p className="designation">{designation}</p>
        <p className="department">{department}</p>
        <div className="contact-info">
          <p><i className="fas fa-envelope"></i> {email}</p>
          <p><i className="fas fa-phone"></i> {phone}</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
