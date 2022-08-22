import React from 'react'
import './ProductForDisplay.css'
import { useNavigate } from "react-router-dom";
const ProductForDisplay = ({ title, image, category, price, functioButton}) => {

    const navigate = useNavigate()
    
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
            <button onClick={() => navigate("/cart")}>go to cart</button>
        </div>
    )
}

export default ProductForDisplay


