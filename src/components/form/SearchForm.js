import React, { useState } from 'react';
import './searchForm.css';
import flag from '../../images/flag.png';
import { useLocation } from "react-router-dom";
import longTermApartmentsData from '../../data/longTermApartment';
import ShortTermApartmentsData from '../../data/shortTermApartment';
import salesApartmentsData from '../../data/salesApartment';
import allApartmentsData from '../../data/allApartment';

export default function SearchForm({setLongTermAppartments, setShortTermAppartments, setsalesAppartments, setallAppartments, setCurrentPage }) {

    const [location, setLocation] = useState('any');
    const [bedroom, setBedroom] = useState('any');
    const [bathroom, setBathroom] = useState('any');
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');

    const {pathname} = useLocation();

    const handleSubmit = (e) => {
       e.preventDefault();

       //Long Term Appartments Starts
       if(pathname==="/properties-long-term"){
                let appartmentsLongTermAfterSearching = [];

            //location filtering starts
                    if(location === 'any'){
                        appartmentsLongTermAfterSearching = longTermApartmentsData;
                    }else{
                        appartmentsLongTermAfterSearching = longTermApartmentsData.filter((item)=>item.location.includes(location))
                    }
            //location filtering ends

            //bedroom filtering starts
                    if(!bedroom || bedroom === 'any'){
                        appartmentsLongTermAfterSearching = appartmentsLongTermAfterSearching;
                    }else{
                        appartmentsLongTermAfterSearching = appartmentsLongTermAfterSearching.filter((item)=>item.bedroom === bedroom)
                    }
            //bedroom filtering ends

            //bathroom filtering starts
                    if(!bathroom || bathroom === 'any'){
                        appartmentsLongTermAfterSearching = appartmentsLongTermAfterSearching;
                    }else{
                        appartmentsLongTermAfterSearching = appartmentsLongTermAfterSearching.filter((item)=>item.bathroom === bathroom)
                    }
            //bathroom filtering ends

            //price filtering starts
                if(!priceFrom && !priceTo){
                    appartmentsLongTermAfterSearching = appartmentsLongTermAfterSearching;
                }else if(priceFrom && !priceTo){
                    appartmentsLongTermAfterSearching = appartmentsLongTermAfterSearching.filter((item)=>parseFloat(item.price) >= parseFloat(priceFrom))
                }else if(!priceFrom && priceTo){
                    appartmentsLongTermAfterSearching = appartmentsLongTermAfterSearching.filter((item)=>parseFloat(item.price) <= parseFloat(priceTo))
                }else{
                    appartmentsLongTermAfterSearching = appartmentsLongTermAfterSearching.filter((item)=>parseFloat(item.price) >= parseFloat(priceFrom) && parseFloat(item.price) <= parseFloat(priceTo))
                }
            //price filtering ends

            setLongTermAppartments(appartmentsLongTermAfterSearching)
            setCurrentPage(1)
            }
            //Long Term Appartments Ends



            //Short Term Appartments Starts
                    if(pathname==="/properties-short-term"){
                        let appartmentsShortTermAfterSearching = [];

                    //location filtering starts
                            if(location === 'any'){
                                appartmentsShortTermAfterSearching = ShortTermApartmentsData;
                            }else{
                                appartmentsShortTermAfterSearching = ShortTermApartmentsData.filter((item)=>item.location.includes(location))
                            }
                    //location filtering ends

                    //bedroom filtering starts
                            if(!bedroom || bedroom === 'any'){
                                appartmentsShortTermAfterSearching = appartmentsShortTermAfterSearching;
                            }else{
                                appartmentsShortTermAfterSearching = appartmentsShortTermAfterSearching.filter((item)=>item.bedroom === bedroom)
                            }
                    //bedroom filtering ends

                    //bathroom filtering starts
                            if(!bathroom || bathroom === 'any'){
                                appartmentsShortTermAfterSearching = appartmentsShortTermAfterSearching;
                            }else{
                                appartmentsShortTermAfterSearching = appartmentsShortTermAfterSearching.filter((item)=>item.bathroom === bathroom)
                            }
                    //bathroom filtering ends

                    //price filtering starts
                        if(!priceFrom && !priceTo){
                            appartmentsShortTermAfterSearching = appartmentsShortTermAfterSearching;
                        }else if(priceFrom && !priceTo){
                            appartmentsShortTermAfterSearching = appartmentsShortTermAfterSearching.filter((item)=>parseFloat(item.price) >= parseFloat(priceFrom))
                        }else if(!priceFrom && priceTo){
                            appartmentsShortTermAfterSearching = appartmentsShortTermAfterSearching.filter((item)=>parseFloat(item.price) <= parseFloat(priceTo))
                        }else{
                            appartmentsShortTermAfterSearching = appartmentsShortTermAfterSearching.filter((item)=>parseFloat(item.price) >= parseFloat(priceFrom) && parseFloat(item.price) <= parseFloat(priceTo))
                        }
                    //price filtering ends

                    setShortTermAppartments(appartmentsShortTermAfterSearching)
                    setCurrentPage(1)
            }
          //Short Term Appartments Ends

           
          //sales Appartments Starts
                if(pathname==="/properties-sales"){
                    let appartmentssalesAfterSearching = [];

                //location filtering starts
                        if(location === 'any'){
                            appartmentssalesAfterSearching = salesApartmentsData;
                        }else{
                            appartmentssalesAfterSearching = salesApartmentsData.filter((item)=>item.location.includes(location))
                        }
                //location filtering ends

                //bedroom filtering starts
                        if(!bedroom || bedroom === 'any'){
                            appartmentssalesAfterSearching = appartmentssalesAfterSearching;
                        }else{
                            appartmentssalesAfterSearching = appartmentssalesAfterSearching.filter((item)=>item.bedroom === bedroom)
                        }
                //bedroom filtering ends

                //bathroom filtering starts
                        if(!bathroom || bathroom === 'any'){
                            appartmentssalesAfterSearching = appartmentssalesAfterSearching;
                        }else{
                            appartmentssalesAfterSearching = appartmentssalesAfterSearching.filter((item)=>item.bathroom === bathroom)
                        }
                //bathroom filtering ends

                //price filtering starts
                    if(!priceFrom && !priceTo){
                        appartmentssalesAfterSearching = appartmentssalesAfterSearching;
                    }else if(priceFrom && !priceTo){
                        appartmentssalesAfterSearching = appartmentssalesAfterSearching.filter((item)=>parseFloat(item.price) >= parseFloat(priceFrom))
                    }else if(!priceFrom && priceTo){
                        appartmentssalesAfterSearching = appartmentssalesAfterSearching.filter((item)=>parseFloat(item.price) <= parseFloat(priceTo))
                    }else{
                        appartmentssalesAfterSearching = appartmentssalesAfterSearching.filter((item)=>parseFloat(item.price) >= parseFloat(priceFrom) && parseFloat(item.price) <= parseFloat(priceTo))
                    }
                //price filtering ends

                setsalesAppartments(appartmentssalesAfterSearching)
                setCurrentPage(1)
                }
           //sales Appartments Ends



           //all Appartments Starts
                if(pathname==="/properties-all"){
                    let appartmentsallAfterSearching = [];

                //location filtering starts
                        if(location === 'any'){
                            appartmentsallAfterSearching = allApartmentsData;
                        }else{
                            appartmentsallAfterSearching = allApartmentsData.filter((item)=>item.location.includes(location))
                        }
                //location filtering ends

                //bedroom filtering starts
                        if(!bedroom || bedroom === 'any'){
                            appartmentsallAfterSearching = appartmentsallAfterSearching;
                        }else{
                            appartmentsallAfterSearching = appartmentsallAfterSearching.filter((item)=>item.bedroom === bedroom)
                        }
                //bedroom filtering ends

                //bathroom filtering starts
                        if(!bathroom || bathroom === 'any'){
                            appartmentsallAfterSearching = appartmentsallAfterSearching;
                        }else{
                            appartmentsallAfterSearching = appartmentsallAfterSearching.filter((item)=>item.bathroom === bathroom)
                        }
                //bathroom filtering ends

                //price filtering starts
                    if(!priceFrom && !priceTo){
                        appartmentsallAfterSearching = appartmentsallAfterSearching;
                    }else if(priceFrom && !priceTo){
                        appartmentsallAfterSearching = appartmentsallAfterSearching.filter((item)=>parseFloat(item.price) >= parseFloat(priceFrom))
                    }else if(!priceFrom && priceTo){
                        appartmentsallAfterSearching = appartmentsallAfterSearching.filter((item)=>parseFloat(item.price) <= parseFloat(priceTo))
                    }else{
                        appartmentsallAfterSearching = appartmentsallAfterSearching.filter((item)=>parseFloat(item.price) >= parseFloat(priceFrom) && parseFloat(item.price) <= parseFloat(priceTo))
                    }
                //price filtering ends

                setallAppartments(appartmentsallAfterSearching)
                setCurrentPage(1)
                }
          //all Appartments Ends



    }

    const handleChange = (e)=> {
        if(e.target.name==="location"){
            setLocation(e.target.value)
        }else if(e.target.name==="bedroom"){
            setBedroom(e.target.value)
        }else if(e.target.name==="bathroom"){
            setBathroom(e.target.value)
        }else if(e.target.name==="price_to"){
            setPriceTo(e.target.value)
        }else{
            setPriceFrom(e.target.value)
        }
    }

    const handleClear = () => {
        setLocation('any')
        setBedroom('any')
        setBathroom('any')
        setPriceFrom('')
        setPriceTo('')
    }
   
    return (
        <div className="">
           <form onSubmit={handleSubmit}>
                <div className="parentForm">
                    <div className="location">
                        <img className='flag' src={flag}></img>
                        <label>ES Location : </label>
                        <select name="location" id="location" onChange={handleChange} value={location}>
                            <option value="any">Any</option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="Madrid">Madrid</option>
                        </select>
                    </div>
                    <div>
                        <label>Bedroom : </label>
                        <select name="bedroom" id="bedroom" onChange={handleChange} value={bedroom}>
                            <option value="any">Any</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div>
                        <label>Bathroom : </label>
                        <select name="bathroom" id="bathroom" onChange={handleChange} value={bathroom}>
                            <option value="any">Any</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div>
                        <label>Price From (&euro;) : </label>
                        <input type='number' name='price_from' onChange={handleChange} value={priceFrom}/>
                    </div>
                    <div>
                        <label>Price To (&euro;) : </label>
                        <input type='number' name="price_to" onChange={handleChange} value={priceTo}/>
                    </div>
                    <div><button type="button" className='clrBtn' onClick={handleClear}>Clear</button></div>
                    <div><button className='searchBtn' type="submit">Search</button></div>
                </div>
           </form>
        </div>
    )
}