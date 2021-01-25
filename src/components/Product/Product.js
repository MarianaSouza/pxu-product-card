import React from "react";
import "./product.scss";

const Stars = ({ rating }) => {
  const allStars = [0, 1, 2, 3, 4];
  return (
    <div number-stars={rating} className="star-rating-wrapper">
      {allStars.map((value) => {
        return <span className="star" key={value} />;
      })}
    </div>
  );
};

function Product({ product, handleAdd }) {
  const { image, alt, description, price, rating } = product;
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <div className="product-selection">
            <img src={image} alt={alt} className="img-fluid" />
            <button
              className="btn btn-primary add-cart"
              onClick={() => handleAdd(product)}
            >
              Add to cart
            </button>
          </div>
          <div className="product-content">
            <p className="card-text">{description}</p>
            <p className="card-text">{price}</p>
            <Stars rating={rating} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
