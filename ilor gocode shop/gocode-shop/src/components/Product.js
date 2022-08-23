import React, { useContext } from "react";
import "./Product.css";
import ShopContext from "../ShopContext";

const Product = ({ productInfo, productsInCart }) => {
  const { addToCart } = useContext(ShopContext);
  const { removeFromCart } = useContext(ShopContext);

  const countInCart = productsInCart.filter(
    (element) => element.id === productInfo.id
  ).length;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={productInfo.image} />
      </div>
      <div className="product-info">
        <h5>{productInfo.title}</h5>
        <h6>{productInfo.price}</h6>
      </div>
      <div className="cart-btns-container">
        <button
          onClick={() => addToCart(productInfo.id)}
          className="add-to-cart-btn"
        >
          +
        </button>
        <span>{countInCart}</span>
        <button
          onClick={() => removeFromCart(productInfo.id)}
          className="remove-from-cart-btn"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Product;
