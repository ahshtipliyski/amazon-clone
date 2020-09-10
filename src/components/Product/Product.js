import React from 'react';
import "./Product.scss"
import { v4 as uuidv4 } from "uuid";


function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <span role="img" aria-label="star" key={uuidv4()}>⭐️</span>
          ))}
        </div>
      </div>
      <img src={image} alt="cover"/>
      <button>Add to basket</button>
    </div>
  )
}

export default Product;
