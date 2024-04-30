import React from 'react';
import { Route, Routes } from "react-router-dom";
import TopBar from '../topbar/Topbar';
import PropertiesLongTerm from '../../pages/propertiesLongTerm/PropertiesLongTerm';
import PropertiesShortTerm from '../../pages/propertiesShortTerm/PropertiesShortTerm';
import PropertiesSales from '../../pages/propertiesSales/PropertiesSales';
import PropertiesAll from '../../pages/propertiesAll/PropertiesAll';
import Dashboard from '../../pages/dashboard/Dashboard';


export default function MainPanel({handleSidebar}) {
   
    return (
        <div className="mainPanel">
            <TopBar handleSidebar={handleSidebar}/>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/properties-long-term" element={<PropertiesLongTerm />} />
                <Route path="/properties-short-term" element={<PropertiesShortTerm />} />
                <Route path="/properties-all" element={<PropertiesAll />} />
                <Route path="/properties-sales" element={<PropertiesSales />} />
                <Route path="/a" element={<Dashboard />} />
           </Routes>
        </div>
    )
}