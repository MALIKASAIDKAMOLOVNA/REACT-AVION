import React, { useEffect, useState } from "react";
import "./describe.scss";

import { useParams } from "react-router-dom";
import Main from "../main/main";
import Section from "../section/section";
import Benefits from "../benefits/benefits";
import useFetch from "../UseFetch/useFeych";
import Product from "../products/product";

const Describe = ({ setProductId, productId }) => {
  const { id } = useParams();
  const [api, setApi] = useState();
  const { data, error, isPending } = useFetch(api);
  const [item, setItem] = useState([]);

  useEffect(
    (data) => {
      if (id > 4) {
        setApi(`http://localhost:3000/URL2/${id}`);
      } else if (id === 14) {
        setApi(`http://localhost:3000/URL3/${id}`);
      } else {
        setApi(`http://localhost:3000/URL/${id}`);
      }
    },
    [data]
  );

  // useEffect(
  //   () => {
  //     if (id > 4) {
  //       setApi(`http://localhost:3000/URL2/${id}`);
  //     } else {
  //       setApi(`http://localhost:3000/URL/${id}`);
  //     }
  //   },
  //   []
  // );

  useEffect(() => {
    const getApi = async (api) => {
      const request = await fetch(api);
      const data = await request.json();
      setItem(data);
    };
    getApi(api);
  }, [api]);

  const handleOpen = () => {
    if (productId.includes(data)) {
      alert("This product has been added to the cart");
    } else {
      setProductId([...productId, data]);
      // alert("Your order has been added");
    }
  };

  const handleTop = () => {
    document.documentElement.scrollTop = 0;
  };
  handleTop();

  return (
    <>
      <div className="Describe">
        <div className="container">
          {item && (
            <>
              <div className="describeImages">
                <img src={item.image} alt="" />
              </div>
              <div className="describeList">
                <h1>{item.name}</h1>
                <p className="describePrice">${item.price}</p>
                <p className="describeText">Description</p>
                <p className="pi">
                  A timeless design, with premium materials features as one of
                  our most popular and iconic pieces. The dandy chair is perfect
                  for any stylish living space with beech legs and lambskin
                  leather upholstery.
                </p>
                <ul className="describeMaterials">
                  <li className="material">Premium material</li>
                  <li className="material">Handmade upholstery</li>
                  <li className="material">Quality timeless classic</li>
                </ul>
                <div className="Dimensionss">Dimensions</div>
                <div className="Dimension">
                  <div className="DimensionList">
                    <h5>Height</h5>
                    <p>110cm</p>
                  </div>
                  <div className="DimensionList">
                    <h5>Width</h5>
                    <p>75cm</p>
                  </div>
                  <div className="DimensionList">
                    <h5>Depth</h5>
                    <p>50cm</p>
                  </div>
                </div>
                <div className="Amount">
                  <p>Amount:</p>
                  <button onClick={() => handleOpen()} className="AmountBtn">
                    Add to cart
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <Main />
        <Product />
        <Section />
        <Benefits />
      </div>
    </>
  );
};

export default Describe;
