import React from "react";
import Navi from "./components/Navi";
import Apod from "./components/Apod";
import Asteroids from "./components/Asteroids";

const App = () => {
  return (
    <div>
      <Navi />
      <Apod />
      <Asteroids />
    </div>
  );
};

export default App;
