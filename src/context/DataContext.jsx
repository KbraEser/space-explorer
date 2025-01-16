import { createContext, useReducer } from "react";
import appReducer, { initialState } from "../reducers/appReducer";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  //   get APOD data
  const getApodData = async () => {
    const url = "https://api.nasa.gov/planetary/apod";
    const response = await axios.get(url);
    const apodData = await response.data;
    // case1
    dispatch({ type: "getApotData", payload: apodData });
  };

  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export default DataContext;
