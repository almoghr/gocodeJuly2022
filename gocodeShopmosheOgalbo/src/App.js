import './App.css';
import SearchField from './components/SearchField'
import ProductsWindow from './components/ProductsWindow'
import React from 'react'

function App({AddProductToCart}) {


  return (
      <div className="flexColumn">
        <SearchField />
        <ProductsWindow AddProductToCart={AddProductToCart}/>
      </div>
  );
}

export default App;
