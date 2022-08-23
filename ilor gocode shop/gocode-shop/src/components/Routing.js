import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "../App";
import Cart from "./Cart";

const Routing = () => {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="cart">Cart</Link>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
