import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.scss";
import Home from "../Home/home";
import Describe from "../describe/describe";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Main from "../main/main";
import Shopping from "../shopping/shopping";
import { useState } from "react";
import Search from "../search/search";

const App = () => {
  const [productId, setProductId] = useState([]);
  const [bars, setBars] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar element={<Shopping setBars={setBars} bars={bars} />} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/info/:id"
            element={
              <Describe productId={productId} setProductId={setProductId} />
            }
          />
          <Route path="/info/:id" element={<Main />} />
          <Route
            path="/shopping"
            element={
              <Shopping
                setBars={setBars}
                bars={bars}
                productId={productId}
                setProductId={setProductId}
              />
            }
          />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
