import React, { useState, useEffect } from "react";
import axios from "axios";
const search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
    });
  });
  return (
    <div>
      <input
        type="search"
        name="src"
        placeholder="search products here"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {data.filter((search) => {
        if (search == "") {
          return row;
        } else if (row.title.toLowerCase().includes(search.toLowerCase())) {
          return row;
        }
      })}
    </div>
  );
};

export default search;
