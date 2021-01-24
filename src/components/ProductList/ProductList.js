import React from "react";
import Product from "../Product";
import products from "./products.json";
import "./productList.scss";

function ProductList() {
  return (
    <div className="container-fluid list-wrapper">
      <div className="row">
          {products.map((product) => {
            return <Product key={product.id} image={product.image} alt={product.alt} description={product.description} price={product.price} product={product.rating} />;
          })}
      </div>
    </div>
  );
}

export default ProductList;
