import React, { useContext } from 'react'
import MyContext from '../MyContext'
import './ProductFiltering.css'

const ProductFiltering = () => {

    const {listOpject, filterProductsByCategory} = useContext(MyContext)

   const categories = listOpject.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index)

   return (
        <div className="collection-sort">
            <label>Filter by:</label>
            <select onChange={(e) => filterProductsByCategory(e.target.value)}>
                <option value="/">All Products</option>
                {categories && categories.map(category => <option value={category}>{category}</option>)}
            </select>
        </div>)
}

export default ProductFiltering