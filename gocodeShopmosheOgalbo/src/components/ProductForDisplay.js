import React from 'react'
import './ProductForDisplay.css'

const ProductForDisplay = ({ title, image, category, price, functioButton}) => {

    return (
        <div className="product-card">
            <p className="Product-description ">
                {title}
            </p>
            <div className="product-image">
                <img
                    src={image}
                    alt="dhsuagvdsahkd"
                />
            </div>
            <div className="product-info">
                <h5>{category}</h5>
                <h6>${price}</h6>
            </div>
            <button className='addButton'
                onClick={functioButton}
                tyle={{ cursor: "pointer" }}>
                Added to shopping cart
            </button>
        </div>
    )
}

export default ProductForDisplay


