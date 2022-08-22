import React from 'react'
import './SearchField.css'
import ProductFiltering from './ProductFiltering'
import ProductSorting from './ProductSorting'

const SearchField = () => {


  return (
    <nav className="product-filter">
      <h1>welcome to Moshe Ogalbo store!</h1>

      <div className="sort">
        <ProductFiltering />
        <ProductSorting />

      </div>
    </nav>
  )
}

export default SearchField