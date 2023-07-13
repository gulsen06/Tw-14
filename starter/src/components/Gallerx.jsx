import React from "react";
import data from "../helper/data";

const Gallery = () => {
  console.log(data[0].src.large);
  return (
    <div className="image-container">
      {data.map((a, i) => (
        <div key={i}>
          <div className="image-item">
            <img src={a.src.large} alt="img" />
          </div>
          <div className="info-name">
            <p>{a.photographer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
