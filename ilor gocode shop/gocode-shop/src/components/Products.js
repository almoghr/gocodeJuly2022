import React, { useState, useEffect } from "react";
import Product from "./Product";
import Loader from "./Loader";
import "./Products.css";

const Products = ({ products, productsInCart }) => {
  const productComponnents = products.map((product) => (
    <Product
      key={product.id}
      productInfo={product}
      productsInCart={productsInCart}
    />
  ));

  // console.log(productsArr);

  return (
    <>
      {productComponnents.length === 0 && <Loader />}
      <section className="products">{productComponnents}</section>
    </>
  );
};

export default Products;
