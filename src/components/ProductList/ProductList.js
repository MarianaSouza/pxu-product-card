import React from "react";
import Product from "../Product";
import "./productList.scss";

function ProductList() {
  return (
    <div className="container-fluid list-wrapper">
      <div className="row">
        <div className="col-md-6">
          <Product />
        </div>
        <div className="col-md-6">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
