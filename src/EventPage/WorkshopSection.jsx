import { Routes, Route } from 'react-router-dom'; 
import Workshop from './WorkShop/Workshop';
import DetailWorkshop from './WorkShop/DetailWorkshop'

const WorkshopSection = () => {
    return (
        <Routes>
            <Route path="/" element={<Workshop />} />
            <Route path="/title" element={<DetailWorkshop />} />
        </Routes>
    );
}

export default WorkshopSection;
