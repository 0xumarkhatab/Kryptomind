import React, { useState } from "react";
import "./Products.css";
import products from "../../Data/data";
import ProductInformation from "./ProductInformation";

function Products() {
  const [product, setProduct] = useState(undefined);
  console.log("product is ", product);
  const handleClick = (item) => {
    if (product !== undefined)
      document.getElementById(product.id).classList.remove("selected__product");

    document.getElementById(item.id).classList.add("selected__product");
    console.log("clicked ", document.getElementById(item.id));
    setProduct(item);
  };
  return (
    <div className="products">
      <div className="products__heading">
        <h3>Our Industry Wise</h3>
        <h1>Solutions</h1>
      </div>
      <div className="products__display">
        <div className="products__left">
          {products.map((item, index) => {
            if (index == 0 && product === undefined) {
              setTimeout(() => {
                handleClick(item);
              }, 1000);
            }
            return (
              <p id={item.id} onClick={() => handleClick(item)}>
                {item.name}
              </p>
            );
          })}
        </div>
        <div className="products__right">
          {product === undefined ? (
            setProduct(products[0])
          ) : (
            <ProductInformation product={product} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
