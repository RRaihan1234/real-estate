import React from "react";

import "./pagination.css";

const Pagination = ({
    appartmentsPerPage,
    setCurrentPage,
    currentPage,
    setAppartmentsPerPage,
    resultantAppartments
}) => {

    let pages = [];

    console.log(currentPage)

    for (let i = 1; i <= Math.ceil(resultantAppartments.length / appartmentsPerPage); i++) {
       if(resultantAppartments.length >= appartmentsPerPage || (resultantAppartments.length > 0 && resultantAppartments.length < appartmentsPerPage)){
            pages.push(i);
        }
    }

    const handleChange = (e) => {
        setAppartmentsPerPage(e.target.value)
        setCurrentPage(1)
    }

    return(
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(page)}
                            className={page == currentPage ? "active" : ""}>
                            {page}
                       </button>
                );
            })}
             <select className='appartmentsPerPage' name="appartmentsPerPage" id="appartmentsPerPage" onChange={handleChange} value={appartmentsPerPage}>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
            </select>
        </div>
    );
};

export default Pagination;