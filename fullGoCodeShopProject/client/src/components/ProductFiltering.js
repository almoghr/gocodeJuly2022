import React, { useContext } from 'react'
import MyContext from '../MyContext'
import './ProductFiltering.css'

const ProductFiltering = () => {

    const {filterProductsByCategory, categories} = useContext(MyContext)



    return (
        <div className="collection-sort">
            <label>Filter by:</label>
            <select onChange={(e) => filterProductsByCategory(e.target.value)}>
                <option value="/">All Products</option>
                {categories && categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
            </select>
        </div>)
}

export default ProductFiltering