import './App.css';
import SearchField from './components/SearchField'
import ProductsWindow from './components/ProductsWindow'
import  MyContext  from './MyContext'
import React, { useEffect, useState } from 'react'
import ProductForDisplay from './components/ProductForDisplay'

function App() {

   const [listOpject, setListOpject] = useState([])
   const [filteredProducts, setFilteredProducts] = useState([])
   const [cart, setCart] = useState([])
   
  const getProductsApi = async () => {
    const test = 'https://fakestoreapi.com/products/'
    const response = await fetch(test)
    const data = await response.json()
    setListOpject(data)
  }

  useEffect(()=>{getProductsApi()},[])

  const AddProductToCart = (product) => {
    const productInCart = cart.findIndex(item => item.id === product.id)
    if(productInCart === -1){
      const newProductToCart = {...product, amount:1}
      setCart(prev => [...prev, newProductToCart])
    } else{
      const newCart = [...cart]
      newCart[productInCart].amount++
      setCart(newCart)
    }
  }

  useEffect(()=>{console.log(cart)},[cart])

  const filterProductsByCategory = (category) => {
    if(category === "/"){
      setFilteredProducts(listOpject)
      return
    }
    const filteredItems = listOpject.filter(product => product.category === category)
    setFilteredProducts(filteredItems)
  }


  return (
    <MyContext.Provider value={{ listOpject, filterProductsByCategory, filteredProducts }}>
      <div className="flexColumn">
        <SearchField />
        <ProductsWindow AddProductToCart={AddProductToCart}/>
      </div>
    </MyContext.Provider>
  );
}

export default App;
