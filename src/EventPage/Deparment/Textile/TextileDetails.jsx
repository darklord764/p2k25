import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../DetailPage.css';

const TextileDetails = () => {
 const { title } = useParams();  // Extracts the 'title' parameter from the URL
 const [record, setRecord] = useState(null);  // State to store the fetched record
 const [loading, setLoading] = useState(true);  // State to handle loading
 const [error, setError] = useState(null);  // State to handle errors

 useEffect(() => {
   const fetchRoboticsData = async () => {
     try {
       setLoading(true);
       setError(null);
       
       const response = await fetch('/TESA.json');  // Fetches data from the JSON file
       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }
       
       const data = await response.json();  // Parses the JSON response
       const foundRecord = data.find((item) => 
         item.Title.toLowerCase() === title.toLowerCase()  // Finds the record matching the title
       );
       
       if (!foundRecord) {
         throw new Error('Event not found');
       }
       
       setRecord(foundRecord);  // Sets the found record to state
     } catch (err) {
       setError(err.message);  // Sets the error message to state
     } finally {
       setLoading(false);  // Sets loading to false
     }
     
   };

   fetchRoboticsData();
 }, [title]);

 if (loading) {
   return (
     <div className="flex items-center justify-center min-h-screen">
       <div className="text-white text-xl">Loading...</div>
     </div>
   );
 }

 if (error) {
   return (
     <div className="flex items-center justify-center min-h-screen">
       <div className="text-red-500 text-xl">Error: {error}</div>
     </div>
   );
 }

 if (!record) {
   return (
     <div className="flex items-center justify-center min-h-screen">
       <h2 className="text-white text-xl">Event not found!</h2>
     </div>
   );
 }

 return (
   <div className="detail-container">
     <h1 className="detail-title">{record.Title}</h1>
     <p className="detail-description">{record.Description}</p>
     {(
       <div className="detail-section">
        <h1 className="section-title text-black">Rules :</h1>
         <h2 className="text-black text-2xl">{record.Rules}</h2>
       </div>
     )}
   <p className="venue">
       <strong>Price:</strong> {record.Prize_Pool}
     </p>

     <p className="venue">
       <strong>Venue:</strong> {record.Venue_Location}
     </p>
   </div>
 );
};

export default TextileDetails;
