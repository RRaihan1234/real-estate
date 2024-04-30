import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from "react-router-dom";
import './topbar.css';

export default function TopBar({handleSidebar}) {
    let {pathname} = useLocation();
    return (
        <div className="topbar">
             <div className="topbarLeftPortion">
                <FontAwesomeIcon icon={faBars} className='iconBars' onClick={handleSidebar}/>
                <NavLink to="/" style={{color:'black',textDecoration:'none'}} >
                  <h2 className="logo">Real Estate Web App</h2>
                </NavLink>
             </div>
             <div className="topbarRightPortion">
                {pathname === '/' && <h5 className='menuText'>Dashboard</h5>}
                {pathname === '/properties-all' && <h5 className='menuText'>Properties --- All</h5>}
                {pathname === '/properties-long-term' && <h5 className='menuText'>Properties --- Long Term</h5>}
                {pathname === '/properties-short-term' && <h5 className='menuText'>Properties --- Short Term</h5>}
                {pathname === '/properties-sales' && <h5 className='menuText'>Properties --- Sales</h5>}
             </div>
        </div>
    )
}