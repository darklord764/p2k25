import { Routes, Route } from 'react-router-dom'; 
import DetailCompitation from './DetailCompitation';
import Deparmental from './Deparmental/Deparmental';

const CompitationSection = () => {
    return (
        <Routes>
            <Route path="/" element={<Deparmental />} />
            <Route path="/title" element={<DetailCompitation />} />
        </Routes>
    );
}

export default CompitationSection;
