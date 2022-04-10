import React, { useState } from "react";
import "./Products.css";
import products from "../../Data/data";

import AppleIcon from "@mui/icons-material/Apple";
import Web from "@mui/icons-material/Language";

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
            <div className="product__information">
              <h1>{product.name}</h1>
              <br />
              <p>{product.description}</p>
              <div className="product__specifications">
                <p className="product__specifications__heading">Technology</p>
                <p className="product__specifications__heading">
                  Product Platform
                </p>
                <p className="product__specifications__heading">
                  Product Category
                </p>
                <p className="product__specifications__values">Blockchain</p>
                <div className="platform__links product__specifications__values ">
                  <a href={product.android} target="_">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      viewBox="0 0 30 30"
                      width="30px"
                      height="30px"
                    >
                      <path d="M 9.6777344 1.515625 A 0.50005 0.50005 0 0 0 9.28125 2.3046875 L 10.759766 4.4414062 C 9.3401698 5.5292967 8.3458783 7.145415 8.0800781 9 L 21.919922 9 C 21.654122 7.145415 20.65983 5.5292967 19.240234 4.4414062 L 20.71875 2.3046875 A 0.50005 0.50005 0 0 0 20.306641 1.515625 A 0.50005 0.50005 0 0 0 19.896484 1.7363281 L 18.40625 3.8925781 C 17.398252 3.3277312 16.238794 3 15 3 C 13.761206 3 12.601748 3.3277312 11.59375 3.8925781 L 10.103516 1.7363281 A 0.50005 0.50005 0 0 0 9.6777344 1.515625 z M 12 5 C 12.552 5 13 5.448 13 6 C 13 6.552 12.552 7 12 7 C 11.448 7 11 6.552 11 6 C 11 5.448 11.448 5 12 5 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 5 11 C 4.448 11 4 11.448 4 12 L 4 20 C 4 20.552 4.448 21 5 21 C 5.552 21 6 20.552 6 20 L 6 12 C 6 11.448 5.552 11 5 11 z M 8 11 L 8 21 C 8 22.105 8.895 23 10 23 L 10 26.5 C 10 27.328 10.672 28 11.5 28 C 12.328 28 13 27.328 13 26.5 L 13 23 L 17 23 L 17 26.5 C 17 27.328 17.672 28 18.5 28 C 19.328 28 20 27.328 20 26.5 L 20 23 C 21.105 23 22 22.105 22 21 L 22 11 L 8 11 z M 25 11 C 24.448 11 24 11.448 24 12 L 24 20 C 24 20.552 24.448 21 25 21 C 25.552 21 26 20.552 26 20 L 26 12 C 26 11.448 25.552 11 25 11 z"></path>
                    </svg>
                  </a>
                  <a href={product.apple} target="_">
                    {" "}
                    <AppleIcon />{" "}
                  </a>
                  <a href={product.web} target="_">
                    {" "}
                    <Web />{" "}
                  </a>
                </div>
                <p className="product__specifications__values">
                  Stellar Real-time Exchange
                </p>
              </div>
              <div className="product__image">
                <img src={product.image} alt={product.id} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
