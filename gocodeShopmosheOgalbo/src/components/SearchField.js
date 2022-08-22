import React from 'react'
import './SearchField.css'
import ProductFiltering from './ProductFiltering'
import ProductSorting from './ProductSorting'
import { useNavigate } from "react-router-dom";

const SearchField = () => {
  const navigate = useNavigate()


  return (
    <nav className="product-filter">
      <div>
      <h1>welcome to Moshe Ogalbo store!</h1>
      <button onClick={() => navigate("cart")}>CART</button>
      </div>
      <div className="sort">
        <ProductFiltering />
        <ProductSorting />

      </div>
    </nav>
  )
}

export default SearchField