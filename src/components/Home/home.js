import React from "react";
import Header from "../Header/Header";
import Section from "../section/section";
import Main from "../main/main";
import Product from "../products/product";
import Benefits from "../benefits/benefits";
import Studio from "../studio/studio";

const Home = () => {
  return (
    <div>
      <Header />
      <Section />
      <Main />
      <Product />
      <Benefits />
      <Studio />
    </div>
  );
};

export default Home;
