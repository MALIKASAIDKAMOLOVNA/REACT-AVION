import React, { useEffect, useState } from "react";
import "./product.scss";
import { Link } from "react-router-dom";

const Product = () => {
  const [api, setApi] = useState("http://localhost:3000/URL2/");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getApi = async (api) => {
      const request = await fetch(api);
      const data = await request.json();
      setProduct(data);
    };
    getApi(api);
  }, [api]);

  return (
    <div className="Products">
      <div className="container">
        <h2>Our popular products</h2>
        <div className="product-images">
          {product &&
            product.map((item) => {
              return (
                <Link to={`/info/${item.id}`} className="product-img" key={item.id}>
                  <img src={item.image} alt="" />
                  <h4 className="main-list">{item.name}</h4>
                  <p className="main-price">${item.price}</p>
                </Link>
              );
            })}
        </div>
        <button className="product-btn">View collection</button>
      </div>
    </div>
  );
};

export default Product;
