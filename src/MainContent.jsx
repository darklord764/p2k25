import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import ContentBox from "./componants/ContentBox";
import FinalGallery from "./componants/ImagesGallery/FinalGallery";
import GuestBox from "./componants/GuestBox";
import FAQPage from "./Faq/Faq";
import Map from "./componants/Map";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
  import Home from "./pages/Home/Home";
  // import "./App.css";
import { scroller } from "react-scroll";
import BackToTopButton from "./componants/BackToTop";
import Sponsors from "./Sponsors/Sponsore";
// import SchedulePage from "./SchedulePage/SchedulePage";
// import Event from "./EventPage";
import Footer from "./componants/Footer";
import EventRoutes from "./EventPage/EventRoutes";
import SplashCursor from "./Curser/SplashCursor";


const MainContent = () => {
    return (
      <>
      <SplashCursor/>

        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <Home />
        </div>
        <div className="relative z-10 bg-transparent">
          <div id="contentBox"><ContentBox /></div>
          <div id="about"><About /></div>
          {/* <div id="guestbox"><EventRoutes /></div> */}
          <div id="guestbox"><GuestBox /></div>
          <div id="gallery"><FinalGallery /></div>
          <div id="sponsors"><Sponsors /></div>
          <div id="faqs"><FAQPage /></div>
          <div id="map"><Map /></div>
        </div>
      </>
    );
  };

  
  export default MainContent;