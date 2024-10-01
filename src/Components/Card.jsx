import React from "react";

const Card = ({ data }) => {
  // Check if data is available
  console.log(data);

  if (!data || data.length === 0) {
    return <p>No data available</p>; // Fallback if data is null or empty
  }

  const readMore = (url) => {
    window.open(url, "_blank"); // Opens the URL in a new tab
  };

  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) {
          return null;
        } else {
          return (
            <div className="card" key={index}>
              <img src={curItem.urlToImage} alt={curItem.title} />
              <div className="cardContent">
                <a href={curItem.url} target="_blank" rel="noopener noreferrer">
                  {curItem.title}
                </a>
                <p>{curItem.description}</p>
                {/* Corrected the onClick function */}
                <button onClick={() => readMore(curItem.url)}>Read More</button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
