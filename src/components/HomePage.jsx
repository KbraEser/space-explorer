import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/homePage.scss";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container home-background">
      <button className="btn btn-apod" onClick={() => navigate("/apod")}>
        Would you like to see the Astronomy Picture of the Day?
      </button>
      <button
        className="btn btn-asteroids"
        onClick={() => navigate("/asteroids")}
      >
        Would you like to search asteroids by their closest approach date or
        browse the data set?
      </button>
      <button
        className="btn btn-upload"
        onClick={() => {
          navigate("/yourperspective");
        }}
      >
        Would you like to upload your space photos?
      </button>
    </div>
  );
};

export default HomePage;
