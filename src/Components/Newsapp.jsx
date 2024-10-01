import React, { useEffect, useState } from "react";
import "../App.css";
import Card from "./Card";

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_key = "85b23f9cdc5e4077b2abafb5df78911f";

  const getData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_key}`
      );

      // Check if the response status is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json(); // Parse the JSON response
      console.log(jsonData.articles); // Log the data
      setNewsData(jsonData.articles);
    } catch (error) {
      // Handle any errors, such as network issues or bad responses
      console.error("Error fetching the data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const userInput = (e) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <a>All News</a>
          <a>Trending</a>
        </ul>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          ></input>
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className="head">Stay Update With TrendingNews</p>
      </div>
      <div className="categoryBtn">
        <button onClick={() => userInput("sports")} value="sports">
          Sports
        </button>
        <button onClick={() => userInput("politics")} value="politics">
          Politics
        </button>
        <button
          onClick={() => userInput("entertainment")}
          value="entertainment"
        >
          Entertainment
        </button>
        <button onClick={() => userInput("health")} value="health">
          Health
        </button>
        <button onClick={() => userInput("fitness")} value="fitness">
          Fitness
        </button>
      </div>

      <div>{newsData ? <Card data={newsData} /> : null}</div>
    </div>
  );
};

export default Newsapp;
