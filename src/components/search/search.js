import React, { useEffect, useState } from "react";
import "./search.scss";
// import useFetch from "../UseFetch/useFeych";
import { Link } from "react-router-dom";
import useFetch from "../UseFetch/useFeych";

const Search = () => {
  const [api, setApi] = useState("");
  const [search, setSearch] = useState("");
  const { data, error, isPending } = useFetch(api)

  const getApi = async () => {
    const request = await fetch(`http://localhost:3000/URL3`);
    const data = await request.json();
    setApi(data);
  };

  useEffect(() => {
    getApi(api);
  }, [api]);

  
  return (
    <div className="Search">
      <div className="container">
        <div className="searchInput">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="search..."
          />
          <div className="SearchProduct">
            {api &&
              api
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().trim().includes(search);
                })
                .map((item, i) => {
                  return (
                    <Link
                      to={`/info/${item.id}`}
                      key={i}
                      className="SearchShopping"
                    >
                      <img src={item.image} alt="" />
                      <h1>{item.name}</h1>
                      <p>${item.price}</p>
                    </Link>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
