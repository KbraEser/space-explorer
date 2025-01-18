import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import "../assets/styles/navi.scss";

const Navi = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="brand" onClick={() => navigate("/")}>
        <img src={logo} alt="" />
        <h3>Space Explorer</h3>
      </div>
      <ul className="nav-links">
        <li onClick={() => navigate("/apod")}>APOD</li>
        <li onClick={() => navigate("/asteroids")}>NeoWs</li>
        <li onClick={() => navigate("/yourperspective")}>Your Perspective</li>
      </ul>
    </nav>
  );
};

export default Navi;
