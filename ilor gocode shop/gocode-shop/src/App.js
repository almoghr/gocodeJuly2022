import React, { useState, useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Products from "./components/Products";
import ShopContext from "./ShopContext";

function App() {
  const [productsArr, setProductsArr] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const [filteredProductsByCategory, setFilteredProductsByCategory] = useState(
    []
  );

  const filterByCat = (category) => {
    console.log(category);
    console.log(productsArr);
    const filteredArr = productsArr.filter(
      (product) => product.category === category
    );
    setFilteredProductsByCategory(filteredArr);
    console.log(filteredArr);
    console.log(filteredProductsByCategory);
  };

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductsArr(data));
  };

  const addToCart = (id) => {
    const productsToAdd = productsToRender.filter((item) => item.id === id);

    setProductsInCart(productsInCart.concat(productsToAdd));
  };

  const removeFromCart = (id) => {
    const productToRemove = productsInCart.filter((item) => item.id === id);

    if (!productToRemove.length) {
      console.log("item doesn't exist in the cart.");
      return;
    }
    const index = productsInCart.lastIndexOf(productToRemove[0]);
    // const newArr = productsInCart.splice(index, 1);

    // Had to use slice because it doesn't change the original arr.
    const result = [
      ...productsInCart.slice(0, index),
      ...productsInCart.slice(index + 1),
    ];

    setProductsInCart(result);
    // console.log(result);
    // console.log(newArr);
  };

  // useEffect(() => {
  //   console.log(productsInCart);
  // }, [productsInCart]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const productsToRender =
    filteredProductsByCategory.length === 0
      ? productsArr
      : filteredProductsByCategory;

  return (
    <ShopContext.Provider value={{ addToCart, removeFromCart }}>
      <div className="main-container">
        <Nav products={productsArr} filterByCat={filterByCat} />
        <Cart productsInCart={productsInCart} />

        <Products products={productsToRender} productsInCart={productsInCart} />
      </div>
    </ShopContext.Provider>
  );
}

export default App;
