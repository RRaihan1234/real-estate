import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath, faHouse, faEuro } from '@fortawesome/free-solid-svg-icons'

import SearchForm from '../../components/form/SearchForm';
import allApartmentsData from '../../data/allApartment';
import Pagination from '../../components/pagination/Pagination'
import './propertiesAll.css';

export default function Propertiesall() {

    const [allAppartments, setallAppartments] = useState(allApartmentsData);

    const [currentPage, setCurrentPage] = useState(1);
    const [appartmentsPerPage, setAppartmentsPerPage] = useState(10);

    const lastAppartmentIndex = currentPage * appartmentsPerPage;
    const firstAppartmentIndex = lastAppartmentIndex - appartmentsPerPage;

    const currentAppartments = allAppartments.slice(firstAppartmentIndex, lastAppartmentIndex);
   
    return (
        <>
          <SearchForm setallAppartments={setallAppartments} setCurrentPage={setCurrentPage}/>
          {currentAppartments.length > 0 && <div className="parentApartment">
            {currentAppartments.map((item)=>{
                return (
                       <div className="singleApartment" key={Math.random()}>
                                <img className="apartmentImg" src={require(`../../images/${item.img}`)} alt='apartment'></img>
                                <div className="">{item.location}</div>
                                {item.type !== 'sales' && <div className="">{item.price} <FontAwesomeIcon icon={faEuro} /> / month</div>}
                                {item.type === 'sales' && <div className="">{item.price} <FontAwesomeIcon icon={faEuro} /></div>}
                                <span className="bedroom"><FontAwesomeIcon icon={faBed} /> {item.bedroom}</span>
                                <span className="bathroom"><FontAwesomeIcon icon={faBath} /> {item.bathroom}</span>
                                <span className="size"><FontAwesomeIcon icon={faHouse} /> {item.size} m<sup>2</sup></span>
                      </div>
                )
            })}
         </div>}
         {currentAppartments.length <= 0 && <h3 className='nothing'>Nothing is found.</h3>}
         {currentAppartments.length > 0 && 
               <Pagination 
                    appartmentsPerPage={appartmentsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    setAppartmentsPerPage={setAppartmentsPerPage}
                    resultantAppartments={allAppartments}
                />}
        </>
        
    )
}