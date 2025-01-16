import { createContext, useReducer } from "react";
import appReducer, { initialState } from "../reducers/appReducer";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  //   get APOD data
  const getApodData = async () => {
    try {
      const savedData = JSON.parse(localStorage.getItem("apodData"));

      const today = new Date().toISOString().split("T")[0];
      if (savedData && savedData.date === today) {
        dispatch({ type: "getApodData", payload: savedData });
        return;
      }

      const apiKey = "69SxOdgEfqQfcrEHra1CbQLLhN4HamUciwK4V6bW";
      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
      const response = await axios.get(url);
      const apodData = await response.data;
      // case1

      localStorage.setItem("apodData", JSON.stringify(apodData));
      dispatch({ type: "getApodData", payload: apodData });
    } catch (error) {
      console.error("Error fetching APOD data:", error);
    }
  };

  return (
    <DataContext.Provider value={{ getApodData, state }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
