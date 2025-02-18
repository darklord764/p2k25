import React, { useEffect, useState } from "react";
import CardGrid from './CardGrid';
import DetailPage from './DetailPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailWorkshop from './WorkShop/DetailWorkshop';
import Workshop from './WorkShop/Workshop';
import Deparmental from "./Deparmental/Deparmental";
import DetailCompetition from './Deparmental/DetailCompetition';
import Exhibition from './Exibision/Exhibition';
import DetailExhibition from './Exibision/DetailExhibition';
import EventsPage from './EventsPage';

function EventRoutes() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<EventsPage />} />
          <Route path="/title-event" element={<CardGrid />} />
          <Route path="/detail/:title" element={<DetailPage />} />
          <Route path="/workshops" element={<Workshop />} />
          <Route path="/workshops/detail/:title" element={<DetailWorkshop />} />
          <Route path="/competitions" element={<Deparmental />} />
          <Route path="/competitions/detail/:title" element={<DetailCompetition />} />
          <Route path="/exhibitions" element={<Exhibition />} />
          <Route path="/exhibitions/detail/:title" element={<DetailExhibition />} />
        </Routes>
      </Router>
    </div>
  );

}

export default EventRoutes;
