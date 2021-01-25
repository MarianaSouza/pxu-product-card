import React, {useState} from "react";
import Product from "../Product";
import Checkout from "../Checkout"
import "./productList.scss";

function ProductList({products}) {

const[selected, setSelected] = useState([])

 function Add(product){
   setSelected([...selected, product]);
 }

 function Remove(product_id){
  const newList = selected.filter(item => item.id !== product_id);
  setSelected(newList);
 }
 
  return (
    <div className="container-fluid list-wrapper">
      <div className="row no-gutters">
          {products.map((product) => {
            return <Product key={product.id} product={product} handleAdd={Add} />;
          })}
      </div>
      <Checkout selected={selected} handleRemove={Remove} />
    </div>
  );
}

export default ProductList;
