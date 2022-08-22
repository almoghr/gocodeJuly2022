import React from 'react'
import './ProductSorting.css' ;

const ProductSorting = () => {
    return (
        <div className="collection-sort">
            <label>Sort by:</label>
            <select>
                <option value="/">Featured</option>
                <option value="/">Best Selling</option>
                <option value="/">Alphabetically, A-Z</option>
                <option value="/">Alphabetically, Z-A</option>
                <option value="/">Price, low to high</option>
                <option value="/">Price, high to low</option>
                <option value="/">Date, new to old</option>
                <option value="/">Date, old to new</option>
            </select>
        </div>
    )
}

export default ProductSorting