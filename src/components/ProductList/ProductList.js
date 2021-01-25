import React from "react";
import Product from "../Product";
import "./productList.scss";

function ProductList({products}) {
  return (
    <div className="container-fluid list-wrapper">
      <div className="row no-gutters">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}

export default ProductList;
