import React, { useState, useEffect } from "react";
import App from "../App";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import NotFound from "./NotFound";
import MyContext from "../MyContext";

const Routing = () => {
    let isLoggedIn = true
  const [listOpject, setListOpject] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProductsApi = async () => {
    const test = "https://fakestoreapi.com/products/";
    const response = await fetch(test);
    const data = await response.json();
    setListOpject(data);
  };

  useEffect(() => {
    getProductsApi();
  }, []);

  const AddProductToCart = (product) => {
    const productInCart = cart.findIndex((item) => item.id === product.id);
    if (productInCart === -1) {
      const newProductToCart = { ...product, amount: 1 };
      setCart((prev) => [...prev, newProductToCart]);
    } else {
      const newCart = [...cart];
      newCart[productInCart].amount++;
      setCart(newCart);
    }
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const filterProductsByCategory = (category) => {
    if (category === "/") {
      setFilteredProducts(listOpject);
      return;
    }
    const filteredItems = listOpject.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filteredItems);
  };

  const isAdmin = false
  return (
    <MyContext.Provider
      value={{ listOpject, filterProductsByCategory, filteredProducts, cart }}
    >
      <BrowserRouter>
        <Link to="/"> home </Link>
        <Link to="/about"> about </Link>
        <Link to="/cart"> cart </Link>
        {isAdmin && <Link to="/admin">admin</Link>}
        {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<App AddProductToCart={AddProductToCart} />}/>
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="admin" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        ) :
        <Routes>
          <Route path="login" element={<NotFound />} />
          <Route path="register" element={<NotFound />} />
        </Routes>}
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default Routing;
