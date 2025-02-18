import React, { useEffect, useState, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import BackToTopButton from "./componants/BackToTop";
import SchedulePage from "./SchedulePage/SchedulePage";
import MainContent from "./MainContent";
import Team from "./Team/Team";
import CardGrid from "./EventPage/CardGrid";
import Workshop from "./EventPage/WorkShop/Workshop";
import DetailWorkshop from "./EventPage/WorkShop/DetailWorkshop";
import Exhibition from "./EventPage/Exibision/Exhibition";
import DetailExhibition from "./EventPage/Exibision/DetailExhibition";
import EventsPage from "./EventPage/EventsPage";
import Deparmental from "./EventPage/Deparmental/Deparmental";
import Esport from "./EventPage/E-sport/Esport";
import Robotics from "./EventPage/Robotics/Robotic";
import Texttile from "./EventPage/Deparment/Textile/Textile";
import TextileDetails from "./EventPage/Deparment/Textile/TextileDetails";
import CsDetails from "./EventPage/Deparment/Cs/CsDetails";
import Cs from "./EventPage/Deparment/Cs/Cs";
import ExtcDetails from "./EventPage/Deparment/Extc/ExtcDetails";
import Extc from "./EventPage/Deparment/Extc/Extc";
import Electrical from "./EventPage/Deparment/Electrical/Electrical";
import ElectricalDetails from "./EventPage/Deparment/Electrical/ElectricalDetails";
import Civil from "./EventPage/Deparment/Civil/Civil";
import CivilDetails from "./EventPage/Deparment/Civil/CivilDetails";
import Chemical from "./EventPage/Deparment/Chemical/Chemical";
import ChemicalDetails from "./EventPage/Deparment/Chemical/ChemicalDetails";
import Mechnical from "./EventPage/Deparment/Mechnical/Mechnical";
import MechnicalDetails from "./EventPage/Deparment/Mechnical/MechanicalDetails";
import './styles/loadingStyles.css';
import ESportDetails from "./EventPage/E-sport/E-SportDetails"
import RoboticsDetails from "./EventPage/Robotics/RoboticsDeatils";
import Other from "./EventPage/otherEvents/Other"
import OtherDetails from "./EventPage/otherEvents/OtherDeatails"



const Footer = React.lazy(() => import("./componants/Footer")); 

const App = () => {
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageElements = document.querySelectorAll('img');
    const totalImages = imageElements.length;
    let loadedImages = 0;

    const imageLoaded = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setImagesLoaded(true);
      }
    };

    if (totalImages === 0) {
      setImagesLoaded(true);
    } else {
      imageElements.forEach(img => {
        if (img.complete) {
          imageLoaded();
        } else {
          img.addEventListener('load', imageLoaded);
          img.addEventListener('error', imageLoaded);
        }
      });
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      imageElements.forEach(img => {
        img.removeEventListener('load', imageLoaded);
        img.removeEventListener('error', imageLoaded);
      });
    };
  }, []);

  const showPreloader = loading || !imagesLoaded;

  return (
    <div className="w-screen h-screen relative">
      {showPreloader ? (
        <div>
          <div className="flex justify-center items-center h-screen bg-[#000818] text-white">
            <div className="text-center">
              <h1 className="glitch1" data-glitch="Loading...">
                Loading...
              </h1>
              <h1 className="glitch2" data-glitch="Pragyaa">
                Pragyaa
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen bg-[#000818] text-white">
              <h1>Loading...</h1>
            </div>
          }
        >
          <Router>
            <AppContent />
          </Router>
        </Suspense>
      )}
    </div>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <Navbar isHomePage={location.pathname === '/'} />
      <Routes>
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/title-event" element={<CardGrid />} />
        <Route path="/events/title-event/others" element={<Other />} />
        <Route path="/events/title-event/others/:title" element={<OtherDetails />} />
        
        <Route path="/events/title-event/e-sport" element={<Esport />} />
        <Route path="/events/title-event/e-sport/:title" element={<ESportDetails />} />
        <Route path="/events/title-event/robotics" element={<Robotics/>} />
        <Route path="/events/title-event/robotics/:title" element={<RoboticsDetails/>}/>
        <Route path="/events/workshops" element={<Workshop />} />
        <Route path="/events/workshops/:title" element={<DetailWorkshop />} />
        <Route path="/events/deparmental-events/" element={<Deparmental />} />
        <Route path="/events/exhibitions/" element={<Exhibition />} />
        <Route path="/events/exhibitions/:title" element={<DetailExhibition />} />
        {/* //Deparmental */}
        <Route path="/events/deparmental-events/textile/" element={<Texttile/>} />
        <Route path="events/deparmental-events/textile/:title" element={<TextileDetails/>} />
        <Route path="/events/deparmental-events/cs/" element={<Cs/>} />
        <Route path="events/deparmental-events/cs/:title" element={<CsDetails/>} />
        <Route path="/events/deparmental-events/entc/" element={<Extc/>} />
        <Route path="events/deparmental-events/entc/:title" element={<ExtcDetails/>} />
        <Route path="/events/deparmental-events/electrical/" element={<Electrical/>} />
        <Route path="events/deparmental-events/electrical/:title" element={<ElectricalDetails/>} />
        <Route path="/events/deparmental-events/civil/" element={<Civil/>} />
        <Route path="events/deparmental-events/civil/:title" element={<CivilDetails/>} />
        <Route path="/events/deparmental-events/chemical/" element={<Chemical/>} />
        <Route path="events/deparmental-events/chemical/:title" element={<ChemicalDetails/>} />
        <Route path="/events/deparmental-events/mechanical/" element={<Mechnical/>} />
        <Route path="events/deparmental-events/mechanical/:title" element={<MechnicalDetails/>} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<MainContent />} /> 
      </Routes>
      <FooterVisibility />
      <BackToTopButton />
    </>
  );
};

const FooterVisibility = () => {
  const location = useLocation();

  return location.pathname === "/" ? (
    <Suspense fallback={<div>Loading Footer...</div>}>
      <Footer />
    </Suspense>
  ) : null;
};

export default App;
