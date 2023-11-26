import React, { useEffect, useState } from "react";
import "./main.scss";
import { Link } from "react-router-dom";

const Main = () => {
  const [api, setApi] = useState("http://localhost:3000/URL/");
  const [product, setProduct] = useState([]);

  
  
  useEffect(() => {
    const getApi = async(api) => {
      const request = await fetch(api);
      const data = await request.json();
      setProduct(data);
    };
    getApi(api)
  }, [api])




  return (
    <div className="main">
      <div className="container">
        <h2 className="main-title">New ceramics</h2>
        <div className="main-cards">
          {product &&
            product.map((item) => {
              return (
                <Link to={`/info/${item.id}`} className="main-card" key={item.id}>
                  <img src={item.image} alt="" />
                  <h4 className="main-list">{item.name}</h4>
                  <p className="main-price">{item.price}</p>
                </Link>
              );
            })}
        </div>
        <button className="main-btn">View collection</button>
      </div>
    </div>
  );
};

export default Main;
