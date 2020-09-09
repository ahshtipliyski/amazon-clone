import React from 'react';
import "./Product.scss"

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
        <span role="img" aria-label="star">⭐️</span>
        </div>
      </div>
      <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="cover"/>
      <button>Add to basket</button>
    </div>
  )
}

export default Product;
