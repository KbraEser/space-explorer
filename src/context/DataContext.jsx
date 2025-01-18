import { createContext, useReducer } from "react";
import appReducer, { initialState } from "../reducers/appReducer";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const apiKey = "69SxOdgEfqQfcrEHra1CbQLLhN4HamUciwK4V6bW";
  const today = new Date().toISOString().split("T")[0];

  //   get APOD data
  const getApodData = async () => {
    try {
      const savedData = localStorage.getItem("apodData")
        ? JSON.parse(localStorage.getItem("apodData"))
        : null;

      if (savedData && savedData.date === today) {
        dispatch({ type: "getApodData", payload: savedData });
        return;
      }

      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
      const response = await axios.get(url);
      const apodData = await response.data;

      localStorage.setItem("apodData", JSON.stringify(apodData));

      // case1
      dispatch({ type: "getApodData", payload: apodData });
    } catch (error) {
      console.error("Error fetching APOD data:", error);
      dispatch({ type: "error", payload: "Failed to fetch APOD data" });
    }
  };

  //   get Asteroids data
  const getAsteroidsData = async () => {
    try {
      // Local storage kontrolü
      const asteroidsSavedData = localStorage.getItem("asteroidsData")
        ? JSON.parse(localStorage.getItem("asteroidsData"))
        : null;

      if (asteroidsSavedData && asteroidsSavedData.date === today) {
        dispatch({ type: "getAsteroidsData", payload: asteroidsSavedData });
        return;
      }

      const todayDate = new Date();
      const startDate = todayDate.toISOString().split("T")[0];

      const endDate = new Date(todayDate);
      endDate.setDate(endDate.getDate() + 2);
      const endDateString = endDate.toISOString().split("T")[0];

      const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDateString}&api_key=${apiKey}`;

      const response = await axios.get(url);
      const asteroidsData = await response.data;
      console.log(asteroidsData);

      localStorage.setItem("asteroidsData", JSON.stringify(asteroidsData));

      dispatch({ type: "getAsteroidsData", payload: asteroidsData });
    } catch (error) {
      console.error("Error fetching Asteroids data:", error);
      dispatch({ type: "error", payload: "Failed to fetch Asteroids data" });
    }
  };

  return (
    <DataContext.Provider value={{ getApodData, getAsteroidsData, state }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
