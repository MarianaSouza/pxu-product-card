import React from "react";

function Product({image = 'https://via.placeholder.com/200X400', alt, description, price, rating}) {
  return (

		<div className="card">
			<div className="card-body">
				<img src={image} alt={alt} className="img-fluid"/>
				<p className="card-text">
                    {description}
				</p>
				<p>
					{price}
				</p>
				<div>{rating}</div>
				<button className="btn">Add to cart</button>
			</div>
		</div>
  );
}

export default Product;
