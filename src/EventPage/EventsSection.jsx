import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import CardGrid from "./CardGrid";
import DetailPage from "./DetailPage";

const EventSection = () => {
    return (
        <Routes>
            <Route path="/" element={<CardGrid />} />
            <Route path="/title" element={<DetailPage />} />
        </Routes>
    );
}

export default EventSection;
