import React from 'react'

import './Style.css';


const Product = (product) => {
    const { title, price, img, category } = product;
    return (
        <div className="card">
            <img className="medium" src={img} alt={title} />
            <div className="card-body">
                <span className="title">{title}</span>
                <span className="category">Category: {category}</span>
                <span className="price">{price}€</span>    
                </div>
            </div>
    )
}

export default Product