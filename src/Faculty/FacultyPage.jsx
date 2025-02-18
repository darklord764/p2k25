import React, { useEffect, useState } from 'react';
import FacultyCard from './FacultyCard';
import facultyData from './facultyData.json';
import './FacultyPage.css';

const FacultyPage = () => {
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    setFaculty(facultyData);
  }, []);

  if (!faculty) return <div>Loading...</div>;

  return (
    <div className="faculty-page">
      <h1>Faculty Directory</h1>
      
      {/* Director Section */}
      <section className="director-section">
        <h2>Director</h2>
        <FacultyCard {...faculty.director} />
      </section>

      {/* Dean Section */}
      <section className="dean-section">
        <h2>Dean Student Affairs</h2>
        <FacultyCard {...faculty.dean} />
      </section>

      {/* Coordinators Section */}
      <section className="coordinators-section">
        <h2>Coordinators</h2>
        <div className="faculty-grid">
          {faculty.coordinators.map((coordinator) => (
            <FacultyCard key={coordinator.id} {...coordinator} />
          ))}
        </div>
      </section>

      {/* Departmental Coordinators Section */}
      <section className="dept-coordinators-section">
        <h2>Departmental Coordinators</h2>
        <div className="faculty-grid">
          {faculty.departmentalCoordinators.map((coordinator) => (
            <FacultyCard key={coordinator.id} {...coordinator} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;
