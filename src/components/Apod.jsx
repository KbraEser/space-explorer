import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import "../assets/styles/apod.scss";

const Apod = () => {
  const { state, getApodData } = useContext(DataContext);
  useEffect(() => {
    getApodData();
  }, []);

  if (!state.apodData) return <div className="loading">Loading...</div>;

  const { url, media_type, title, date, explanation } = state.apodData;

  return (
    <div className="container">
      <h2 className="title">APOD - Astronomy Photo of the Day</h2>
      <div className="media-container">
        {media_type === "image" ? (
          <img src={url} alt={title} />
        ) : (
          <iframe
            src={url}
            title={title}
            allow="fullscreen"
            className="iframe"
          ></iframe>
        )}
        <p className="date">Date: {date}</p>
      </div>
      <div className="explanation">
        <h3>{title}</h3>
        <p>
          <span>Explanation:</span> {explanation}
        </p>
      </div>
    </div>
  );
};

export default Apod;
