import React, { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";
import "../assets/styles/apod.scss";

const Apod = () => {
  const { state, getApodData } = useContext(DataContext);
  useEffect(() => {
    getApodData();
  }, []);

  if (!state.apodData) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <h2 className="title">APOD - Astronomy Picture of the Day</h2>
      <div className="image-container">
        <img src={state.apodData.url} alt={state.apodData.title} />
        <p className="date">Date: {state.apodData.date}</p>
      </div>
      <div className="explanation">
        <h3>{state.apodData.title}</h3>
        <p>
          <span>Explanation:</span> {state.apodData.explanation}
        </p>
      </div>
    </div>
  );
};

export default Apod;
