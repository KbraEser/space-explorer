import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Apod from "./components/Apod";
import Asteroids from "./components/Asteroids";
import Navi from "./components/Navi";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apod" element={<Apod />} />
        <Route path="/asteroids" element={<Asteroids />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
