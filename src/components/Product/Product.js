import React from "react";
import './product.scss';

function Product({ image, alt, description, price, rating }) {
  return (
    <div className="col-md-6 no-gutters">
      <div className="card">
        <div className="card-body">
          <div className="product-selection">
            <img src={image} alt={alt} className="img-fluid" />
            <button className="btn btn-primary add-cart" onClick={()=> alert("Product added to cart")}>Add to cart</button>
          </div>
          <div className="product-content">
            <p className="card-text">{description}</p>
            <p>{price}</p>
            <div>{rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
