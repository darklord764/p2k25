import React, { useState } from "react";
// import "./SchedulePage.css"; 
import Squares from '../Background/Squares';
import SplashCursor from '../Curser/SplashCursor';
// import photo from './photo.jpg';

const SchedulePage = () => {
  const [activeDay, setActiveDay] = useState(1);

  const days = [
    { id: 1, date: "Feb 21, 2025" },
    { id: 2, date: "Feb 22, 2025" },
    { id: 3, date: "Feb 23, 2025" },
  ];

  const eventSchedules = {
    1: [
      { id: 1, name: "Opening/Inauguration Event", organizer: "PRAGYAA", timing: "10 AM - 11 AM", Venue: "Auditorium" },
      { id: 2, name: "Surveying Workshop", organizer: "CESA ", timing: "1 PM - 4 PM", Venue: "Civil Dept" },
      { id: 3, name: "CAD & CATIA", organizer: "PESA", timing: "1 PM - 4 PM", Venue: "Mechanical Dept" },
      { id: 4, name: "Surveying/Resume Building", organizer: "CESA", timing: "1 PM– 4 PM", Venue: "Civil Dept" },
      { id: 5, name: "RC Boat racing", organizer: "PRAGYAA", timing: "4 PM to 7 PM", Venue: "PMC" },
      { id: 6, name: "Valorant", organizer: "PRAGYAA", timing: " 5 PM onwards", Venue: "Comming soon" },
      { id: 7, name: "Technical Paper Presentation", organizer: "PRAGYAA", timing: "1 PM to 5 PM", Venue: "A4Hall/Seminar Hall" },
      { id: 8, name: "4.	Math – e - magic", organizer: "BMC", timing: "12 noon – 4 PM", Venue: "AB6" },
      { id: 9, name: "Voltage Voyage", organizer: "EESA", timing: "2 PM - 5 PM", Venue: "Electrical Dept" },
      { id: 10, name: "Tex Quiz", organizer: "TESA", timing: "2 PM – 5 PM", Venue: "Textile Dept" },
      { id: 11, name: "7.	Bridge Buildingt", organizer: "CESA", timing: " 3 PM - 6.30 PM", Venue: "Civil Dept" },
      { id: 12, name: "Coding Contest", organizer: "ITSA", timing: " 5 PM onwards", Venue: "IT Dept" },
      { id: 13, name: "BGMI", organizer: "MESA", timing: " 5 PM onwards", Venue: "IT Dept" },
      { id: 14, name: "Gear Based Puzzle", organizer: "MESA", timing: " 5 PM onwards", Venue: "Mech Dept" }, 
      { id: 15, name: "IPL auction", organizer: "PRAGYAA", timing: "7:30 PM Onwards", Venue: "Comming soon" },
    ],


    2: [
      { id: 1, name: "Python For AIML", organizer: "PRAGYAA", timing: "10 AM - 2 PM", Venue: "IT Dept" },
      { id: 2, name: "CAD & CATIA", organizer: "PESA", timing: "10 AM - 2 PM", Venue: "Prod Dept" },
      { id: 3, name: "Surveying/Resume Building", organizer: "CESA", timing: "12 AM  - 2PM", Venue: "Civil Dept" },
      { id: 4, name: "RC Car Racing(finals)", organizer: "PRAGYAA", timing: "2PM – onwards", Venue: "Ground" },
      { id: 5, name: "Pick & Place(round1)", organizer: "PRAGYAA", timing: "2PM – 6PM ", Venue: "PMC" },
      { id: 6, name: "Boat Racing", organizer: "PRAGYAA", timing: "2PM – 6PM ", Venue: "PMC" },
      { id: 7, name: "Paper Presentation (Domain2)", organizer: "ELITE", timing: "2 PM - 5 PM", Venue: "A4Hall/Seminar Hall" },
      { id: 8, name: "Chem Crafter", organizer: "CHESA", timing: "10 AM onwards", Venue: "Chem Dept" },
      { id: 9, name: "Town Planning", organizer: "CESA", timing: "5 PM – 8PM", Venue: "Civil Dept" },
      { id: 10, name: "CAD WAR(civil)", organizer: "CESA", timing: "1PM – 4PM", Venue: "Civil Dept" },
      { id: 11, name: "Style your Partner", organizer: "TESA", timing: "10 AM onwards", Venue: "Textile Dept" },
      { id: 12, name: "Shark Tank", organizer: "PESA", timing: "10 AM – 2PM", Venue: "A4 Hall" },
      { id: 13, name: "Astro Quest", organizer: "ANTRIX", timing: "10 AM – 2PM", Venue: "A3 Hall" },
      { id: 14, name: "Bridge Buster Challenge", organizer: "HACKIT", timing: "5 PM onwards", Venue: "CSE Dept" },
      { id: 15, name: "Mega Quiz", organizer: "ORATORY", timing: "4 PM onwards", Venue: "PMC" },
      { id: 16, name: "Tech Quest", organizer: "ELITE", timing: "10 AM onwards", Venue: "EXTC Dept" },
      { id: 17, name: "Free fire", organizer: "PRAGYAA", timing: "5 PM onwards", Venue:"comming soon" },
      { id: 18, name: "Chess Programmer", organizer: "PRAGYAA", timing: "5PM – 7PM", Venue:"comming soon" },
      // { id: 2, name: "", organizer: "PRAGYAA", timing: "", Venue:"comming soon" },
    ],


    3: [
      { id: 1, name: "Data Science Workshop", organizer: "PRAGYAA", timing: "12PM - 4 PM", Venue: "ML lab CSE/IT" },
      { id: 2, name: "Junior Scientist", organizer: "PRAGYAA", timing: "10 AM Onwards", Venue:"comming soon" },
      { id: 3, name: "Mock Placement", organizer: "PRAGYAA", timing: "10 AM onwards", Venue:"comming soon" },
      { id: 4, name: "Float a Boat", organizer: "CESA", timing: "10 AM onwards", Venue: "Civil Dept" },
      { id: 5, name: "Bridge Building Testing", organizer: "CESA", timing: "10 AM onwards", Venue: "Civil Dept" },
      { id: 6, name: "CAD WAR", organizer: "MESA", timing: "1 PM - 4 PM", Venue: "Mech Dept" },
      { id: 7, name: "Wire Whispering", organizer: "EESA", timing: "1 PM - 4 PM", Venue: "Electrical Dept" },
      { id: 8, name: "Chess", organizer: "PRAGYAA", timing: "10 AM onwards", Venue:"comming soon" },
      { id: 9, name: "Chem Crafter", organizer: "CHESA", timing: "10 AM onwards", Venue: "Chem Dept" },
      { id: 10, name: "COD", organizer: "PRAGYAA", timing: "10 AM onwards", Venue:"comming soon" },
      { id: 11, name: "Treasure Hunt", organizer: "PRAGYAA", timing: "1 PM – onwards", Venue:"comming soon" },
      { id: 12, name: "Draw your design", organizer: "TESA", timing: "5 PM onwards", Venue:"comming soon" },
      { id: 13, name: "5 PM onwards", organizer: "PRAGYAA", timing: "5 PM onwards", Venue:"comming soon" },
    ],
    
  };
  const handleDayClick = (dayId) => {
    setActiveDay(dayId);
  };

 
  return (
    <div className="root-container">
      <SplashCursor/>
      <style>{`
        .root-container {
          min-height: 100vh;
          width: 100%;
          position: relative;
        }

        body {
          margin: 0;
          padding: 0;
          color: white;
          background-image: url('./photo.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .schedule-page {
          position: relative;
          padding: 1rem;
          width: 100%;
          box-sizing: border-box;
        }

        .schedule-title {
          font-size: 2rem;
          margin-bottom: 10px;
          color: #fff;
          text-align: center;
        }

        .schedule-description {
          font-size: 1rem;
          margin-bottom: 15px;
          color: #aaa;
          text-align: center;
        }

        .schedule-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
          margin: 1rem 0;
        }

        .tab-button {
          background-color: #1c1f27;
          color: #fff;
          padding: 8px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 0.8rem;
        }

        .tab-button.active,
        .tab-button:hover {
          background-color: #ff007a;
        }

        .schedule-table {
          background-color: #1c1f27;
          border-radius: 10px;
          padding: 10px;
          margin: 1.5rem  ;
          box-shadow: 0 4px 10px rgba(191, 36, 36, 0.557);
        }

        .schedule-table h2 {
          color: red;
          text-align: center;
          margin-bottom: 10px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          color: #fff;
          table-layout: fixed;
        }

        table th,
        table td {
          padding: 8px 4px;
          text-align: center;
          word-wrap: break-word;
          font-size: 0.8rem;
        }

        table th {
          background-color: #2a2d38;
        }

        table td {
          vertical-align: middle;
        }

        tbody tr:nth-child(odd) {
          background-color: #22252f;
        }

        tbody tr:nth-child(even) {
          background-color: #2a2d38;
        }

        @media (max-width: 450px) {
          .schedule-title {
            font-size: 1.5rem;
          }

          .schedule-description {
            font-size: 0.9rem;
          }

          table {
            table-layout: fixed;
          }

          table th,
          table td {
            font-size: 0.7rem;
            padding: 6px 2px;
          }

          th:nth-child(1),
          td:nth-child(1) {
            width: 8%;
          }

          th:nth-child(2),
          td:nth-child(2) {
            width: 30%;
          }

          th:nth-child(3),
          td:nth-child(3) {
            width: 22%;
          }

          th:nth-child(4),
          td:nth-child(4) {
            width: 20%;
          }

          th:nth-child(5),
          td:nth-child(5) {
            width: 20%;
          }
        }
      `}</style>

      <Squares
        speed={0.5}
        squareSize={70}
        direction="diagonal"
        borderColor="#ff0000"
        hoverFillColor="#ff0000"
      />

      <div className="schedule-page">
        <h1 className="schedule-title">Events Schedule</h1>
        <p className="schedule-description">
          Experience the conference wherever you are. Register now for online access. 
          Tune in live for the keynotes and watch sessions on demand.
        </p>
        
        <div className="schedule-tabs">
          {days.map((day) => (
            <button
              key={day.id}
              className={`tab-button ${activeDay === day.id ? "active" : ""}`}
              onClick={() => handleDayClick(day.id)}
            >
              Day {day.id} <br /> {day.date}
            </button>
          ))}
        </div>

        <div className="schedule-table">
          <h2>{days.find((day) => day.id === activeDay)?.date}</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Events</th>
                <th>Organized By</th>
                <th>Timing</th>
                <th>Venue</th>
              </tr>
            </thead>
            <tbody>
              {eventSchedules[activeDay].map((event) => (
                <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{event.name}</td>
                  <td>{event.organizer}</td>
                  <td>{event.timing}</td>
                  <td>{event.Venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;