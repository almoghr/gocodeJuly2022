import './App.css';
import SearchField from './components/SearchField'
import ProductsWindow from './components/ProductsWindow'
import React from 'react'
import CustomisedButton from './components/CustomisedButton';

function App({AddProductToCart}) {


  return (
      <div className="flexColumn">
        <CustomisedButton/>
        <SearchField />
        <ProductsWindow AddProductToCart={AddProductToCart}/>
      </div>
  );
}

export default App;
