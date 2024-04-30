import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import './sidebar.css';
import classes from "../../styles/sidebarActiveMenu.module.css";


export default function Sidebar() {
    const [showItems, setShowItems] = useState(false);

    const handleDropDownItems = () => {
        setShowItems((prevState) => !prevState)
    }
   
    return (
        <div className="mainSidebar">
            <NavLink to="/" style={{color:'white',textDecoration:'none'}} className={(navInfo)=>(navInfo.isActive ? classes.active : "")}>
                <div className="sidebarParent">
                    <FontAwesomeIcon icon={faDashboard} className='icon'/>
                    <p className="menuItem">Dashboard</p>
                </div>
            </NavLink>

                <div className="sidebarParent" onClick={handleDropDownItems}>
                    <FontAwesomeIcon icon={faHome} className='icon'/>
                    <p className="menuItem">Properties</p>
                    {!showItems && <FontAwesomeIcon icon={faPlus} className="iconDropDown" />}
                    {showItems && <FontAwesomeIcon icon={faMinus} className="iconDropDown" />}
                </div>
            
           
           {showItems && <div className="dropdownParent">
                <NavLink to="/properties-sales" style={{color:'white',textDecoration:'none'}} className={(navInfo)=>(navInfo.isActive ? classes.active : "")}>
                        <div className='dropdownItems'>- Sales</div>
                </NavLink>
                <NavLink to="/properties-short-term" style={{color:'white',textDecoration:'none'}} className={(navInfo)=>(navInfo.isActive ? classes.active : "")}>
                        <div className='dropdownItems'>- Short Term</div>
                </NavLink>
                <NavLink to="/properties-long-term" style={{color:'white',textDecoration:'none'}} className={(navInfo)=>(navInfo.isActive ? classes.active : "")}>
                        <div className='dropdownItems'>- Long Term</div>
                </NavLink>
                <NavLink to="/properties-all" style={{color:'white',textDecoration:'none'}} className={(navInfo)=>(navInfo.isActive ? classes.active : "")}>
                        <div className='dropdownItems'>- All</div>
                </NavLink>
           </div>}
        </div>
    )
}