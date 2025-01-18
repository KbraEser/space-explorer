import React from "react";
import Apod from "./components/Apod";
import Asteroids from "./components/Asteroids";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apod" element={<Apod />} />
          <Route path="/asteroids" element={<Asteroids />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
