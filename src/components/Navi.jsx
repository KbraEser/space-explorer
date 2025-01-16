import React from "react";
import DataContext from "../context/DataContext";
import logo from "../assets/images/moon.jpg";
import "../assets/styles/navi.scss";

const Navi = () => {
  //   const { state, dispatch } = useContext(DataContext);
  return (
    <nav>
      <div className="brand">
        <img src={logo} alt="" />
        <h3>Space Explorer</h3>
      </div>
      <ul className="nav-links">
        <li>APOD </li>
        <li>NeoWs</li>
      </ul>
    </nav>
  );
};

export default Navi;
