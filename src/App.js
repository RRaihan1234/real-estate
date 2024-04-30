import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import MainPanel from './components/mainPanel/MainPanel';
import './App.css'

export default function App() {
    const [showSidebar, setShowSidebar] = useState(true);
    
    const handleSidebar = () => {
          setShowSidebar((prevState)=>!prevState);
    }

    return (
        <div className="App">
           {showSidebar && <div className="sidebar">
             <Sidebar />
           </div>}
           <div className="mainPanel">
             <MainPanel handleSidebar={handleSidebar}/>
            </div>
        </div>
    )
}
        