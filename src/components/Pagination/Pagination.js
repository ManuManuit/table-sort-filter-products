import React from 'react'

import './Style.css'

const Pagination = ({ productsPerPage, totalProducts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i < Math.ceil(totalProducts / productsPerPage); i++){
        pageNumbers.push(i);
    }
    
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => {
                    return(
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)}>{number}</a>
                    </li>)
                })}
            </ul>
        </nav>
    )
}

export default Pagination
